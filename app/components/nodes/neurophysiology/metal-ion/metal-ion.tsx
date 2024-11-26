import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const MetalIon = new MyNode(
    "MetalIon",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                In physiological conditions, trace metals maintain homeostasis
                of the neuronal metal ion microenvironment. This balance can be
                disrupted by the inappropriate deposition or misdistribution of
                metal ions, with the dyshomeostasis of Fe2+,Cu2+, and Zn2+
                closely associated with AD.203
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                The accumulation of these biometals in Aβ plaques and NFTs plays
                a critical role in pathological protein deposition. For
                instance, they may modulate the activity of essential enzymes,
                alter the conformation of proteins, or disrupt clearing
                pathways.203–205
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                When metals are sequestered in protein deposits, it may initiate
                a cascade of ROS production and accentuate toxicity.206
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                Specifically, iron-induced oxidative stress causes increased
                release of iron from ironcontaining proteins, converting Fe3+ to
                Fe2+ intracellularly. Fe2+ overload can induce ferroptosis and
                lipid peroxidation through the generation of ROS via the Fenton
                reaction, ultimately resulting in neuronal death. Similarly, Cu+
                directly binds to lipoylated dihydrolipoyl transacetylase
                (DLAT), inducing lipoylated DLAT aggregation and ultimately
                leading to cuproptosis.203
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                Zinc could interfere with signaling through N-methyl-D-aspartate
                (NMDA) receptors. Supplementation of zinc may promote the
                maturation of proBNDF, reducing synaptic dysfunction and
                neuronal death.204,205
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{MetalIon.content}</>;

export default MetalIon;
