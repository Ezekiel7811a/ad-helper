import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Hypothesis from "@/app/components/hypothesis/hypothesis.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const Hyperexcitability = new MyNode(
    "Hyperexcitability",
    [],
    (
        <div>
            <CitationCard
                citations={[
                    bibtex.martinez2023combining,
                    bibtex.zott2019vicious,
                    bibtex.busche2015rescue,
                    bibtex.verret2012inhibitory,
                    bibtex.busche2008clusters,
                ]}
            >
                There is strong evidence that Aβ plaques, as well as soluble
                forms of Aβ,area key player in driving neuronal
                hyperexcitability in AD, which might ultimately give rise to
                epileptiform activity.
            </CitationCard>
            <CitationCard citations={[bibtex.martinez2023combining]}>
                Significant patterns of hyperexcitability observed in prefrontal
                regions associated with Aβ deposition.
            </CitationCard>
            <CitationCard citations={[bibtex.van2022multiscale]}>
                A link between neuronal hyperactivity in preclinical AD to
                oscillatory slowing has been shown.
            </CitationCard>
            <CitationCard citations={[bibtex.pusil2019hypersynchronization]}>
                As the disease progresses, the hypersynchronization observed in
                the pMCI group would cause neuronal death due to excessive
                calciummediated activity (de Haan et al., 2012a, b), leading to
                the characteristic network disruption observed in more advanced
                stages of Alzheimer’s disease (Locatelli et al., 1998; Koenig et
                al., 2005; Stam et al., 2009).
            </CitationCard>
            pyramidal neurons exhibit hyperactivity, possibly due to the lack of
            GABAergic perisomatic synapses (Garcia-Marin et al., 2009). This
            increase of activity generates, in turn, an increment of the APP
            endocytosis, reinforcing the aberrant circle of amyloid-b
            production.
            <CitationCard citations={[bibtex.zott2019vicious]}>
                Ab can induce hyperexcitation in sensitive neurons and that this
                drives a vicious cycle of hyperactivation. Next, the block of
                synaptically released glutamate at active excitatory synapses is
                an important element of the vicious cycle. The third component
                of the cycle is excessive perisynaptic accumulation of
                glutamate. The final element of the cycle is revealed by the
                dependence of the increase in hyperactivation on the level of
                baseline activity, both for synthetic and human brainderived Ab
                dimers. Abdependent hyperactivity precedes plaque formation and
                is present at early stages, long before plaques.
            </CitationCard>
            <div>Interpretations:</div>
            <CitationCard citations={[bibtex.pusil2019hypersynchronization]}>
                we may speculate that the profile of hypersynchronization found
                here, as in other studies, may be related to the pathological
                process of Alzheimer’s disease (de Haan et al., 2012a, b;L ́ opez
                et al., 2014). This view of synchronization as a pathological
                sign, not as compensatory, would reflect the hyperexcitability
                of the pyramidal neurons induced by the lack of inhibitory
                connections caused by the toxic effects of the neuritic plaques
                as previously shown in animal models (Cirrito et al., 2005;
                Garcia-Marin et al., 2009). Thus, the greater the neuronal
                excitability, the greater the likelihood of neuronal
                synchronization, which may lead to the establishment of aberrant
                relationships between brain areas
            </CitationCard>
            <CitationCard citations={[bibtex.maestu2021neuronal]}>
                (Nakamura et al., 2017) showed increased phase synchronization
                (delta and theta frequency bands) between the precuneus and the
                bilateral inferior parietal lobules in asymptomatic
                amyloid-positive. And between ante-posterior networks.
            </CitationCard>
            <Hypothesis>
                Hypersynchrony observed in AD is a direct result of Aβ-induced
                overactivation of excitatory neurons due to disrupted inhibitory
                (GABAergic) control, rather than a compensatory mechanism.
                Supported by{" "}
                <CitationCard citations={[bibtex.maestu2021neuronal]}>
                    the loss of GABAergic transmission, could induce
                    hyperactivity, increasing the probability of local
                    synchronization of brain oscillatory activity
                </CitationCard>
            </Hypothesis>
            <CitationCard citations={[bibtex.maestu2021neuronal]}>
                However, p-tau also mediated increased synchronization between
                the anterior cingulate cortex (ACC) and the medial temporal lobe
                in the beta frequency band (Canuet et al., 2015), probably due
                to the interaction with amyloid deposits, which mainly cause
                neuronal hyperactivation (Busche and Konnerth, 2016).
            </CitationCard>
            <Hypothesis>
                If hypersynchrony is driven by Aβ pathology, then directional
                connectivity from regions with higher Aβ load to regions with
                lower Aβ load should show causal hypersynchrony.
            </Hypothesis>
            <CitationCard citations={[bibtex.maestu2021neuronal]}>
                Also, it should be noted that increased neuronal activity arises
                without any compensating mechanisms implemented, supporting the
                idea that hyperactivity is not compensatory.
            </CitationCard>
            <CitationCard citations={[bibtex.maestu2021neuronal]}>
                As cells die and synapses lose their drive in AD, neuronal
                homeostatic synaptic scaling adjusts neuronal firing activity.
                However, this effect can itself become pathological, as it
                produces increased imbalance between excitatory and inhibitory
                circuits, leading to greater calcium-mediated excitotoxicity
            </CitationCard>
            <CitationCard citations={[bibtex.maestu2021neuronal]}>
                animal models of AD have shown how the diminishing of
                hyperexcitability by levetiracetam improves their cognitive
                abilities (Sanchez et al., 2012).
            </CitationCard>
            <CitationCard citations={[bibtex.cai2023physiological]}>
                Aβ mediates presynaptic enhancement and synaptic transmission by
                increasing miniature synaptic vesicle release and mEPSC
                frequency, which depends on the history of activation. [53, 55]
            </CitationCard>
            <CitationCard citations={[bibtex.cai2023physiological]}>
                plaques where part of the neurons with hyperactivity are
                exclusively found [136, 137]. The mechanism is attributed to the
                fact that low levels of Aβ enhance glutamate release and
                regulate Ca2+ homeostasis, particularly in the early stages of
                AD [99].
            </CitationCard>
        </div>
    )
);

export const Wrapper = () => <>{Hyperexcitability.content}</>;

export default Hyperexcitability;
