import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const TauEncoding = new MyNode(
    "TauEncoding",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                Exon 10 encodes for one of the four possible microtubule-binding
                repeat domains (MTBD), which are 31–32 aa long imperfect repeat
                sequences, located in the C-terminal half of the tau protein and
                affecting both microtubule-binding affinity and fibrillization
                properties of tau. Splicing isoforms of tau contain either three
                (3R) or four (4R) MTBDs, which affects their microtubule-binding
                affinity (4R &gt; 3R)
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{TauEncoding.content}</>;

export default TauEncoding;
