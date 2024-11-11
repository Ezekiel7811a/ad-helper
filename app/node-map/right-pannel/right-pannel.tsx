import { MyNode } from "@/models/node";
import { NodeDTO } from "@/models/node-dto";
import { Button } from "@mui/material";
import { Edge, Node } from "@xyflow/react";

interface Props {
  nodes: NodeDTO[];
  createNode: (node: NodeDTO) => void;
  nodesMap: Node[];
  edgesMap: Edge[];
}

const RightPannel = ({ nodes, createNode, nodesMap, edgesMap }: Props) => {
  return (
    <div className="col-span-1 p-4 h-screen flex flex-col">
      <div className="flex gap-5 justify-center p-4">
        <div className="text-2xl">Nodes</div>
        <Button
          style={{ background: "#f0f0f0", color: "#000000" }}
          onClick={async () => {
            await fetch("/api/save-node-map", {
              method: "POST",
              body: JSON.stringify({ nodes: nodesMap, edges: edgesMap }),
            });
            await fetch("/api/update-node-with-node-map");
          }}
        >
          Save changes
        </Button>
      </div>
      <div className="flex flex-col gap-y-5 overflow-auto flex-grow">
        {nodes.map((node, index) => (
          <Button
            style={{
              backgroundColor: "#f0f0f0",
              color: "#000000",
              padding: "8px",
            }}
            onClick={() => createNode(node)}
            key={index}
          >
            {node.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default RightPannel;
