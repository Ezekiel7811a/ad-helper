import { MyNode } from "@/models/node";
import { Button } from "@mui/material";

interface Props {
  nodes: string[];
  setNode: (label: string) => void;
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
            {node}
          </Button>
        ))}
    </div>
  );
};

export default LinksTab;
