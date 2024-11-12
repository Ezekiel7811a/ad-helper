import CitationCard from "@/app/components/citation-card/citation-card";
import { MyNode } from "@/models/node";
import { VisualInterpretationPetTau } from "@/public/citations";

export const TauSpread = new MyNode(
  "TauSpread",
  [],
  (
    <div>
      <CitationCard citations={[VisualInterpretationPetTau]}>
        Temporal lobe structures, especially the mesial temporal gyri and
        hippocampus, are the earliest neocortical regions to manifest
        neurofibrillary tangles (9)
      </CitationCard>
    </div>
  )
);
