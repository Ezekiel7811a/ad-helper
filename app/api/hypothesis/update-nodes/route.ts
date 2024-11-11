import { NodeDTO } from "@/models/node-dto";
import { promises as fs } from "fs";
import { getHypotheses } from "../route";

export const updateNodes = async (nodes: NodeDTO[]): Promise<NodeDTO[]> => {
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
