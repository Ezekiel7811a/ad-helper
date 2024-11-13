import { NodeDTO } from "@/models/node-dto";

export const getNodesDTO = async (): Promise<NodeDTO[]> => {
  const filesList: string[] = await fetch("api/nodes/folder").then((res) => res.json());
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
      } catch(err) {
        console.error(filePath);
        return null;
      }
    })
  ).then((nodes) => nodes.filter((node) => node !== null));

  return nodesDTO;
};

export const writeNodesDTO = async (): Promise<Response> => {
  const nodesDTO = await getNodesDTO();

  const res = await fetch("api/nodes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nodesDTO),
  })

  fetch ("api/update-node-with-node-map")
  return res;
}
