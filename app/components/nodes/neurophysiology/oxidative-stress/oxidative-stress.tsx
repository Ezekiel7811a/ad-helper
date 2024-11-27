import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const OxidativeStress = new MyNode(
    "OxidativeStress",
    [],
    (
        <NodeCard>
            <div>
                Oxidative stress Hypothesis:
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    During regular metabolic processes, the body produces
                    reactive oxygen species (ROS), reactive nitrogen species,
                    and other highly reactive and unstable substances. These
                    substances are generally kept at low levels by an efficient
                    antioxidant defense system to protect cells from oxidative
                    damage.191,192
                </CitationCard>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    However, in the brain of AD patients, factors such as metal
                    accumulation, overexpression of related enzymes (e.g., NADPH
                    oxidase), and mitochondrial dysfunction are involved in
                    producing excessive ROS, surpassing the ability of the
                    endogenous antioxidant system and resulting in an oxidative
                    imbalance. It will damage neuronal membrane lipids,
                    proteins, and nucleic acids, ultimately causing neuronal
                    cell death.191,193–195
                </CitationCard>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    Aβ plays a crucial role in mitochondrial dysfunction by
                    reducing the activities of key enzymes and disrupting the
                    dynamics of mitochondria.192,196 Oxidative stress presented
                    in the early stages of AD acts as a crosstalk between
                    different hypotheses of AD.197
                </CitationCard>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    oxidative stress modulates the process of APP and the
                    activity of secretases, thereby promoting the amyloid
                    pathway. Furthermore, it is instrumental in the
                    phosphorylation of tau proteins and the subsequent formation
                    of NFTs. The activation of microglia induced by ROS triggers
                    a neuroinflammatory cycle. The presence of free metals and
                    complexes of Aβ with metals act as catalysts for ROS
                    production, ultimately leading to neuronal cell death.195
                </CitationCard>
            </div>
        </NodeCard>
    )
);

export const Wrapper = () => <>{OxidativeStress.content}</>;

export default OxidativeStress;
