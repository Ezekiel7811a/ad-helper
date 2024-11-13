import { NodeDTO } from '@/models/node-dto';
import { promises } from 'fs';

export async function POST(req: Request) {
    const nodes: NodeDTO[] = await req.json();

    promises.writeFile('public/nodes/nodes.json', JSON.stringify(nodes)).catch((err) => console.log(err));
    return Response.json({message: "success"}, { status: 200 });
}

export async function GET() {
    const nodes: NodeDTO[] = JSON.parse(await promises.readFile('public/nodes/nodes.json', 'utf-8'));
    return Response.json(nodes, { status: 200 });
}