import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const Amyloidogenic = new MyNode(
    "Amyloidogenic",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.cai2023physiological]}>
                The Amyloidogenic Pathway (Aβ-forming pathway): In this pathway,
                β-secretase first cleaves APP, followed by γ-secretase, which
                produces Aβ fragments. This pathway generates Aβ, which, if
                accumulated, can aggregate and form plaques commonly associated
                with Alzheimer’s disease. This happens in subcellular
                compartments like endoplasmic reticulum/intermediate
                compartment, and Golgi apparatus/trans-Golgi network [16–18].
                APP is proteolyzed by β-secretase[19] exposing the N-terminus of
                Aβ. Then γ-secretase works to generate the C-terminus. The
                C-terminus ranges from 37 to 49 amino acids in length, with Aβ40
                (~90%) and Aβ42 (~5-10%) being the most common forms. Aβ42 is
                more prone to aggregation and is the primary component of
                amyloid plaques [20, 21].
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{Amyloidogenic.content}</>;

export default Amyloidogenic;
