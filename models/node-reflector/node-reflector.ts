import fs from "fs";
import path from "path";
import { MyNode } from "../node";

export const getNodes = async (dirPath: string): Promise<MyNode[]> => {
  const filesList: string[] = [];

  const searchFiles = (dirPath: string) => {
    const files = fs.readdirSync(dirPath);
    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      if (fs.statSync(filePath).isDirectory()) {
        searchFiles(filePath);
      } else if (filePath.endsWith(".jsx")) {
        filesList.push(filePath);
      }
    });
  };

  const getNodesFromFiles = async (filePaths: string[]): Promise<MyNode[]> => {
    const nodes: MyNode[] = [];
    for (const filePath of filePaths) {
      const myModule = await import(filePath);
      const node = myModule.default;
      if (node) {
        nodes.push(node);
      }
    }
    return nodes;
  };

  searchFiles(dirPath);
  const nodes: MyNode[] = await getNodesFromFiles(filesList);

  return nodes;
};
