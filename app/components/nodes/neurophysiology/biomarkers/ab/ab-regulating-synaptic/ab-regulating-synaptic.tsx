import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const ABRegulatingSynaptic = new MyNode(
    "ABRegulatingSynaptic",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.abramov2009amyloid]}>
                a mechanism indicating that Aβ may positively regulate basal
                synaptic transmission in a presynaptic and history-dependent
                manner, particularly in excitatory neurons has been revealed.
            </CitationCard>
            <CitationCard citations={[bibtex.lee2020app]}>
                the absence of APP was shown to increase neuronal excitability.
                Although the two homologous analogues of APP, APLP1, and APLA2,
                do not produce Aβ, hippocampal neurons exhibit hyperexcitability
                when all three APP family genes are knocked out simultaneously
                in excitatory neurons.
            </CitationCard>
            <span>
                <CitationCard citations={[bibtex.castro1995alpha]}>
                    nAChRs are ligand-gated ion channels. Depolarization of the
                    membrane and excitatory effects are caused by the
                    application of nAChR agonists followed by opening ion
                    channels, and consequently, increasing permeability to
                    Na+/K+/Ca2+. The α7 nAChR has the highest Ca2+ permeability
                    among nAChR isoforms, so its relative permeability is
                    comparable to that of the N-methyl-D-aspartate receptor
                    (NMDAR).
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.letsinger2022alpha7,
                        bibtex.gomez2013lateral,
                        bibtex.townsend2016alpha7,
                    ]}
                >
                    Overall, α7 nAChRs are involved in a variety of biological
                    processes, including neuronal excitability, neurotransmitter
                    release, signal transduction, synaptic plasticity, and
                    neurogenesis.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.wang2000amyloid,
                        bibtex.cecon2019quantitative,
                    ]}
                >
                    nAChRs interact with Aβ under physiological conditions,
                    particularly the α7 isoform, which has a high affinity for
                    Aβ.
                </CitationCard>
                <CitationCard citations={[bibtex.tropea2021genetic]}>
                    and collocalize with Aβ in the brain.
                </CitationCard>
                <CitationCard citations={[bibtex.cai2023physiological]}>
                    The accumulation of Aβ in the brain might disrupt the
                    function of nAChRs.
                </CitationCard>
            </span>
            <CitationCard citations={[bibtex.ovsepian2018synaptic]}>
                Aβ regulates the SVC via dosage effect, sites of action (pre-
                and post-synaptic), and pattern of action (local autocrine or
                paracrine), for another, the SVC also affects the production of
                Aβ.
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{ABRegulatingSynaptic.content}</>;

export default ABRegulatingSynaptic;
