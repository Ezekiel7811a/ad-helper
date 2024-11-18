import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Figure from "@/app/components/figure/figure";
import Hypothesis from "@/app/components/hypothesis/hypothesis.tsx";
import NodeCard from "@/app/components/node-card/node-card";
import SectionTitle from "@/app/components/section-title/section-title";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const Introduction = () => {
    return (
        <div>
            <span>
                <CitationCard citations={[bibtex.aamodt1984microtubule]}>
                    Tau is one of the many microtubule-associated proteins (MAP)
                    that have an important function of regulating microtubules
                    (MT) to ensure proper cytoskeletal organization and
                    trafficking,
                </CitationCard>
                <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                    Tau is specifically encoded by the MAPT gene.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.zhang2004retarded,
                        bibtex.seitz2002single,
                        bibtex.bertrand2013non,
                    ]}
                >
                    Cytoskeletal organization and traficking is particularly
                    important in highly polarized neuronal cells whose
                    functionality and viability depend on transport of cellular
                    cargo to and from axonal and dendritic peripheries.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.ebneth1998overexpression,
                        bibtex.zhang2004retarded,
                    ]}
                >
                    Tau has important physiological functions in regulating MT,
                    including MT polymerization, stabilization and suppression
                    of MT dynamics. Dysregulation of the tau–MT complex leads to
                    tau detachment and instability and disassembly of MTs,
                    eventually leading to perturbation of MT-dependent transport
                    and impaired maintenance of cellular polarity and viability.
                </CitationCard>
                <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                    <Figure
                        src="images/tau/tau.png"
                        caption="Tau protein structure"
                        alt="tau protein structure"
                        n={1}
                    />
                    <Figure
                        src="images/tau/phf.png"
                        caption="Structure of a paired helical filament (PHF)"
                        alt="tau phf"
                        n={2}
                    />
                    The filaments are formed of anti-parallel β-sheets, with the
                    protofilament core formed by the four MTBDs of tau.
                </CitationCard>
            </span>
        </div>
    );
};

const Physiology = () => {
    return (
        <div>
            <span>
                <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                    The N-terminal projection domain consists of residues 1–150
                    (of the longest isoform) and it regulates microtubule
                    binding. microtubule-binding repeat domains (MTBD). Splicing
                    isoforms of tau contain either three (3R) or four (4R)
                    MTBDs. The MTBDs, as the name suggests, interact with
                    microtubules but also with actin, orchestrating the order
                    and stability of the cytoskeleton.
                </CitationCard>
                <CitationCard citations={[bibtex.georgieva2014tau]}>
                    Finally, several domains of the tau protein have the ability
                    to interact with lipids and membranes,
                </CitationCard>
                <CitationCard citations={[bibtex.klein2002process]}>
                    and one of tau kinases, Fyn, is mainly located in PM
                    microdomains called lipid rafts, where tau can also be
                    recruited.
                </CitationCard>
                <CitationCard citations={[bibtex.alonso1997abnormal]}>
                    Tau is physiologically constantly phosphorylated and
                    dephosphorylated to ensure regulation of proper functions,
                    but when the balance is shifted toward phosphorylation, tau
                    affinity for microtubules decreases.
                </CitationCard>
                <CitationCard citations={[bibtex.wegmann2018tau]}>
                    This results in an increase in cytosolic tau, which becomes
                    more vulnerable to aggregation.
                </CitationCard>
                <span>
                    <CitationCard
                        citations={[
                            bibtex.goedert1989prospective,
                            bibtex.goedert2018tau,
                        ]}
                    >
                        In fact, there are six different isoforms of the tau
                        protein, and these can adopt different conformations,
                        leading to various tauopathies spanning from 352 to 441
                        aa
                    </CitationCard>
                    <CitationCard citations={[bibtex.levy202218f]}>
                        The characteristic tau pathology found in
                        Alzheimer&apos;s disease consists of neurofibrillary
                        tangles (NFTs) composed of all 6 tau isoforms.
                    </CitationCard>
                </span>
            </span>
        </div>
    );
};

