import { NodeDTO } from "@/models/node-dto";
import { promises } from "fs";
import path from "path";

export async function POST(req: Request) {
    const nodes: NodeDTO[] = await req.json();

    promises
        .writeFile(
            path.join(process.cwd() + "/public/nodes/nodes.json"),
            JSON.stringify(nodes)
        )
        .catch((err) => console.log(err));
    return Response.json({ message: "success" }, { status: 200 });
}

export async function GET() {
    const nodes: NodeDTO[] = JSON.parse(
        await promises.readFile(
            path.join(process.cwd() + "/public/nodes/nodes.json"),
            "utf-8"
        )
    );
    return Response.json(nodes, { status: 200 });
}
