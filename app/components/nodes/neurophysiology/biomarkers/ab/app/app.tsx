import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import Figure from "@/app/components/figure/figure";

export const APP = new MyNode(
    "APP",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.cai2023physiological]}>
                APP is encoded by 19 exons on the long arm of chromosome 21, of
                which exons 16 and 17 are responsible for encoding Aβ. APP
                family proteins are type I single-pass transmembrane proteins;
                the other two isoforms, amyloid precursorlike proteins 1 and 2
                (APLP1/2) cannot produce Aβ peptide. According to the splicing
                sequence, APP695, APP751, and APP770 have been described most
                often, and APP695 is the main isoform in the human brain. See
                the biosynthesis and metabolic fate of Aβ in Figure 2.
                <Figure
                    src="images/ab/app_processing.png"
                    alt="processing"
                    caption="Processing"
                    n={1}
                />
                APP inserted on the cellular membrane is cleaved by α-secretase
                in an amyloidogenic manner, and internalized APP is proteolyzed
                by β-secretase in subcellular compartments to produce Aβ
            </CitationCard>
            <CitationCard citations={[bibtex.cai2023physiological]}>
                APP and its fragments [66] are found in dendrites and axon
                terminals [24, 82].
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{APP.content}</>;

export default APP;
