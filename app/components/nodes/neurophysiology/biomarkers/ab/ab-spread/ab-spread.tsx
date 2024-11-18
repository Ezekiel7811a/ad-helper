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
            <span>
                <CitationCard
                    citations={[
                        bibtex.gouras2010intraneuronal,
                        bibtex.padmanabhan2021super,
                    ]}
                >
                    Within neurons, Aβ is located in neurites.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.lazarov2002evidence,
                        bibtex.wei2010amyloid,
                    ]}
                >
                    Aβ is supposed to be primarily released by synapses.
                </CitationCard>
                <CitationCard citations={[bibtex.cirrito2005synaptic]}>
                    AB interstitial are regulated by synaptic activity and
                    synaptic vesicle exocytosis, implicating a mechanism on the
                    presynaptic side of the synaptic cleft.
                </CitationCard>
                <CitationCard citations={[bibtex.cirrito2008endocytosis]}>
                    neuronal activity-dependent endocytosis of APP is involved
                    in ~ 70% of the regulatory mechanisms in synaptic Aβ
                    release.
                </CitationCard>
            </span>
            <span>
                <CitationCard
                    citations={[
                        bibtex.rodrigues2014synaptic,
                        bibtex.yu2018neuronal,
                    ]}
                >
                    In synapses, Aβ is predominantly distributed in the
                    presynaptic membrane.
                </CitationCard>
                <CitationCard citations={[bibtex.de2016meta]}>
                    Consistent with this, a metaanalysis of AD synaptic
                    pathology showed that presynaptic markers are affected more
                    than postsynaptic markers.
                </CitationCard>
                <CitationCard citations={[bibtex.schedin2016super]}>
                    However, it has also been shown that in cultured murine
                    neurons, γ-secretase is located both presynaptically and
                    postsynaptically.
                </CitationCard>
                <CitationCard citations={[bibtex.kedia2020real]}>
                    Furthermore, a recent super-resolution microscopy study
                    found that co-labeling with APP is stronger postsynaptically
                    than presynaptically.
                </CitationCard>
                <CitationCard citations={[bibtex.cai2023physiological]}>
                    Therefore, more evidence is needed to clarify the
                    distribution of Aβ at the synapse.
                </CitationCard>
            </span>
            <span>
                <CitationCard citations={[bibtex.kamenetz2003app]}>
                    synaptic activity dynamically regulates soluble
                    extracellular Aβ concentrations [31, 148].
                </CitationCard>
                <CitationCard citations={[bibtex.cirrito2008endocytosis]}>
                    Aβ release depends on synaptic activity mediated by
                    endocytosis.
                </CitationCard>
            </span>
            <span>
                <CitationCard citations={[bibtex.cai2023physiological]}>
                    The mature Aβ along with the C-terminal fragment (CTF) is
                    packaged into vesicles or is secreted into extracellular
                    space. Intracellularly, Aβ can be transported in both
                    anterograde and retrograde directions.
                </CitationCard>
                <CitationCard citations={[bibtex.koo1990precursor]}>
                    APP
                </CitationCard>
                <CitationCard citations={[bibtex.brahic2016axonal]}>
                    as well as somatic Aβ are transported in the fast
                    anterograde component
                </CitationCard>
                <CitationCard citations={[bibtex.yamazaki1995trafficking]}>
                    while retrograde transport to cell bodies occurs when Aβ is
                    absorbed by synaptic reuptake or is produced by APP
                    internalized from distal axon terminals.
                </CitationCard>
                <CitationCard citations={[bibtex.cai2023physiological]}>
                    <Figure
                        src="images/ab/ab_transporting.png"
                        alt="AB transporting"
                        n={1}
                        caption="Aβ transport"
                    />
                </CitationCard>
            </span>
        </NodeCard>
    )
);

export const Wrapper = () => <>{ABSpread.content}</>;

export default ABSpread;
