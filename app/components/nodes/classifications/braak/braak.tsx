import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Figure from "@/app/components/figure/figure.tsx";
import MyTable from "@/app/components/table/table.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const headers = ["Stage", "Definition", "Cognition"];
const rows = [
  ["I", "Few NFTs in the transentorhinal region", "Normal cognition"],
  [
    "II",
    "NFTs in the transentorhinal region and few in the entorhinal region",
    "Normal cognition",
  ],
  ["III", "Severe NFTs in the entorhinal region", "Mild cognitive impairment"],
  ["IV", "NFTs in the hippocampus", "Mild cognitive impairment"],
  ["V", "NFTs in the isocortex", "Dementia"],
  ["VI", "NFTs in the isocortex", "Dementia"],
];

const BraakNode = new MyNode(
  "Braak",
  [],
  (
    <div>
      <CitationCard citations={[bibtex.braak1993staging]}>
        <div>Table 1. Braak stages</div>
        <MyTable headers={headers} contents={rows} />
        <Figure
          src="images/classification/transenthorinal_stage.png"
          alt="Transentorhinal stage"
          caption="Transenthorinal stage"
          n={1}
        />
        <Figure
          src="images/classification/limbic_stage.png"
          alt="Limbic stage"
          caption="Entorhinal stage"
          n={2}
        />
        <Figure
          src="images/classification/isocortical_stage.png"
          alt="Isocortical stage"
          caption="Hippocampal stage"
          n={3}
        />
      </CitationCard>
    </div>
  )
);

export const Wrapper = () => <>{BraakNode.content}</>;

export default BraakNode;
