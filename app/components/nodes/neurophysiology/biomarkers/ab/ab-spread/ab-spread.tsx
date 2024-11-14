import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const ABSpread = new MyNode(
    "ABSpread",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.cai2023physiological]}>
                Within neurons, Aβ is located in neurites [80, 81]. Aβ is
                supposed to be primarily released by synapses [83, 84]. AB
                interstitial are regulated by synaptic activity and synaptic
                vesicle exocytosis, implicating a mechanism on the presynaptic
                side of the synaptic cleft [51]. neuronal activity-dependent
                endocytosis of APP is involved in ~ 70% of the regulatory
                mechanisms in synaptic Aβ release [52].
            </CitationCard>
            <CitationCard citations={[bibtex.cai2023physiological]}>
                In synapses, Aβ is predominantly distributed in the presynaptic
                membrane [78, 85]. Consistent with this, a metaanalysis of AD
                synaptic pathology showed that presynaptic markers are affected
                more than postsynaptic markers [86]. However, it has also been
                shown that in cultured murine neurons, γ-secretase is located
                both presynaptically and postsynaptically [89]. Furthermore, a
                recent super-resolution microscopy study found that co-labeling
                with APP is stronger postsynaptically than presynaptically [90].
                Therefore, more evidence is needed to clarify the distribution
                of Aβ at the synapse.
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{ABSpread.content}</>;

export default ABSpread;
