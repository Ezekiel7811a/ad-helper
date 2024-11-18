import { promises } from "fs";
import path from "path";

export async function GET(req: Request) {
    const bibref = new URL(req.url).searchParams.get("bibref");
    if (!bibref) {
        return Response.json({ error: "No bibref provided" }, { status: 400 });
    }

    const bibtex = await promises.readFile(
        path.join(process.cwd(), "/public/citations/bibtex.bib"),
        "utf-8"
    );

    const refs = bibtex
        .split(/(?=@\w+{)/)
        .filter((entry) => entry.trim() !== "");
    const matchingRef = refs.find((ref) => ref.includes(bibref));

    if (!matchingRef) {
        return Response.json({ error: "Citation not found" }, { status: 404 });
    }

    return Response.json(matchingRef, { status: 200 });
}
