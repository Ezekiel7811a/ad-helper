import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Hypothesis from "@/app/components/hypothesis/hypothesis.tsx";
import { MyNode } from "@/models/node";
import {
  Braak,
  ChallengesInAD,
  PetTauGeneticFrontoTemporal,
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
      Alzheimer&apos;s disease, tau becomes hyperphosphorylated and forms
      neurofibrillary tangles. These tangles are associated with neuronal
      dysfunction and cell death. Tau pathology is thought to be a key driver of
      neurodegeneration in Alzheimer&apos;s disease.
      <CitationCard citations={[ChallengesInAD]}>
        thereby destabilizing microtubules and compromising axonal transport
        (Querfurth and LaFerla, 2010; Ittner and Götz, 2011; Medeiros et al.,
        2011; Morris et al., 2011; Scheltens et al., 2016).
      </CitationCard>
      <CitationCard citations={[PetTauGeneticFrontoTemporal]}>
        In fact, there are six different isoforms of the tau protein, and these
        can adopt different conformations, leading to various tauopathies.8 The
        characteristic tau pathology found in Alzheimer&apos;s disease consists
        of neurofibrillary tangles (NFTs) composed of all six tau isoforms.
      </CitationCard>
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
