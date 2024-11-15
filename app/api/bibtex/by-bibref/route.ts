import { Citation } from "@/models/citation";
import bibtex from "@/public/citations/bibtex.json";

export async function GET(req: Request) {
    const bibref = new URL(req.url).searchParams.get("bibref");

    if (!bibref) {
        return Response.json({ error: "No bibref provided" }, { status: 400 });
    }
    const citation = bibtex[bibref as keyof typeof bibtex];

    if (!citation) {
        return Response.json({ error: "Citation not found" }, { status: 404 });
    }

    return Response.json(citation, { status: 200 });
}
