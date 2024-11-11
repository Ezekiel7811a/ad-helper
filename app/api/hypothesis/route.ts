import { promises as fs } from "fs";
import { getNodeByLabel } from "../get-node-by-label/route";
import { NodeDTO } from "@/models/node-dto";

export const getHypotheses = async (path: string) => {
  const hypotheses = [];
  const soup = await fs.readFile(`public/nodes/${path}`, "utf-8");
  const regex = /<Hypothesis>([\s\S]*?)<\/Hypothesis>/g;
  let match;

  while ((match = regex.exec(soup)) !== null) {
    hypotheses.push(match[1].trim());
  }
  return hypotheses;
};

export async function GET(req: Request) {
  const label = new URL(req.url).searchParams.get("label");
  if (!label) {
    return Response.json("label query parameter is required", {
      status: 400,
    });
  }
  let node: NodeDTO;
  try {
    node = await getNodeByLabel(label);
  } catch (e) {
    console.error(e);
    return Response.json("Error", { status: 500 });
  }
  const hypotheses = await getHypotheses(node.path).then((hypotheses) =>
    JSON.stringify(hypotheses)
  );
  return Response.json({ hypotheses: hypotheses }, { status: 200 });
}
