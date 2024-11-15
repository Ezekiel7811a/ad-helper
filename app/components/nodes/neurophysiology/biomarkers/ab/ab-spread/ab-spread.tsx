import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import Figure from "@/app/components/figure/figure";

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
            <CitationCard citations={[bibtex.cai2023physiological]}>
                synaptic activity dynamically regulates soluble extracellular Aβ
                concentrations [6, 31, 148]. Aβ release depends on synaptic
                activity mediated by endocytosis [52]
            </CitationCard>
            <CitationCard citations={[bibtex.cai2023physiological]}>
                The mature Aβ along with the C-terminal fragment (CTF) is
                packaged into vesicles or is secreted into extracellular space.
                Intracellularly, Aβ can be transported in both anterograde and
                retrograde directions. APP [24] as well as somatic Aβ [25] are
                transported in the fast anterograde component, while retrograde
                transport to cell bodies occurs when Aβ is absorbed by synaptic
                reuptake or is produced by APP internalized from distal axon
                terminals [26].
                <Figure
                    src="images/ab/ab_transporting.png"
                    alt="AB transporting"
                    n={1}
                    caption="Aβ transport"
                />
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{ABSpread.content}</>;

export default ABSpread;
