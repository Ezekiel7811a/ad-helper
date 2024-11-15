import { ReactNode } from "react";

const SectionTitle = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-gray-100 p-4 rounded-md shadow-md text-xl font-semibold text-gray-800">
            {children}
        </div>
    );
};

export default SectionTitle;
