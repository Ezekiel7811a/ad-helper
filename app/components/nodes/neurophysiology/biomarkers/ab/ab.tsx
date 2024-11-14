import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Figure from "@/app/components/figure/figure.tsx";
import Hypothesis from "@/app/components/hypothesis/hypothesis.tsx";
import NodeCard from "@/app/components/node-card/node-card";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const AB = new MyNode(
    "Amyloid Beta (AB)",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.cai2023physiological]}>
                Aβ was recognized as an endogenous neuropeptide that is
                physiologically metabolized in the central nervous system [6].
            </CitationCard>
            <CitationCard citations={[bibtex.cai2023physiological]}>
                <Figure
                    src="images/ab/ab_roles.png"
                    alt="AB roles"
                    n={1}
                    caption="Schematic representation of the suggested physiological and pathological roles of Aβ"
                />
            </CitationCard>
            Amyloid-b is primarily produced by the endocytosis of a
            transmembrane protein, amyloid precursor protein (APP), which
            modulates synapse formation and function (Priller et al., 2006). APP
            inside the neuron increases the amyloid-b production that is
            secreted into the brain interstitial fluid. The accumulation of
            soluble amyloid-b within the interstitial fluid becomes abnormal
            during Alzheimer’s disease as amyloid-b starts to aggregate into
            soluble amyloid-b oligomers and extracellular amyloidb plaques
            (Cirrito et al., 2005).Both amyloid-b forms exert a toxic effect on
            cells, causing the synaptic dysfunction that is a critical
            characteristic of the pathogenesis of Alzheimer’s disease (Selkoe,
            2002).
            <CitationCard citations={[bibtex.gallego2024synergistic]}>
                Aβ plaques deposition can begin up to two decades before symptom
                onset1-4,9, initially accumulating in cortical areas with high
                metabolic baseline activity, such as the precuneus, medial
                orbitofrontal and posterior cingulate cortices10,11, before
                spreading to the entire neocortex, brainstem and subcortical
                nuclei
            </CitationCard>
            <CitationCard citations={[bibtex.wiesman2024neurochemical]}>
                Amyloid Beta (Aβ) Plaques: These plaques, which are a hallmark
                of AD, are found at high levels (SUVR) in prefrontal and
                parieto-temporal cortices bilaterally. This spatial pattern
                aligns with regions showing abnormal rhythmic and aperiodic
                activity, suggesting a possible direct relationship between Aβ
                deposition and these neurophysiological changes. Brain regions
                with high densities of cholinergic (α4β2, M1), cannabinoid
                (CB1), mu-opioid (MOR), noradrenergic (NET), and specific
                serotonergic receptors (5-HT6, 5-HT1b) were more likely to show
                Aβ deposition.
            </CitationCard>
            <Hypothesis>
                Aβ plaques concentration is associated with an increased
                frequency of epileptiform activity in AD patients.
            </Hypothesis>
            Some studies, like those by Dubois et al. (2018) and Teipel et al.
            (2018), did not find significant correlations between amyloid-PET
            and EEG/MEG connectivity in amyloid-positive subjects, leading to
            potential concerns about compatibility.
            <CitationCard citations={[bibtex.maestu2021neuronal]}>
                <Figure
                    src="images/hypersynchronization/ab_hyperexcitation.png"
                    alt="AB hyperexcitation model"
                    n={1}
                    caption="AB hyperexcitation model"
                />
            </CitationCard>
            <div>
                Pyramidal cells are the main disrupted type of neurons with
                A&beta; plaques.
            </div>
            <CitationCard citations={[bibtex.maestu2021neuronal]}>
                <Figure
                    src="images/ab-tau/ab_pyramidal.png"
                    alt="AB pyramidal"
                    n={2}
                    caption="Aβ depositions on pyramidal cells"
                />
                Aβ plaques, associated with Alzheimer’s Disease (AD), can form
                either in the spaces between neurons (neuropil) or directly on
                the surface of neuronal cell bodies. When Aβ plaques are on the
                surface of neuronal cell bodies, they disrupt GABAergic synapses
                in the perisomatic region. This loss of GABAergic inhibition is
                significant because it may cause neurons to become hyperactive
                due to a lack of inhibitory control around the cell body. Aβ
                plaques near the dendrites in the neuropil may lead to the loss
                of dendritic spines, which are small protrusions that typically
                form excitatory synapses. This loss of dendritic spines means a
                partial reduction in excitatory input to those neurons, but it
                doesn’t heavily impact the overall control of their activity
                since it only affects part of the dendritic structure. In
                summary, Aβ plaques can reduce inhibitory synapses (causing
                hyperactivity) near the cell bodies of neurons and reduce
                excitatory synapses on dendrites in the neuropil. Each change
                has a different impact on neuronal activity and synaptic
                circuits, contributing to the disruptions seen in
                Alzheimer&apos;s Disease.
            </CitationCard>
            <Hypothesis>
                In Alzheimer’s Disease (AD) patients, a higher density of Aβ
                plaques will correlate with a flatter PSD slope, particularly in
                frontal and temporal regions, due to decreased perisomatic
                GABAergic inhibition and increased neuronal hyperactivity in
                these areas.
            </Hypothesis>
            <Hypothesis>
                Regions with high tau pathology in AD patients will show a
                steeper PSD slope due to tau&apos;s impact on excitatory
                neurons, resulting in reduced high-frequency power and an
                increased relative contribution of low-frequency activity.
            </Hypothesis>
            <Hypothesis>
                In brain regions with both Aβ and tau pathology, the effect on
                PSD slope will depend on the relative densities of Aβ versus
                tau: Aβ-dominant regions will have a flatter slope, while
                tau-dominant regions will exhibit a steeper slope.
            </Hypothesis>
            <CitationCard citations={[bibtex.maestu2021neuronal]}>
                Animal models of AD have shown that Aβ plaques induce local
                morphological alterations in the dendrites that are in contact
                with Aβ (e.g., (Knafo et al., 2009; Spires et al., 2005; Tsai et
                al., 2004)).
            </CitationCard>
            <CitationCard citations={[bibtex.canuet2015network]}>
                Patients with abnormal CSF AB42 levels exhibited decreased
                functional connectivity between right temporal areas and several
                cortical regions of the frontal, parietal, and temporal lobes
                compared with patients with normal CSF levels. Decreased alpha
                connectivity was found between the right posterior cingulate
                cortex and the ipsilateral middle temporal cortex, as well as
                between the right medial temporal and left superior parietal
                cortex. In the beta band, there was decreased connectivity
                between the right inferior temporal cortex and the ipsilateral
                precentral area. These areas also exhibited decreased
                connectivity in the gamma band. In addition, a decrease in gamma
                connectivity was found between the right superior temporal
                cortex and the contralateral anterior temporal area.
                <Hypothesis>
                    Unexpected results based on our model. Can we reproduce that
                    ?
                </Hypothesis>
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
                    n={3}
                    caption="Aβ transport"
                />
            </CitationCard>
            <CitationCard citations={[bibtex.cai2023physiological]}>
                <Figure
                    src="images/ab/ab_degrading.png"
                    alt="AB degrading"
                    caption="Aβ Degradation"
                    n={4}
                />
                Degrading. Aβ is transported by lipoprotein receptorrelated
                protein (LRP) and receptor for advanced glycation end products
                (RAGE). In cells, Aβ can be degraded by insulin-degrading
                enzymes and neprilysin or be bound by peripheral substances.
            </CitationCard>
            <CitationCard citations={[bibtex.cai2023physiological]}>
                Aβ deposits first appear in the neocortex, followed by
                allocortical regions, diencephalic nuclei, the striatum, and the
                cholinergic nuclei of the basal forebrain [60]; the entorhinal
                cortex is one of the most vulnerable regions [61]. Similarly, in
                normal brains, the cortex and hippocampus strongly express APP,
                suggesting the regions where Aβ abounds [62, 63].
            </CitationCard>
            <CitationCard citations={[bibtex.cai2023physiological]}>
                AB is not only detected in neurons but also glial cells,
                especially in astrocytes [77].
            </CitationCard>
            <CitationCard citations={[bibtex.cai2023physiological]}>
                APP is more frequently associated with glutamatergic rather than
                GABAergic or cholinergic terminals, indicating that endogenous
                Aβ is predominantly derived from excitatory neurons [78]. Given
                the high expression of APP in a heterogeneous subset of
                GABAergic interneurons, it has been reported that these
                interneurons take part in ~ 17% of the soluble Aβ and ~ 30% of
                the total hippocampal plaque burden, and interneurons are also
                located in the CA1 region, where plaques are most prevalent
                (accounting for ~ 75%) [79]
            </CitationCard>
            <CitationCard citations={[bibtex.cai2023physiological]}>
                high concentrations of Aβ oligomers can cause the collapse of
                dendritic spines [84, 99] and disruption of LTP [100]. On the
                other hand blocage of endogenous AB does not protect synaptic
                transmission. Physiological concentrations of Aβ increase
                dendritic spine density [59], and promote docking vesicles [36].
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{AB.content}</>;

export default AB;
