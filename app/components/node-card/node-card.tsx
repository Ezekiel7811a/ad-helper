import { MyNode } from "@/models/node";

interface Props {
  node: MyNode;
}

const NodeCard = ({ node }: Props) => {
  const { title, content } = node;
  return (
    <div>
      {title}
      {content && <div>{content}</div>}
    </div>
  );
};

export default NodeCard;
