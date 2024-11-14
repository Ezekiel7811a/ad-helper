import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import Hypothesis from "@/app/components/hypothesis/hypothesis";

export const RetrogenesisModel = new MyNode(
    "RetrogenesisModel",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.braak2018spreading]}>
                The vulnerability of top-down connections might explain why tau
                pathology progressively spreads in a reverse direction to brain
                development, with higher-order association areas being affected
                first, followed by primary motor and sensory areas. This pattern
                follows the same pattern as myelination.
            </CitationCard>
            <Hypothesis>
                Myelination is a protector against tau assimilation.
            </Hypothesis>
        </NodeCard>
    )
);

export const Wrapper = () => <>{RetrogenesisModel.content}</>;

export default RetrogenesisModel;
