import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const ABAggregation = new MyNode(
    "ABAggregation",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.cai2023physiological]}>
                Aβ42 is more prone to deposition than Aβ40 due to the strong
                hydrophobicity of the C-terminal amino-acid residue.
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{ABAggregation.content}</>;

export default ABAggregation;
