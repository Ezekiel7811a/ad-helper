import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Hypothesis from "@/app/components/hypothesis/hypothesis.tsx";
import { MyNode } from "@/models/node";
import {
  Braak,
  SynergyABTauCorticalAndMC,
  synergyABTauInAD,
} from "@/public/citations";

const Tau = new MyNode(
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
      <Hypothesis>
        Regions with High Tau Burden Show Altered Aperiodic Slopes, Reflecting
        an Imbalance in Excitatory-Inhibitory Activity
      </Hypothesis>
      <CitationCard citations={[Braak]}>
        Neurofibrillary tangles develop mainly in Pyramidal cells of the
        entorhinal cortex and then due to the spread effect will spread to
        hippocampus and finally to the neocortex.
      </CitationCard>
    </div>
  )
);

export const Wrapper = () => <>{Tau.content}</>;

export default Tau;
