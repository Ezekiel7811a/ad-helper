import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const Hippocampus = new MyNode(
    "Hippocampus",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.dubois2014advancing]}>
                Memory deficit none retrieved even with cues correlate
                significantly with hippocampal volume and, more precisely, with
                the CA1 field in three-dimensional hippocampal surface-based
                shape analysis.10
            </CitationCard>
            <CitationCard citations={[bibtex.dubois2014advancing]}>
                hippocampal loss occurs at a rate that is approximately two to
                four times faster in patients with AD than in age-matched
                healthy controls.173,174
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{Hippocampus.content}</>;

export default Hippocampus;
