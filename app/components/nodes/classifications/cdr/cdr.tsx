import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const CDR = new MyNode(
    "CDR",
    [],
    (
        <NodeCard>
            <CitationCard citations={[]}>CDR</CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{CDR.content}</>;

export default CDR;
