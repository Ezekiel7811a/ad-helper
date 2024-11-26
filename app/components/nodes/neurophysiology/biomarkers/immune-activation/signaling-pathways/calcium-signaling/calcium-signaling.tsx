import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import Figure from "@/app/components/figure/figure";

export const CalciumSignaling = new MyNode(
    "CalciumSignaling",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                Under physiological conditions, calcium ions follow a strict
                concentration gradient. In AD, the elevated cytosolic calcium
                concentration and calciumresponsive signaling cascades adversely
                affect protein folding in the ER, energy production in
                mitochondria, and lysosomal acidity.307
                <Figure
                    src="images/immune/calcium_signaling.png"
                    alt="Calcium signaling"
                    caption="Calcium signaling"
                    n={1}
                />
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{CalciumSignaling.content}</>;

export default CalciumSignaling;
