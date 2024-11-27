import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Figure from "@/app/components/figure/figure.tsx";
import Hypothesis from "@/app/components/hypothesis/hypothesis.tsx";
import NodeCard from "@/app/components/node-card/node-card";
import SectionTitle from "@/app/components/section-title/section-title";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const Introduction = () => {
    return (
        <div>
            <span>
                <CitationCard citations={[bibtex.kamenetz2003app]}>
                    Aβ was recognized as an endogenous neuropeptide that is
                    physiologically metabolized in the central nervous system by
                    the APP.
                </CitationCard>
                <CitationCard citations={[bibtex.cirrito2005synaptic]}>
                    Aβ is then secreted into the brain ISF. The accumulation of
                    soluble Aβ within the ISF becomes abnormal during AD as Aβ
                    starts to aggregate into soluble Aβ oligomers and
                    extracellular Aβ plaques.
                </CitationCard>
                <CitationCard citations={[bibtex.selkoe2002alzheimer]}>
                    Both forms exert a toxic effect on cells, causing the
                    synaptic dysfunction that is a critical characteristic of
                    the pathogenesis of AD.
                </CitationCard>
                <CitationCard citations={[bibtex.walsh2002naturally]}>
                    Although a widely held view is that Aβ oligomers, rather
                    than fibrils or monomers, are the neurotoxic forms.
                </CitationCard>
            </span>
            <CitationCard citations={[bibtex.cai2023physiological]}>
                <Figure
                    src="images/ab/ab_roles.png"
                    alt="AB roles"
                    n={1}
                    caption="Schematic representation of the suggested physiological and pathological roles of Aβ"
                />
            </CitationCard>
        </div>
    );
};

const Distribution = () => {
    return (
        <span>
            <CitationCard
                citations={[
                    bibtex.dubois2016preclinical,
                    bibtex.jack2024revised,
                    bibtex.sperling2011toward,
                ]}
            >
                Aβ plaques deposition can begin up to two decades before symptom
                onset.
            </CitationCard>
            <CitationCard
                citations={[
                    bibtex.palmqvist2017earliest,
                    bibtex.villeneuve2015existing,
                ]}
            >
                Initially accumulating in cortical areas with high metabolic
                baseline activity, such as the precuneus, medial orbitofrontal
                and posterior cingulate cortices.
            </CitationCard>
            <CitationCard citations={[bibtex.gallego2024synergistic]}>
                before spreading to the entire neocortex, brainstem and
                subcortical nuclei.
            </CitationCard>
            <CitationCard citations={[bibtex.thal2002phases]}>
                followed by allocortical regions, diencephalic nuclei, the
                striatum, and the cholinergic nuclei of the basal forebrain.
            </CitationCard>
            <CitationCard citations={[bibtex.harris2010transsynaptic]}>
                the entorhinal cortex is one of the most vulnerable regions
            </CitationCard>
            <CitationCard
                citations={[bibtex.hick2015acute, bibtex.wang2014amyloid]}
            >
                Similarly, in normal brains, the cortex and hippocampus strongly
                express APP, suggesting the regions where Aβ abounds.
            </CitationCard>
            <CitationCard citations={[bibtex.wiesman2024neurochemical]}>
                Aβ Plaques are found at high SUVR in prefrontal and
                parieto-temporal cortices bilaterally. This spatial pattern
                aligns with regions showing abnormal rhythmic and aperiodic
                activity, suggesting a possible direct relationship between Aβ
                deposition and these neurophysiological changes. Brain regions
                with high densities of cholinergic (α4β2, M1), cannabinoid
                (CB1), mu-opioid (MOR), noradrenergic (NET), and specific
                serotonergic receptors (5-HT6, 5-HT1b) were more likely to show
                Aβ deposition.
            </CitationCard>
            <CitationCard citations={[bibtex.liao2016single]}>
                AB is not only detected in neurons but also glial cells,
                especially in astrocytes.
            </CitationCard>
            Suporting once more the importance of glial cells in AD.
        </span>
    );
};

