import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const Prodomal = new MyNode(
    "Prodomal",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.dubois2014advancing]}>
                the prodromal stage, where the disease can be diagnosed with
                supportive biomarkers.
            </CitationCard>
            <CitationCard citations={[bibtex.dubois2014advancing]}>
                grey matter loss of the medial temporal lobe,23 and the presence
                of Alzheimer’s pathology as shown by CSF changes,23,35–37 even
                at a prodromal stage.34
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{Prodomal.content}</>;

export default Prodomal;
