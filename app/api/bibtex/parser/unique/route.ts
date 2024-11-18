import { Citation } from "@/models/citation";
import { promises as fs } from "fs";
import path from "path";
import { env } from "process";
import bibtex from "@/public/citations/bibtex.json";

export async function POST(request: Request) {
    const { bibref } = await request.json();
    if (!bibref) {
        return Response.json({ error: "No bibref provided" }, { status: 400 });
    }
    const parsedCitation = parse(bibref);
    if (!parsedCitation.bibref) {
        return Response.json({ error: "Invalid bibref" }, { status: 400 });
    }
    const apiPath = `${
        env.BASE_URL ?? "https://ad-helper.vercel.app/"
    }/api/bibtex/by-bibref/?bibref=${parsedCitation.bibref}`;
    const res = await fetch(apiPath);
    if (res.ok) {
        return Response.json(
            { error: "Citation already exists" },
            { status: 409 }
        );
    }

    fs.appendFile(
        path.join(process.cwd(), "/public/citations/bibtex.bib"),
        `\n${bibref}`
    ).catch((err) => console.log(err));

    (bibtex as Record<string, typeof parsedCitation>)[parsedCitation.bibref] =
        parsedCitation;
    fs.writeFile(
        path.join(process.cwd(), "/public/citations/bibtex.json"),
        JSON.stringify(bibtex, null, 2)
    ).catch((err) => console.log(err));

    return Response.json(parsedCitation, { status: 200 });
}

const parse = (ref: string): Citation => {
    const type = ref.match(/@(\w+){/)?.[1] ?? undefined;
    const bibrefMatch = ref.match(/^@\w+{([^,]+),/);
    const bibref = bibrefMatch ? bibrefMatch[1] : null;

    if (!bibref) throw new Error("Invalid bibref");

    const contents = ref
        .replace(/^@\w+{[^,]+,/, "")
        .trim()
        .split("\n")
        .filter((line) => line.trim() !== "");
    const entries = contents.map((content) => {
        const [key, rawValue] = content.split("=").map((str) => str.trim());
        const value = rawValue?.replace(/^{|},?$/g, ""); // Removes surrounding braces `{}` and any trailing commas
        return { key, value };
    });
    return {
        type,
        bibref,
        authorsList: [],
        ...entries.reduce(
            (entryAcc, entry) => ({ ...entryAcc, [entry.key]: entry.value }),
            {}
        ),
    };
};
