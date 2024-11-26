import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card.tsx";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import bibtex from "@/public/citations/bibtex.json";

const SignalingPathways = () => {
    return (
        <div>
            <div>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    Several pathological factors in AD, such as Aβ,
                    pro-inflammatory cytokines, and oxidative stress, activate
                    microglia and initiate downstream signaling pathways such as
                    MAPK, NF-κB, and PI3K/ Akt. The activation of these pathways
                    further promotes the activation of microglia and the
                    production of inflammatory mediators, exacerbating
                    neurotoxicity.238–240
                </CitationCard>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    ERK, JNK, and p38 MAPK are three primary MAPK signaling
                    pathways that may activate transcription factors such as
                    AP-1 and NF-κB to release pro-inflammatory cytokines like
                    TNF-α, IL-1β, and NO.241,242 NF-κB can be co-regulated by
                    multiple pathways including MAPK and PI3K/Akt to enhance
                    transcriptional activity, thus promoting the expression of
                    pro-inflammatory and pro-oxidant enzyme genes.239,243,244
                </CitationCard>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    A recently identified microRNA, miR-25802, found to be
                    overexpressed in AD, likely plays a crucial role in
                    exacerbating disease pathology. This microRNA may regulate
                    the polarization of microglial cells towards a
                    pro-inflammatory phenotype through the modulation of the
                    KLF4/NF-κB signaling pathway. Such alterations can further
                    aggravate key pathological features in the 5xFAD mouse model
                    including increased deposition of Aβ plaques and deficits in
                    learning and memory.245 The NFκB signaling pathway
                    significantly impacts the expression of components related
                    to the NLRP3 inflammasome, such as NLRP3 protein, ASC,
                    pro-IL-1β, and pro-IL-18. The NLRP3 inflammasome activates
                    caspase-1 through its assembly and activation processes.
                    Activated caspase-1 can cleave gasdermin D (GSDMD),
                    triggering pyroptosis and releasing IL-1β, IL-18, and ASC
                    specks into the extracellular environment. This may
                    exacerbate the spread of inflammation and neuronal
                    death.246–249
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    The activation of the cGAS-STING signaling pathway in AD
                    also plays a crucial role in neuroinflammation. Studies by
                    Xie et al. found that the abnormal accumulation of
                    double-stranded DNA in the cytoplasm may bind to the
                    cytoplasmic DNA sensor (cGAS), thereby specifically
                    triggering the STING-interferon (IFN) signaling pathway in
                    microglia, promoting the expression and secretion of
                    inflammatory cytokines. The relationships between microglia
                    and other cells, such as astrocytes and neurons, further
                    extend the scope of inflammation, forming a complex network
                    of inflammatory regulation.253,254
                </CitationCard>
            </div>
        </div>
    );
};

