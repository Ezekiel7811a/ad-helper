import bibtex from "@/public/citations/bibtex.json";

export async function GET(req: Request) {
    const title = new URL(req.url).searchParams.get("title");

    const citation = bibtex.find((citation) => citation.title === title);

    if (!citation) {
        return Response.json({ error: "Citation not found" }, { status: 404 });
    }

    return Response.json(citation, { status: 200 });
}
