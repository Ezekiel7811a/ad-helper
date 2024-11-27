import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import Figure from "@/app/components/figure/figure";

export const LysosomalDysfunction = new MyNode(
    "LysosomalDysfunction",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                It may be related to impairments in V-ATPase-mediated lysosomal
                acidification and/or dysregulation of lysosomal calcium
                homeostasis. However, the specific mechanisms require further
                investigation to be definitively determined. c Aberrant
                cholesterol metabolism.
                <Figure
                    src="images/immune/lysosomal_dysfunction.png"
                    alt="Lysosomal dysfunction"
                    caption="Lysosomal dysfunction"
                    n={1}
                />
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{LysosomalDysfunction.content}</>;

export default LysosomalDysfunction;
