import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import Figure from "@/app/components/figure/figure";

export const BBBDysfunction = new MyNode(
    "BBBDysfunction",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                The disruption of the integrity and alterations in the transport
                functions of BBB lead to the abnormal entry and exit of certain
                substances into and out of brain tissue, resulting in neuronal
                damage and further exacerbating the pathological progression of
                AD644
                <Figure
                    src="images/immune/bbb_dysfunction.png"
                    alt="BBB dysfunction"
                    caption="BBB dysfunction"
                    n={1}
                />
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{BBBDysfunction.content}</>;

export default BBBDysfunction;