export const ImmuneActivation = new MyNode(
    "ImmuneActivation",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.frozza2018challenges]}>
                AD pathogenesis appears to include strong interactions with
                immune mechanisms in the brain. AβOs induce aberrant reactivity
                of astrocytes and microglia, in the brains of mice and non-human
                primates (Bomfim et al., 2012; Ledo et al., 2013, 2016;
                Forny-Germano et al., 2014). Recent studies have further
                unveiled that disturbances in microglia, as well as interactions
                with peripheral immune cells, may play key roles in causing
                synapse loss and neurodegeneration in AD (Browne et al., 2013;
                Zhang et al., 2013; Baruch et al., 2015, 2016; GuillotSestier et
                al., 2015; Zenaro et al., 2015; Hong et al., 2016a,b).
            </CitationCard>
            <CitationCard citations={[bibtex.frozza2018challenges]}>
                markers of inflammation, such as TNF-α, IL-1β, IL-6, and other
                cytokines, have been shown to be increased in the brain, CSF,
                and plasma of AD patients (Perry et al., 2010; Swardfager et
                al., 2010; Czirr and Wyss-Coray, 2012; Alcolea et al., 2014;
                Heneka et al., 2015a; Hong et al., 2016a; Salter and Stevens,
                2017).
            </CitationCard>
            <CitationCard citations={[bibtex.frozza2018challenges]}>
                Increased pro-inflammatory signaling resulting from reactive
                microglial reduces Aβ clearance, promotes aberrant synaptic
                pruning (Lee and Landreth, 2010; Mandrekar-Colucci et al., 2012;
                Heneka et al., 2015a,b; Hong et al., 2016b), prompts Aβ and tau
                pathologies, and contributes to impaired synapse function (Wang
                W. Y. et al., 2015). Importantly, TNF-α-dependent mechanisms
                appear to drive memory defects (Lourenco et al., 2013) and
                depressive-like behavior in AD mice (Ledo et al., 2016), thereby
                indicating a causal role of inflammation in deleterious
                processes linked to AD.
            </CitationCard>
            <CitationCard citations={[bibtex.frozza2018challenges]}>
                TNFα, have been reported to induce neuronal stress (Lourenco et
                al., 2013), likely resulting in defective proteostasis. it has
                been recently demonstrated that AβOs stimulates eIF2α
                phosphorylation (Devi and Ohno, 2010, 2013, 2014; Lourenco et
                al., 2013; Ma et al., 2013; Baleriola et al., 2014). In the
                brain, eIF2α is a hub that controls protein synthesis-dependent
                learning and memory and mantain neuronal integrity in health and
                disease. When phosphorylated, however, eIF2α attenuates the
                initiation of global protein synthesis (Lourenco et al., 2015).
            </CitationCard>
            <CitationCard citations={[bibtex.frozza2018challenges]}>
                In line with this notion, deletion of eIF2α kinases, including
                PKR, PERK, or GCN2 restores memory and synapse function in mouse
                models of AD (Lourenco et al., 2013; Ma et al., 2013).
            </CitationCard>
            <CitationCard citations={[bibtex.frozza2018challenges]}>
                Abnormal accumulation of misfolded proteins in the endoplasmic
                reticulum triggers the unfolded protein response (UPR), a set of
                signaling branches aimed at restore cellular homeostasis (Hetz,
                2012; Dufey et al., 2014; Hetz and Saxena, 2017). However, when
                prolonged, UPR signaling might compromise neuronal functions,
                resulting in neurodegeneration (Lourenco et al., 2015; Freeman
                and Mallucci, 2016; Hetz and Saxena, 2017). There is now
                considerable evidence suggesting that AD brain display increased
                markers of UPR (Hoozemans et al., 2009; Hetz and Saxena, 2017),
                and that at least the PERK (Ma et al., 2013) and IRE-1a
                (Lourenco et al., 2013; Duran-Aniotz et al., 2017) branches of
                UPR are involved in memory defects in AD mice.
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                Neuroinflammation is generally characterized as a chronic
                inflammatory response in the central nervous system (CNS) that
                fails to resolve on its own. It often involves the activation of
                glial cells and the release of pro-inflammatory factors during
                neuroinflammation.171
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                Microglia, the CNS foremost innate immune cells, acts as an
                initial defense against danger-associated molecular patterns and
                pathogen-associated molecular pattern receptors. Microglia are
                elongated, branched cells that monitor their environment and
                secrete neurotrophic factors in a state of homeostasis. Once
                stimulation is detected, microglia undergo morphological changes
                and initiate a variety of responses.172,173 Aβ is a typical
                trigger for microglial activation. Activated microglia migrate
                towards senile plaques, engulf Aβ, and release enzymes to break
                down Aβ. Over prolonged periods, they might become less
                efficient at handling Aβ but continue to generate
                proinflammatory cytokines.174,175
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                Aβ also causes the formation and activation of the NLRP3
                inflammasome within microglia, which releases ASC specks that
                bind rapidly to Aβ in promoting Aβ aggregates and the spread of
                Aβ pathology.176
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                Interactions between microglia and tau protein in the later
                stages of AD may contribute to increased tau phosphorylation and
                exosomal tau secretion, thereby promoting the spread of
                tau.177,178
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                Meanwhile, APOE4 could modify the behavior and function of
                activated microglia, contributing to increased Aβ deposition,
                tau-associated neurodegeneration, enhanced inflammation, altered
                immune responses, and disrupted synaptic homeostasis.123,181–184
                Consequently, diminishing APOE4 expression in Aβ
                plaque-associated microglia may offer an effective approach. In
                summary, neuroinflammation is intricately associated with Aβ and
                tau pathologies,
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{ImmuneActivation.content}</>;

export default ImmuneActivation;
