import { MyNode } from "@/models/node";

interface Props {
  node: MyNode;
}

const NodeCard = ({ node }: Props) => {
  const { title, content } = node;
  return (
    <div className="flex flex-col gap-y-12">
      <div className="title">{title}</div>
      <div className="paragraph">{content && <div>{content}</div>}</div>
    </div>
  );
};

export default NodeCard;
