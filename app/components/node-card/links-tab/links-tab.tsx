import { Button } from "@mui/material";

interface Props {
  nodes: string[];
  setNode: (label: string) => void;
}

const LinksTab = ({ nodes, setNode }: Props) => {
  return (
    <div className="flex flex-col gap-y-5">
      {nodes &&
        nodes.map((node, index) => (
          <Button
            key={index}
            onClick={() => {
              setNode(node);
            }}
            style={{
              color: "var(--text-color)",
              padding: "10px",
            }}
          >
            {node}
          </Button>
        ))}
    </div>
  );
};

export default LinksTab;
