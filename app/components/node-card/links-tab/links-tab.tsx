import { MyNode } from "@/models/node";
import { Button } from "@mui/material";

interface Props {
  nodes: MyNode[];
  setNode: (node: MyNode) => void;
}

const LinksTab = ({ nodes, setNode }: Props) => {
  return (
    <div>
      {nodes &&
        nodes.map((node, index) => (
          <Button
            key={index}
            onClick={() => {
              setNode(node);
            }}
          >
            {node.title}
          </Button>
        ))}
    </div>
  );
};

export default LinksTab;
