import CitationCard from "@/app/components/citation-card/citation-card";
import { MyNode } from "@/models/node";
import {
  SynergyABTauCorticalAndMC,
  synergyABTauInAD,
} from "@/public/citations";

export const Tau = new MyNode(
  "Tau",
  [],
  (
    <div>
      Tau is a microtubule-associated protein that is abundant in neurons. It
      stabilizes microtubules and promotes their assembly. In the context of
      Alzheimer's disease, tau becomes hyperphosphorylated and forms
      neurofibrillary tangles. These tangles are associated with neuronal
      dysfunction and cell death. Tau pathology is thought to be a key driver of
      neurodegeneration in Alzheimer's disease.
      <CitationCard citations={[synergyABTauInAD]}>
        The tau aggregates are commonly found in the medial temporal lobe,
        starting in the parahippocampal gyrus, which includes the entorhinal
        cortex, from which they spread to limbic areas, and from there to the
        association areas.
      </CitationCard>
      <CitationCard citations={[SynergyABTauCorticalAndMC]}>
        Tau deposition also follows a relatively stereotypical distribution
        pattern, accumulating first in the entorhinal cortex before spreading to
        limbic areas and eventually the neocortex6,14,15.
      </CitationCard>
    </div>
  )
);