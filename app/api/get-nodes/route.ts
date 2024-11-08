import fs from "fs";
import { MyNode } from "@/models/node";
import path from "path";

export interface NodeDTO {
  title: string;
  links: string[];
  path: string;
}

export async function GET(req: Request): Promise<Response> {
  const isToSave: boolean = Boolean(
    new URL(req.url).searchParams.get("saving")
  );

  const dirPath = path.join(process.cwd(), "public/nodes");
  const filesList: string[] = [];

  const searchFiles = (dirPath: string) => {
    const files = fs.readdirSync(dirPath);
    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      if (fs.statSync(filePath).isDirectory()) {
        searchFiles(filePath);
      } else if (filePath.endsWith(".js")) {
        const corrFilePath = filePath.replace(/\\/g, "/").split("nodes/")[1];
        filesList.push(corrFilePath);
      }
    });
  };
  searchFiles(dirPath);

  const nodes: MyNode[] = await Promise.all(
    filesList.map(async (filePath) => {
      try {
        const myModule = await import(`@/public/nodes/${filePath}`);
        return myModule.default as MyNode;
      } catch (e) {
        console.error(filePath, e);
        return null;
      }
    })
  ).then((nodes) => nodes.filter((node) => node !== null));

  const nodesDTO: NodeDTO[] = nodes.map((node, index) => ({
    title: node.title,
    links: node.links,
    path: filesList[index].replace(".js", ".tsx"),
  }));

  if (isToSave) {
    fs.writeFileSync(
      "public/nodes/nodes.json",
      JSON.stringify(nodesDTO, null, 2)
    );
  }

  return Response.json(nodesDTO, { status: 200 });
}
