import { Edge, Node } from "@xyflow/react";
import { promises as fs } from "fs";

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  const nodes: Node[] = body.nodes as Node[];
  const edges: Edge[] = body.edges as Edge[];

  const filePath = "public/node-map/node-map.json";

  const data = {
    nodes,
    edges,
  };

  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    return new Response("Success", { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response("Error", { status: 500 });
  }
}
