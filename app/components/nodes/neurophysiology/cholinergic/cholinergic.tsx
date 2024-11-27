import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const Cholinergic = new MyNode(
    "Cholinergic",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                The cholinergic hypothesis was the earliest to delineate the
                pathogenesis of AD. It describes the severe damage of
                cholinergic neurons in the nucleus basalis of meynert (NBM),
                leading to a marked decrease in choline acetyltransferase (ChAT)
                activity within the primary projection areas - the cerebral
                cortex and hippocampus (regions associated with learning and
                memory). Additionally, this neuronal damage is accompanied by a
                significant increase in the density of senile plaques.
                Suggesting a close relationship between deficits of basal
                forebrain cholinergic and cognitive impairments 91-97
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                It has been observed that cholinergic neurons in the NBM region
                are particularly susceptible to degeneration and loss in AD. It
                is believed to be associated with nerve growth factor
                (NGF)dependent nutritional depletion.100,101
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                Acetylcholine (ACh) is synthesized from choline and
                acetyl-coenzyme A by ChAT, then transported into synaptic
                vesicles through the vesicular acetylcholine transporter
                (VAChT). When a neural signal arrives, ACh is released, where it
                binds to muscarinic and nicotinic acetylcholine receptors
                (mAChRs and nAChRs) on the postsynaptic membrane to transmit
                neural signals. Subsequently, ACh in the synaptic cleft is
                degraded into choline by acetylcholinesterase (AChE) and
                reabsorbed into presynaptic cholinergic neurons.31,102–104
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                The decline in the activity of ChAT, combined with the
                detrimental effects of Aβ on nutritional imbalance, the
                synthesis, release, and degradation of ACh, leads to a reduction
                of ACh levels. This decrease impairs its physiological functions
                in learning, memory, motor regulation, and sleep cycle
                regulation.97,105–108
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{Cholinergic.content}</>;

export default Cholinergic;
