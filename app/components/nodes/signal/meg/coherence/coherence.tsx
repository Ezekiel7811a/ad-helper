import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const Coherence = new MyNode(
    "Coherence",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.vidaurre2016spectrally]}>
                The Hidden Markov Model (HMM)-MAR framework is used to study
                dynamic brain states, and coherence helps us understand how
                functional connectivity changes over time. Here s why coherence
                is useful in this context: HMM-MAR tells us which brain states
                exist. Coherence tells us how different brain regions are
                functionally connected within each state.
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{Coherence.content}</>;

export default Coherence;
