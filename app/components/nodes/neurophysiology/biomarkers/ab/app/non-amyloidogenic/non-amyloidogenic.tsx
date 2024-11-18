import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const NonAmyloidogenic = new MyNode(
    "NonAmyloidogenic",
    [],
    (
        <NodeCard>
            <CitationCard
                citations={[bibtex.muller2017not, bibtex.thinakaran2008amyloid]}
            >
                The Non-Amyloidogenic Pathway: In this alternative pathway,
                α-secretase cleaves APP at a different site, preventing the
                formation of Aβ. This pathway produces other APP fragments that
                are generally considered harmless and may have beneficial roles
                in cells. The unhydrolyzed APP is located at the cell surface
                and is processed by the latter means, in which α-secretase
                cleaves at amino-acids 16–17 on the Aβ sequence to generate a
                soluble fragment αAPPs and α C-terminal fragments, which are
                further catalyzed by γ-secretase to generate p3.
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{NonAmyloidogenic.content}</>;

export default NonAmyloidogenic;
