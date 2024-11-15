import { Citation } from "@/models/citation";
import { promises } from "fs";

export async function GET(req: Request) {
    const isToSave = new URL(req.url).searchParams.get("saving") === "true";

    const bibtex = await promises.readFile(
        "public/citations/bibtex.bib",
        "utf-8"
    );

    const refs = bibtex
        .split(/(?=@\w+{)/)
        .filter((entry) => entry.trim() !== "");
    const refsObj = refs.reduce((acc, ref) => {
        const type = ref.match(/@(\w+){/)?.[1] ?? undefined;
        const bibrefMatch = ref.match(/^@\w+{([^,]+),/);
        const bibref = bibrefMatch ? bibrefMatch[1] : null; // Extracts "seibyl2023visual"

        if (!bibref) return acc; // Skip entries without a valid bibref

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

        // Accumulate each entry into the main object with bibref as key
        acc[bibref] = {
            type,
            bibref,
            authorsList: [],
            ...entries.reduce(
                (entryAcc, entry) => ({
                    ...entryAcc,
                    [entry.key]: entry.value,
                }),
                {}
            ),
        };
        return acc;
    }, {} as Record<string, Citation>);

    if (isToSave) {
        promises
            .writeFile(
                "public/citations/bibtex.json",
                JSON.stringify(refsObj, null, 2)
            )
            .catch(console.error);
    }

    return Response.json(refsObj, { status: 200 });
}
