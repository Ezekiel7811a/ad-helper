import { CustomNode } from "@/models/custome-node";
import { NodeDTO } from "@/models/node-dto";
import { Edge } from "@xyflow/react";
import { promises as fs } from "fs";

export const updateNodeMap = async (nodeMap: {
  nodes: CustomNode[];
  edges: Edge[];
}): Promise<{
  nodes: CustomNode[];
  edges: Edge[];
}> => {
  const customNodes = nodeMap.nodes;
  const nodesDto: NodeDTO[] = await fs
    .readFile("public/nodes/nodes.json", "utf-8")
    .then((data) => JSON.parse(data))
    .then((data) => data as NodeDTO[]);

  const updatedNodes = await Promise.all(
    customNodes.map(async (node) => {
      return {
        ...node,
        data: {
          ...node.data,
          hypotheses:
            nodesDto.find((n) => n.title === node.data.label)?.hypotheses || [],
        },
      };
    })
  );

  return { nodes: updatedNodes, edges: nodeMap.edges };
};

export async function GET(req: Request) {
  try {
    const nodesMap = await fs
      .readFile("public/node-map/node-map.json", "utf-8")
      .then(
        (data) => JSON.parse(data) as { nodes: CustomNode[]; edges: Edge[] }
      );

    const updatedNodeMap = await updateNodeMap(nodesMap);
    await fs.writeFile(
      "public/node-map/node-map.json",
      JSON.stringify(updatedNodeMap, null, 2)
    );

    return Response.json({ message: "Success" }, { status: 200 });
  } catch (e) {
    console.error(e);
    return Response.json("Error", { status: 500 });
  }
}
