import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Hypothesis from "@/app/components/hypothesis/hypothesis.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const GlialCells = new MyNode(
    "GlialCells",
    [],
    (
        <div>
            <CitationCard citations={[bibtex.maestu2021neuronal]}>
                Microglia (immune cells in the brain) become active when neurons
                are hypoactive. They can further reduce neuronal firing and are
                known to clear synapses and neurons in AD, contributing to loss
                of E. also contribute to synapse removal and become structurally
                abnormal in AD. These changes further disrupt neuron
                communication and could impair brain circuits.
            </CitationCard>
            <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                Microglia can internalize and attempt to degrade tau aggregates
                from dead neurons. However, when overwhelmed, they accumulate
                toxic tau, leading to microglial dysfunction. Microglia can also
                spread tau by packing it into exosomes, which contain highly
                toxic tau forms, facilitating tau pathology spread in the brain.
                Reducing microglia activity suppresses tau spread in animal
                models.
            </CitationCard>
            <CitationCard citations={[bibtex.maestu2021neuronal]}>
                Astrocytes also contribute to synapse removal and become
                structurally abnormal in AD. These changes further disrupt
                neuron communication and could impair brain circuits.
            </CitationCard>
            <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                Astrocytes also internalize tau, implying they may contribute to
                tau pathology spread as well.
            </CitationCard>
            <CitationCard citations={[bibtex.maestu2021neuronal]}>
                Oligodendrocytes (cells involved in myelination) are implicated
                in AD, but their specific role is still under research.
            </CitationCard>
            <Hypothesis>
                It is possible to make a model of MEG signal / features based on
                tau and Aβ that takes into account their interactions with one
                another and with glial cells. As it is possible to predict the
                AD progression based on MEG features it would help understand
                glial cells role in AD progression.
            </Hypothesis>
            <CitationCard citations={[bibtex.vogels2020propagation]}>
                while microglia phagocytose extracellular tau, they seem unable
                to fully degrade it, secreting it back into the extracellular
                space; in this way, microglia may contribute to the propagation
                of tau pathology (63).
            </CitationCard>
            <CitationCard citations={[bibtex.vogels2020propagation]}>
                adenoassociated virus (AAV) model has been used to show that
                when microglia were depleted, spreading was greatly diminished,
                thereby providing the first evidence that microglia play an
                important role in tau propagation (61).
            </CitationCard>
            <div>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    Microglia has numerous pattern recognition receptors that
                    can bind to Aβ, initiating an inflammatory cascade. This
                    process promotes the assembly and activation of NLRP3,
                    leading to the release of pro-inflammatory cytokines, which
                    further exacerbate the aggregation of Aβ.171 In addition,
                    the diagram also encompasses the downstream signaling
                    pathways of TREM2.638,639 Some variants associated with AD,
                    such as the TREM2 variant R47H, may potentially diminish the
                    binding or internalization of TREM2 with ligands such as
                    APOE-Aβ complexes, APOE, phospholipids, and Aβ. This
                    reduction may consequently impair the activation of
                    microglial cells, thereby compromising their ability to
                    clear amyloid plaques.638,640–643
                </CitationCard>
            </div>
        </div>
    )
);

export const Wrapper = () => <>{GlialCells.content}</>;

export default GlialCells;
