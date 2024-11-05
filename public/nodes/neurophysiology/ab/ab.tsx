import CitationCard from "@/app/components/citation-card/citation-card";
import Hypothesis from "@/app/components/hypothesis/hypothesis";
import { MyNode } from "@/models/node";
import {
  NeuroChemsOrganizationAd,
  SynergyABTauCorticalAndMC,
} from "@/public/citations";

export const AB = new MyNode(
  "Amyloid Beta (AB)",
  [],
  (
    <div>
      Amyloid-b is primarily produced by the endocytosis of a transmembrane
      protein, amyloid precursor protein (APP), which modulates synapse
      formation and function (Priller et al., 2006). APP inside the neuron
      increases the amyloid-b production that is secreted into the brain
      interstitial fluid. The accumulation of soluble amyloid-b within the
      interstitial fluid becomes abnormal during Alzheimer’s disease as
      amyloid-b starts to aggregate into soluble amyloid-b oligomers and
      extracellular amyloidb plaques (Cirrito et al., 2005).Both amyloid-b forms
      exert a toxic effect on cells, causing the synaptic dysfunction that is a
      critical characteristic of the pathogenesis of Alzheimer’s disease
      (Selkoe, 2002).
      <CitationCard citations={[SynergyABTauCorticalAndMC]}>
        Aβ plaques deposition can begin up to two decades before symptom
        onset1-4,9, initially accumulating in cortical areas with high metabolic
        baseline activity, such as the precuneus, medial orbitofrontal and
        posterior cingulate cortices10,11, before spreading to the entire
        neocortex, brainstem and subcortical nuclei
      </CitationCard>
      <CitationCard citations={[NeuroChemsOrganizationAd]}>
        Amyloid Beta (Aβ) Plaques: These plaques, which are a hallmark of AD,
        are found at high levels (SUVR) in prefrontal and parieto-temporal
        cortices bilaterally. This spatial pattern aligns with regions showing
        abnormal rhythmic and aperiodic activity, suggesting a possible direct
        relationship between Aβ deposition and these neurophysiological changes.
        Brain regions with high densities of cholinergic (α4β2, M1), cannabinoid
        (CB1), mu-opioid (MOR), noradrenergic (NET), and specific serotonergic
        receptors (5-HT6, 5-HT1b) were more likely to show Aβ deposition.
      </CitationCard>
      <Hypothesis>
        Aβ plaques concentration is associated with an increased frequency of
        epileptiform activity in AD patients.
      </Hypothesis>
      Some studies, like those by Dubois et al. (2018) and Teipel et al. (2018),
      did not find significant correlations between amyloid-PET and EEG/MEG
      connectivity in amyloid-positive subjects, leading to potential concerns
      about compatibility.
    </div>
  )
);
