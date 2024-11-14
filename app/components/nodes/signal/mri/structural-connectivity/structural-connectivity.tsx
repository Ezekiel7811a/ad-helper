import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import Hypothesis from "@/app/components/hypothesis/hypothesis";

export const StructuralConnectivity = new MyNode(
    "StructuralConnectivity",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.canuet2015network]}>
                The correlation analysis of the significant functional
                connections and structural connectivity measures revealed that
                the decrease in alpha synchronization between the right
                posterior cingulate and left paracentral lobule mediated by
                p-tau correlated positively with the fractional anisotropy value
                of the right hippocampal cingulum (r = 0.81; p = 0.003).
            </CitationCard>
            <Hypothesis>
                No correlation exist between the decrease in slow-wave activity
                (&delta;-&theta;) and FA accounting for AB as covariate (indeed
                AB will have an effect on slow band rythm). Supporting the idea
                that the decrease in slow-wave activity is not related to real
                structural connectivity changes but rather the change in the
                slope.
            </Hypothesis>
        </NodeCard>
    )
);

export const Wrapper = () => <>{StructuralConnectivity.content}</>;

export default StructuralConnectivity;
