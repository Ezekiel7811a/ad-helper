import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import Figure from "@/app/components/figure/figure";

export const AberrantCholesterol = new MyNode(
    "AberrantCholesterol",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                <Figure
                    src="images/immune/aberrant_cholesterol.png"
                    alt="Aberrant cholesterol"
                    caption="Aberrant cholesterol signaling"
                    n={1}
                />
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{AberrantCholesterol.content}</>;

export default AberrantCholesterol;