const Impact = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.maestu2021neuronal]}>
                <Figure
                    src="images/ab-tau/ab_pyramidal.png"
                    alt="AB pyramidal"
                    n={2}
                    caption="Aβ depositions on pyramidal cells"
                />
                <Figure
                    src="images/hypersynchronization/ab_hyperexcitation.png"
                    alt="AB hyperexcitation model"
                    n={1}
                    caption="Aβ hyperexcitation model"
                />
            </CitationCard>
            <span>
                <CitationCard citations={[bibtex.maestu2021neuronal]}>
                    Aβ plaques can form either in the neurpil or directly on the
                    surface of neuronal cell bodies. When Aβ plaques are on the
                    surface of neuronal cell bodies, they disrupt GABAergic
                    synapses in the perisomatic region. This loss of GABAergic
                    inhibition is significant because it may cause neurons to
                    become hyperactive due to a lack of inhibitory control
                    around the cell body. Aβ plaques near the dendrites in the
                    neuropil may lead to the loss of dendritic spines, which are
                    small protrusions that typically form excitatory synapses.
                    This loss of dendritic spines means a partial reduction in
                    excitatory input to those neurons.
                </CitationCard>
                This is further suported by
                <CitationCard
                    citations={[
                        bibtex.knafo2009widespread,
                        bibtex.spires2005dendritic,
                        bibtex.tsai2004fibrillar,
                    ]}
                >
                    animal models of AD that have shown that Aβ plaques induce
                    local morphological alterations in the dendrites that are in
                    contact with Aβ.
                </CitationCard>
            </span>
            <div>&nbsp;</div>
            <span>
                Although this model explains the hyperexcitability observed in
                AD it is somehow controversial with observed impact of Aβ. For
                instance
                <CitationCard citations={[bibtex.canuet2015network]}>
                    Patients with abnormal CSF AB42 levels exhibited decreased
                    functional connectivity between right temporal areas and
                    several cortical regions of the frontal, parietal, and
                    temporal lobes compared with patients with normal CSF
                    levels. Decreased alpha connectivity was found between the
                    right posterior cingulate cortex and the ipsilateral middle
                    temporal cortex, as well as between the right medial
                    temporal and left superior parietal cortex. In the beta
                    band, there was decreased connectivity between the right
                    inferior temporal cortex and the ipsilateral precentral
                    area. These areas also exhibited decreased connectivity in
                    the gamma band. In addition, a decrease in gamma
                    connectivity was found between the right superior temporal
                    cortex and the contralateral anterior temporal area.
                    <Hypothesis>
                        Unexpected results based on our model. Can we reproduce
                        that ?
                    </Hypothesis>
                </CitationCard>
                Also
                <CitationCard citations={[bibtex.rodrigues2014synaptic]}>
                    APP is more frequently associated with glutamatergic rather
                    than GABAergic or cholinergic terminals, indicating that
                    endogenous Aβ is predominantly derived from excitatory
                    neurons.
                </CitationCard>
                <CitationCard citations={[bibtex.rice2020contribution]}>
                    Given the high expression of APP in a heterogeneous subset
                    of GABAergic interneurons, it has been reported that these
                    interneurons take part in ~ 17% of the soluble Aβ and ~ 30%
                    of the total hippocampal plaque burden, and interneurons are
                    also located in the CA1 region, where plaques are most
                    prevalent (accounting for ~ 75%).
                </CitationCard>
            </span>
            <div>&nbsp;</div>
            <span>
                <CitationCard
                    citations={[bibtex.wei2010amyloid, bibtex.arbel2017soluble]}
                >
                    high concentrations of Aβ oligomers can cause the collapse
                    of dendritic spines
                </CitationCard>
                <CitationCard citations={[bibtex.walsh2002naturally]}>
                    and disruption of LTP.
                </CitationCard>
                <CitationCard citations={[bibtex.ortiz2020early]}>
                    On the other hand blocage of endogenous Aβ does not protect
                    synaptic transmission. Physiological concentrations of Aβ
                    increase dendritic spine density
                </CitationCard>
                <CitationCard citations={[bibtex.gulisano2019neuromodulatory]}>
                    and promote docking vesicles.
                </CitationCard>
                <CitationCard citations={[bibtex.cai2023physiological]}>
                    Aβ can modulate NMDARs, either directly or indirectly, and
                    this modulation is implicated in neurotoxicity.
                </CitationCard>
            </span>
            <div>
                <CitationCard
                    citations={[bibtex.ledo2013amyloid, bibtex.ledo2016cross]}
                >
                    AβOs induce both depressive-like behavior and memory
                    deficits in mice and associate with decreased brain
                    serotonin levels.
                </CitationCard>
                <CitationCard citations={[bibtex.gulaj2010kynurenine]}>
                    Reduced serotonin levels may be linked to increased levels
                    and activity of indolamine2,3-dioxygenase (IDO) follow
                    microglial activation. Interestingly, AD patients were found
                    to have reduced levels of plasma tryptophan and increased
                    quinolinic acid,
                </CitationCard>
                <CitationCard citations={[bibtex.frozza2018challenges]}>
                    as well as increased IDO immunoreactivity in microglia
                    (Bonda et al., 2010).
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    Aβ is capable of interacting with cell membranes and binding
                    to a variety of synaptic receptors such as PrPC, NMDA
                    receptors, P75NTR,and mGluR5, which leads to a cascade of
                    events including calcium dyshomeostasis, inhibition of
                    long-term potentiation (LTP), tau hyperphosphorylation,
                    mitochondrial dysfunction, and oxidative stress, ultimately
                    resulting in neuronal death.112,632,633 (2) Aβ blocks the
                    reuptake of glutamate by excitatory amino acid transporter
                    (EAAT) receptors, causing glutamate accumulation
                    intersynaptically and neuronal hyperactivity.634 (3) Aβ and
                    some pro-inflammatory cytokines (such as TNFα,IL-1α, and
                    C1q) may induce the A1 phenotype of astrocytes. This
                    transformation may involve altering astrocyte functions and
                    modulating their interactions with other cells (such as
                    neurons and microglia), thereby participating in processes
                    such as Aβ deposition, neuroinflammation, synaptic loss, and
                    neuronal death.635–637 (4) APOE, primarily released from
                    astrocytes, associates with lipoproteins to form
                    APOE-associated lipoprotein particles, which can bind to
                    soluble Aβ and mediate its clearance119
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.kepp2023amyloid,
                        bibtex.o2011amyloid,
                        bibtex.chen2017amyloid,
                    ]}
                >
                    Aβ originates from the processing of the APP, a
                    transmembrane glycoprotein, through its sequential cleavage
                    by β-secretase and γ-secretase (a multiprotein complex with
                    PS1 or PS2 as catalytic subunits). This process yields
                    various lengths of Aβ fragments, with Aβ40 and Aβ42 being
                    the predominant. The hydrophobic C-terminal of Aβ42
                    facilitates the β-sheet conformational transition and the
                    aggregation and formation of the core component of senile
                    plaques.
                </CitationCard>
                <CitationCard citations={[bibtex.ullah2021abnormal]}>
                    The plaque formation in SAD is notably more intricate,
                    related to a dynamic imbalance between Aβ production and
                    clearance mechanisms.
                </CitationCard>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    The toxicity mechanism of Aβ aggregates remains uncertain,
                    but different perspectives exist:77,128 Aβ might cause AD
                    pathology through the loss of physiological functions during
                    the aggregation process. Aβ monomers have neuroprotective
                    properties, with assumed roles in antioxidant and
                    antimicrobial activities, improving the condition of damaged
                    nervous systems, regulating the vascular system, and
                    enhancing synaptic plasticity.129,130 Soluble Aβ oligomers
                    are the primary neurotoxic substances,131–133 disruption of
                    cell membrane integrity,134 activation in inflammatory
                    responses,135,136 causes of calcium homeostasis imbalance137
                    and mitochondrial dysfunction,138–140 triggers in oxidative
                    stress,141 and damage factor of synapses.142
                </CitationCard>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    The amyloid cascade143 has been proposed for over 30 years,
                    which provided crucial insights into the mechanisms of AD’s
                    onset and progression. This hypothesis has led to the
                    development of drugs, including β-secretase inhibitors,
                    γ-secretase inhibitors and modulators, anti-amyloid
                    antibodies, Aβ vaccine, and Aβ aggregation inhibitors, aimed
                    at delaying the disease’s advancement. Currently, antibodies
                    like aducanumab (1), lecanemab (2), and donanemab (10) show
                    their promise in proving Aβ as a significant factor in AD
                    development.
                </CitationCard>
            </div>
        </div>
    );
};

