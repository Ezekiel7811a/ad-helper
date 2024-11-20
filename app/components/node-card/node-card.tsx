import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const NodeCard = ({ children }: Props) => {
    return <div className="flex flex-col gap-y-12 mb-10">{children}</div>;
};

export default NodeCard;
