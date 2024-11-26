import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import Figure from "@/app/components/figure/figure";

export const InsulinSignaling = new MyNode(
    "InsulinSignaling",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                <Figure
                    src="images/immune/insulin_signaling.png"
                    alt="Insulin signaling"
                    caption="Insulin signaling"
                    n={1}
                />
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{InsulinSignaling.content}</>;

export default InsulinSignaling;
