import fs from "fs";
import { MyNode } from "@/models/node";
import path from "path";

const thisPath = "signal/pet/pet.js";
const moduleAtn = await import(`@/public/nodes/${thisPath}`);
const ATN = moduleAtn.default;

export async function GET(req: Request): Promise<Response> {
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
        console.error(filePath);
        return null;
      }
    })
  ).then((nodes) => nodes.filter((node) => node !== null));

  fs.writeFileSync("public/nodes/nodes.json", JSON.stringify(nodes, null, 2));

  return Response.json(nodes, { status: 200 });
}
