import { promises as fs } from "fs";
import { NodeDTO } from "@/models/node-dto";
import path from "path";

const getNodeByLabel = async (label: string): Promise<NodeDTO> => {
    const nodes = await fs
        .readFile(path.join(process.cwd() + "public/nodes/nodes.json"), "utf-8")
        .then((data) => JSON.parse(data))
        .then((data) => data as NodeDTO[]);

    const node = nodes.find((node) => node.title === label) as NodeDTO;
    if (!node) {
        throw new Error("Node not found");
    }
    return node;
};

const getHypotheses = async (thisPath: string) => {
    const hypotheses = [];
    const soup = await fs.readFile(
        path.join(process.cwd() + `app/components/nodes/${thisPath}`),
        "utf-8"
    );
    const regex = /<Hypothesis>([\s\S]*?)<\/Hypothesis>/g;
    let match;

    while ((match = regex.exec(soup)) !== null) {
        hypotheses.push(match[1].trim());
    }
    return hypotheses;
};

export async function GET(req: Request) {
    const label = new URL(req.url).searchParams.get("label");
    if (!label) {
        return Response.json("label query parameter is required", {
            status: 400,
        });
    }
    let node: NodeDTO;
    try {
        node = await getNodeByLabel(label);
    } catch (e) {
        console.error(e);
        return Response.json("Error", { status: 500 });
    }
    const hypotheses = await getHypotheses(node.path).then((hypotheses) =>
        JSON.stringify(hypotheses)
    );
    return Response.json({ hypotheses: hypotheses }, { status: 200 });
}
