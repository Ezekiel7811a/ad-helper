import { promises as fs } from "fs";
import path from "path";
import { NodeDTO } from "@/models/node-dto";

export const getNodesDTO = async (dirPath: string): Promise<NodeDTO[]> => {
  const filesList: string[] = [];
  const searchFiles = async (dirPath: string) => {
    const files = await fs.readdir(dirPath);
    files.forEach(async (file) => {
      const filePath = path.join(dirPath, file);
      if (await fs.stat(filePath).then((stat) => stat.isDirectory())) {
        await searchFiles(filePath);
      } else if (filePath.endsWith(".tsx")) {
        const corrFilePath = filePath.replace(/\\/g, "/").split("nodes/")[1];
        filesList.push(corrFilePath);
      }
    });
  };

  searchFiles(dirPath);

  const nodesDTO: NodeDTO[] = await Promise.all(
    filesList.map(async (filePath) => {
      try {
        return await import(`@/app/components/nodes/${filePath}`)
          .then((module) => module.default)
          .then((node) => {
            return {
              title: node.title,
              links: node.links,
              path: filePath,
              hypotheses: [],
            };
          });
      } catch {
        console.error(filePath);
        return null;
      }
    })
  ).then((nodes) => nodes.filter((node) => node !== null));

  return nodesDTO;
};

export async function writeNodesDTO() {
  const dirPath = path.join(process.cwd(), "app/components/nodes");
  const nodesDTO = await getNodesDTO(dirPath);

  fs.writeFile(
    "public/nodes/nodes.json",
    JSON.stringify(nodesDTO, null, 2)
  ).catch((err) => {
    console.error(err);
  });
}
