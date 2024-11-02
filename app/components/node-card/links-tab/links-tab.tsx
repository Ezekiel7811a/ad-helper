import { MyNode } from "@/models/node";

interface Props {
  nodes: MyNode[];
}

const LinksTab = ({ nodes }: Props) => {
  return (
    <div>
      {nodes && nodes.map(({ title }, index) => <div key={index}>{title}</div>)}
    </div>
  );
};

export default LinksTab;
