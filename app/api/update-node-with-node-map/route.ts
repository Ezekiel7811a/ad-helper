import { CustomNode } from "@/models/custome-node";
import { NodeDTO } from "@/models/node-dto";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
    const nodesMap = await fs
        .readFile(
            path.join(process.cwd(), "public/node-map/node-map.json"),
            "utf-8"
        )
        .then((data) => JSON.parse(data))
        .then((data) => data.nodes as CustomNode[]);

    const nodes = await fs
        .readFile(path.join(process.cwd(), "public/nodes/nodes.json"), "utf-8")
        .then((data) => JSON.parse(data))
        .then((data) => data as NodeDTO[]);

    nodes.map((node) => {
        const nodeMap = nodesMap.find(
            (nodeMap) => nodeMap.data.label === node.title
        );
        if (nodeMap) {
            node.links = nodeMap.data.links
                .map((link) => nodesMap.find((n) => n.id === link)?.data.label)
                .filter((link) => link !== undefined);
        }
    });
    fs.writeFile(
        path.join(process.cwd(), "public/nodes/nodes.json"),
        JSON.stringify(nodes, null, 2)
    );
    return Response.json({ message: "Success" }, { status: 200 });
}
