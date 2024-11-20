import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const Signal = new MyNode(
    "Signal",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.dubois2014advancing]}>
                108 Results from this study showed that individuals with
                increased ligand retention in amyloid imaging typically have
                decreased CSF Aβ and increased CSF tau concentrations.
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{Signal.content}</>;

export default Signal;
