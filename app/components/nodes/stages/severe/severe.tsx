import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const Severe = new MyNode(
    "Severe",
    [],
    (
        <NodeCard>
            <CitationCard citations={[]}>Severe</CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{Severe.content}</>;

export default Severe;
