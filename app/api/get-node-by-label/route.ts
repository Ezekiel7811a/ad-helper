import { CustomNode } from "@/models/custome-node";
import { MyNode } from "@/models/node";
import { promises as fs } from "fs";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const label = url.searchParams.get("nodeLabel");
    if (!label) {
      return Response.json("nodeLabel query parameter is required", {
        status: 400,
      });
    }

    const nodes = await fs
      .readFile("public/nodes/nodes.json", "utf-8")
      .then((data) => JSON.parse(data))
      .then((data) => data as MyNode[]);

    const node = nodes.find((node) => node.title === label);

    return Response.json(node, { status: 200 });
  } catch (e) {
    console.error(e);
    return Response.json("Error", { status: 500 });
  }
}
