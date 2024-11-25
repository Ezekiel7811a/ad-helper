import { ContentCopy } from "@mui/icons-material";
import { Button } from "@mui/material";
import { MathJax } from "better-react-mathjax";
import { ReactNode } from "react";

const MathsCard = ({ children }: { children: ReactNode }) => {
    const handleCopy = () => {
        if (children) {
            navigator.clipboard.writeText(children.toString());
        }
    };

    return (
        <div className="w-auto justify-items-center p-5">
            <div className="bg-slate-300 w-1/3 ml-10 mr-10 pt-2 shadow-lg relative">
                <Button
                    style={{
                        position: "absolute",
                        right: "0em",
                        top: "1em",
                        padding: "10px",
                        zIndex: "5",
                        color: "black",
                    }}
                    onClick={handleCopy}
                >
                    <ContentCopy />
                </Button>
                <MathJax>{children}</MathJax>;
            </div>
        </div>
    );
};

export default MathsCard;
