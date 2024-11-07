import { MyNode } from "@/models/node";
import { Button } from "@mui/material";
import { Edge, Node } from "@xyflow/react";

interface Props {
  nodes: MyNode[];
  createNode: (node: MyNode) => void;
  nodesMap: Node[];
  edgesMap: Edge[];
}

const RightPannel = ({ nodes, createNode, nodesMap, edgesMap }: Props) => {
  return (
    <div className="col-span-1 p-4 h-screen ">
      <div className="flex gap-5 justify-center p-4">
        <div className="text-2xl">Nodes</div>
        <Button
          style={{ background: "#f0f0f0", color: "#000000" }}
          onClick={async () => {
            await fetch("/api/save-node-map", {
              method: "POST",
              body: JSON.stringify({ nodes: nodesMap, edges: edgesMap }),
            });
            await fetch("/api/update-nodes-with-node-map");
          }}
        >
          Save changes
        </Button>
      </div>
      <div className="flex flex-col gap-y-5 overflow-auto h-auto">
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
