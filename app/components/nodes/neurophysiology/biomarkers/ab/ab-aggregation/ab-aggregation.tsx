import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const ABAggregation = new MyNode(
    "ABAggregation",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.cai2023physiological]}>
                Aβ42 is more prone to deposition than Aβ40 due to the strong
                hydrophobicity of the C-terminal amino-acid residue.
            </CitationCard>
            <CitationCard citations={[bibtex.cai2023physiological]}>
                Oligomers: These are small, soluble clusters of Aβ that form
                before fibrils. Although they are not part of the plaque itself,
                oligomers are believed to be the most neurotoxic form of Aβ.
                They can disrupt cell function and synaptic signaling, and their
                toxicity plays a significant role in the early stages of
                Alzheimer&apos;s, often before plaques are detectable. Fibrils:
                These are the structural building blocks of plaques. Fibrils
                form when multiple Aβ molecules stack together in a highly
                ordered, insoluble structure. The accumulation of fibrils
                eventually leads to the formation of visible plaques. Plaques:
                These are large, dense deposits of amyloid-beta (Aβ) found in
                the brain tissue of Alzheimer&apos;s patients. They are
                primarily composed of Aβ fibrils, which are long, insoluble
                chains of aggregated Aβ molecules. Plaques are visible under a
                microscope and are one of the hallmark pathological features of
                Alzheimer&apos;s.
            </CitationCard>
            <span>
                <CitationCard
                    citations={[
                        bibtex.lawrence2014regulation,
                        bibtex.anni2021abeta1,
                    ]}
                >
                    In recent years, more studies have focused on the aggregated
                    forms and effective sites of Aβ. So, several studies have
                    shown that it is the N-terminal Aβ, particularly the 1–16
                    fragment, that exerts excitatory effects and promotes
                    vesicular recycling,
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.gulisano2019neuromodulatory,
                        bibtex.duan2022exogenous,
                        bibtex.gulisano2018effect,
                    ]}
                >
                    even reversing the Aβ toxicity. Besides, Aβ42 oligomers,
                    commonly regarded as toxic, have been reported to enhance
                    synaptic plasticity at picomolar concentrations.
                </CitationCard>
            </span>
        </NodeCard>
    )
);

export const Wrapper = () => <>{ABAggregation.content}</>;

export default ABAggregation;
