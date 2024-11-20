import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const Moderate = new MyNode(
    "Moderate",
    [],
    (
        <NodeCard>
            <CitationCard citations={[]}>Moderate</CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{Moderate.content}</>;

export default Moderate;
