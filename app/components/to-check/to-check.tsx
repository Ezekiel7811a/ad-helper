import { ReactNode } from "react";

const ToCheck = ({
    string,
    children,
}: {
    string?: string;
    children?: ReactNode;
}) => {
    return (
        <div className="text-green">
            {string}
            {children && children}
        </div>
    );
};

export default ToCheck;
