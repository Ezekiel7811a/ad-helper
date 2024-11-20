import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const Presymptomatic = new MyNode(
    "Presymptomatic",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.dubois2014advancing]}>
                The designation of presymptomatic AD was proposed for the few
                individuals who carry an autosomal dominant monogenic AD
                mutation with virtually full penetrance, in view of the
                inevitability that they will develop clinically manifest AD.
            </CitationCard>
            <CitationCard citations={[bibtex.sperling2011toward]}>
                individuals without overt symptoms, called “preclinical AD”.
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{Presymptomatic.content}</>;

export default Presymptomatic;
