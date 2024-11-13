import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

export const TauSpread = new MyNode(
  "TauSpread",
  [],
  (
    <div>
      <CitationCard citations={[bibtex.seibyl2023visual]}>
        Temporal lobe structures, especially the mesial temporal gyri and
        hippocampus, are the earliest neocortical regions to manifest
        neurofibrillary tangles (9)
      </CitationCard>
    </div>
  )
);

export const Wrapper = () => <>{TauSpread.content}</>;

export default TauSpread;
