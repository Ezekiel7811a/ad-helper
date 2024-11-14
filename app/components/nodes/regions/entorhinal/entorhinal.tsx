import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import Hypothesis from "@/app/components/hypothesis/hypothesis";

export const Entorhinal = new MyNode(
    "Entorhinal",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.vogels2020propagation]}>
                AD always seems to affect the same cell type, i.e., the large
                excitatory pyramidal cells in layer II of the entorhinal cortex
                that project via the performant pathway to the hippocampus. It
                has been proposed that the regional vulnerability of these
                neurons in the entorhinal cortex stems from their high metabolic
                rate resulting from high dendritic complexity, long unmyelinated
                axons, high degrees of plasticity, and unique gene expression
                signature related to tau homeostasis (67–70).
            </CitationCard>
            <Hypothesis>
                There is a correlation between the metabolic rate of the region
                (due to high dendritic complexity, long unmyelinated axons, high
                degrees of plasticity, and unique gene expression signature
                related to tau homeostasis) and tau burden.
            </Hypothesis>
        </NodeCard>
    )
);

export const Wrapper = () => <>{Entorhinal.content}</>;

export default Entorhinal;