const Distribution = () => {
    return (
        <div>
            <span>
                <CitationCard citations={[bibtex.busche2020synergy]}>
                    The tau aggregates are commonly found in the medial temporal
                    lobe, starting in the parahippocampal gyrus, which includes
                    the entorhinal cortex, from which they spread to limbic
                    areas, and from there to the association areas.
                </CitationCard>
                <CitationCard citations={[bibtex.gallego2024synergistic]}>
                    Tau deposition also follows a relatively stereotypical
                    distribution pattern, accumulating first in the entorhinal
                    cortex before spreading to limbic areas and eventually the
                    neocortex6,14,15.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.weingarten1975protein,
                        bibtex.muller1997expression,
                    ]}
                >
                    Tau is present in neurons and, to a lesser degree, in glial
                    cells.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.brandt1995interaction,
                        bibtex.dou2003chaperones,
                        bibtex.kimura2014microtubule,
                        bibtex.ittner2010dendritic,
                        bibtex.li2016human,
                        bibtex.camero2014tau,
                    ]}
                >
                    Tau is mainly an axonal protein in mature neurons, but it
                    can also be found in the nucleus, mitochondria, dendrites,
                    synapses, and at the plasma membrane (PM).
                </CitationCard>
                <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                    This localization pattern suggests that besides the main
                    function of MT regulation, tau may have other roles in
                    cells.
                </CitationCard>
            </span>
        </div>
    );
};

const Physiopathology = () => {
    return (
        <div>
            <span>
                In the context of Alzheimer&apos;s disease, tau becomes
                hyperphosphorylated and forms neurofibrillary tangles. These
                tangles are associated with neuronal dysfunction and cell death.
                Tau pathology is thought to be a key driver of neurodegeneration
                in Alzheimer&apos;s disease.
                <CitationCard citations={[bibtex.frozza2018challenges]}>
                    thereby destabilizing microtubules and compromising axonal
                    transport (Querfurth and LaFerla, 2010; Ittner and Götz,
                    2011; Medeiros et al., 2011; Morris et al., 2011; Scheltens
                    et al., 2016).
                </CitationCard>
                <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                    Additionally, abnormally phosphorylated tau is able to
                    sequester other microtubule-associated proteins (MAP),
                    further worsening microtubule destabilization [57].
                </CitationCard>
            </span>
        </div>
    );
};

const Hypotheses = () => {
    return (
        <div>
            <span>
                <Hypothesis>
                    Regions with High Tau Burden Show Altered Aperiodic Slopes,
                    Reflecting an Imbalance in Excitatory-Inhibitory Activity
                </Hypothesis>
                <CitationCard citations={[bibtex.canuet2015network]}>
                    Increased connectivity was observed between the right
                    supplementary motor area and the contralateral cuneus in the
                    alpha band. In addition, there was increased
                    intrahemispheric connectivity between the right anterior
                    cingulate cortex and medial temporal area in the beta band
                    and between the right middle frontal cortex and anterior
                    temporal area in the gamma band
                    <Hypothesis>
                        Not the expected results based on the model can we
                        reproduce that ?
                    </Hypothesis>
                </CitationCard>
                <CitationCard citations={[bibtex.vogels2020propagation]}>
                    Furthermore, suppression of tau overexpression in a mouse
                    model with aggressive tauopathy led to rescue of
                    neurodegeneration and cognitive deficits. Interestingly,
                    NFTs continued to develop, indicating that the toxicity
                    mainly originates from soluble tau that is not sequestered
                    by insoluble tau fibrils (41).
                    <Hypothesis>
                        Soluble tau is a better predictor of cognitive decline
                        than NFTs.
                    </Hypothesis>
                </CitationCard>
                <Hypothesis>
                    Regions with high tau pathology in AD patients will show a
                    steeper PSD slope due to tau&apos;s impact on excitatory
                    neurons, resulting in reduced high-frequency power and an
                    increased relative contribution of low-frequency activity.
                </Hypothesis>
            </span>
        </div>
    );
};

const Tau = new MyNode(
    "Tau",
    [],
    (
        <NodeCard>
            <SectionTitle>Introduction</SectionTitle>
            <Introduction />
            <SectionTitle>Physiology</SectionTitle>
            <Physiology />
            <SectionTitle>Distribution</SectionTitle>
            <Distribution />
            <SectionTitle>Physiopathology</SectionTitle>
            <Physiopathology />
            <SectionTitle>Hypotheses</SectionTitle>
            <Hypotheses />
        </NodeCard>
    )
);

export const Wrapper = () => <>{Tau.content}</>;

export default Tau;
