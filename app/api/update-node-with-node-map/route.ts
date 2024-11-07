import { CustomNode } from "@/models/custome-node";
import { MyNode } from "@/models/node";
import { promises as fs } from "fs";

export async function GET(req: Request) {
  const nodesMap = await fs
    .readFile("public/node-map/node-map.json", "utf-8")
    .then((data) => JSON.parse(data))
    .then((data) => data.nodes as CustomNode[]);

  const nodes = await fs
    .readFile("public/nodes/nodes.json", "utf-8")
    .then((data) => JSON.parse(data))
    .then((data) => data as MyNode[]);

  nodes.map((node) => {
    const nodeMap = nodesMap.find(
      (nodeMap) => nodeMap.data.label === node.title
    );
    if (nodeMap) {
      nodeMap.data.links.map((link) => {
        const linkedNodeMap = nodesMap.find((n) => n.id === link);
        if (linkedNodeMap) {
          node.links.push(linkedNodeMap.data.label);
        }
      });
    }
  });
  fs.writeFile("public/nodes/nodes.json", JSON.stringify(nodes, null, 2));
  return Response.json({ message: "Success" }, { status: 200 });
}
