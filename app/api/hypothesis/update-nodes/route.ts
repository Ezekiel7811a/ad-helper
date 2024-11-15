import { NodeDTO } from "@/models/node-dto";
import { promises as fs } from "fs";

const getHypotheses = async (path: string) => {
    const hypotheses = [];
    const soup = await fs.readFile(`public/nodes/${path}`, "utf-8");
    const regex = /<Hypothesis>([\s\S]*?)<\/Hypothesis>/g;
    let match;

    while ((match = regex.exec(soup)) !== null) {
        hypotheses.push(match[1].trim());
    }
    return hypotheses;
};

const updateNodes = async (nodes: NodeDTO[]): Promise<NodeDTO[]> => {
    const updatedNodes = await Promise.all(
        nodes.map(async (node) => {
            return {
                ...node,
                hypotheses: await getHypotheses(node.path),
            };
        })
    );
    return updatedNodes;
};

export async function GET() {
    const nodes = await fs
        .readFile("public/nodes/nodes.json", "utf-8")
        .then((data) => JSON.parse(data))
        .then((data) => data as NodeDTO[]);

    try {
        const updatedNodes = await updateNodes(nodes);
        await fs.writeFile(
            "public/nodes/nodes.json",
            JSON.stringify(updatedNodes, null, 2)
        );
        return Response.json(updatedNodes, { status: 200 });
    } catch (e) {
        console.error(e);
        return Response.json("Error", { status: 500 });
    }
}
