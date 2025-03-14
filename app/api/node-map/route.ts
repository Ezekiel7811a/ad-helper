import { promises as fs } from "fs";
import path from "path";

export async function GET(req: Request): Promise<Response> {
    try {
        const data = await fs
            .readFile(
                path.join(process.cwd(), "public/node-map/node-map.json"),
                "utf-8"
            )
            .then((data) => JSON.parse(data));
        return Response.json(data, { status: 200 });
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : "Unknown error";
        return Response.json(errorMessage, { status: 500 });
    }
}
