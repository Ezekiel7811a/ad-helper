import { NodeDTO } from "@/models/node-dto";
import { promises as fs } from "fs";
import path from "path";

const getNodeByLabel = async (label: string): Promise<NodeDTO> => {
    const nodes = await fs
        .readFile(path.join(process.cwd(), "/public/nodes/nodes.json"), "utf-8")
        .then((data) => JSON.parse(data))
        .then((data) => data as NodeDTO[]);

    const node = nodes.find((node) => node.title === label) as NodeDTO;
    if (!node) {
        throw new Error("Node not found");
    }
    return node;
};

export async function GET(req: Request) {
    const url = new URL(req.url);
    const label = url.searchParams.get("nodeLabel");
    if (!label) {
        return Response.json("nodeLabel query parameter is required", {
            status: 400,
        });
    }

    try {
        const node: NodeDTO = await getNodeByLabel(label);
        if (!node) {
            return Response.json("Node not found", { status: 404 });
        }

        return Response.json(node, { status: 200 });
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : "Unknown error";
        return Response.json(errorMessage, { status: 500 });
    }
}
