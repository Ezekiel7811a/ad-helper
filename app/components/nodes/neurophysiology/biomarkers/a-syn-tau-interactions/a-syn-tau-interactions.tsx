import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const ASynTauInteractions = new MyNode(
    "ASynTauInteractions",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                Tau and α-synuclein promote fibrillization of each other [78]
                and insoluble forms of tau and α-synuclein have been found
                co-aggregating in Lewy bodies,
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{ASynTauInteractions.content}</>;

export default ASynTauInteractions;
