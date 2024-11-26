import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import Figure from "@/app/components/figure/figure";

export const NeurotrophicSignaling = new MyNode(
    "NeurotrophicSignaling",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                <Figure
                    src="images/immune/neurotrophic_signaling.png"
                    alt="Neurotrophic signaling"
                    caption="Neurotrophic signaling"
                    n={1}
                />
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{NeurotrophicSignaling.content}</>;

export default NeurotrophicSignaling;
