import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const ABRegulatingSynaptic = new MyNode(
  "ABRegulatingSynaptic",
  [],
  (
    <NodeCard>
      <CitationCard citations={[bibtex.]}>
        ABRegulatingSynaptic
      </CitationCard>
    </NodeCard>
  )
);

export const Wrapper = () => <>{ABRegulatingSynaptic.content}</>;

export default ABRegulatingSynaptic;