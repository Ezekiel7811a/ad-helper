import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import Figure from "@/app/components/figure/figure";

export const NeuroinflammatorySignaling = new MyNode(
    "NeuroinflammatorySignaling",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                It involves interactions among various cell types, which
                influence neuroinflammation by activating multiple pathways.
                This leads to the production of inflammatory mediators and
                neuronal damage, accelerating the pathological progression of
                AD.
                <Figure
                    src="images/immune/neuroinflammatory_signaling.png"
                    alt="Neuroinflammatory signaling"
                    caption="Neuroinflammatory signaling"
                    n={1}
                />
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{NeuroinflammatorySignaling.content}</>;

export default NeuroinflammatorySignaling;