const Degradation = () => {
    return (
        <div>
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
        </div>
    );
};

const Hypotheses = () => {
    return (
        <div>
            <Hypothesis>
                Aβ plaques concentration is associated with an increased
                frequency of epileptiform activity in AD patients.
            </Hypothesis>
            <Hypothesis>
                In AD patients, a higher density of Aβ plaques will correlate
                with a flatter PSD slope, particularly in frontal and temporal
                regions, due to decreased perisomatic GABAergic inhibition and
                increased neuronal hyperactivity in these areas.
            </Hypothesis>
            <Hypothesis>
                In brain regions with both Aβ and tau pathology, the effect on
                PSD slope will depend on the relative densities of Aβ versus
                tau: Aβ-dominant regions will have a flatter slope, while
                tau-dominant regions will exhibit a steeper slope.
            </Hypothesis>
        </div>
    );
};

const Limitations = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.teipel2018no]}>
                Note that at least one recent study did not find significant
                correlations between amyloid-PET and EEG/MEG connectivity in
                amyloid-positive subjects, leading to potential concerns about
                compatibility.
            </CitationCard>
            <CitationCard citations={[bibtex.cai2023physiological]}>
                the evidence suggests subtle relationships among Aβ sequences in
                various species, making it difficult to determine the overlaped
                Aβ mechanisms.
            </CitationCard>
        </div>
    );
};

const AB = new MyNode(
    "Amyloid Beta (AB)",
    [],
    (
        <NodeCard>
            <SectionTitle>Introduction</SectionTitle>
            <Introduction />
            <SectionTitle>Distribution</SectionTitle>
            <Distribution />
            <SectionTitle>Impact</SectionTitle>
            <Impact />
            <SectionTitle>Degradation</SectionTitle>
            <Degradation />
            <SectionTitle>Hypotheses</SectionTitle>
            <Hypotheses />
            <SectionTitle>Limitations</SectionTitle>
            <Limitations />
        </NodeCard>
    )
);

export const Wrapper = () => <>{AB.content}</>;

export default AB;
