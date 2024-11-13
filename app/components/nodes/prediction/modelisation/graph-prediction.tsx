import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const GraphPrediction = new MyNode(
  "GraphPrediction",
  [],
  (
    <div>
      <CitationCard citations={[bibtex.maestu2021neuronal]}>
        Graph theoretical approaches have been particularly successful in
        characterizing macroscopic functional brain network damage in AD
        (Pievani et al., 2011; Stam, 2014).
      </CitationCard>
    </div>
  )
);

export const Wrapper = () => <>{GraphPrediction.content}</>;

export default GraphPrediction;
