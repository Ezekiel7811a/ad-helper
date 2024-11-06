import CitationCard from "@/app/components/citation-card/citation-card";
import Figure from "@/app/components/figure/figure";
import Hypothesis from "@/app/components/hypothesis/hypothesis";
import { MyNode } from "@/models/node";
import {
  EITranslationalPerspective,
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
      <CitationCard citations={[EITranslationalPerspective]}>
        <Figure
          src="images/hypersynchronization/ab_hyperexcitation.png"
          alt="AB hyperexcitation model"
          n={1}
          caption="AB hyperexcitation model"
        />
      </CitationCard>
      <div>
        Pyramidal cells are the main disrupted type of neurons with A&beta;
        plaques.
      </div>
      <CitationCard citations={[EITranslationalPerspective]}>
        <Figure
          src="images/ab-tau/ab_pyramidal.png"
          alt="AB pyramidal"
          n={1}
          caption="Aβ depositions on pyramidal cells"
        />
        Aβ plaques, associated with Alzheimer’s Disease (AD), can form either in
        the spaces between neurons (neuropil) or directly on the surface of
        neuronal cell bodies. When Aβ plaques are on the surface of neuronal
        cell bodies, they disrupt GABAergic synapses in the perisomatic region.
        This loss of GABAergic inhibition is significant because it may cause
        neurons to become hyperactive due to a lack of inhibitory control around
        the cell body. Aβ plaques near the dendrites in the neuropil may lead to
        the loss of dendritic spines, which are small protrusions that typically
        form excitatory synapses. This loss of dendritic spines means a partial
        reduction in excitatory input to those neurons, but it doesn’t heavily
        impact the overall control of their activity since it only affects part
        of the dendritic structure. In summary, Aβ plaques can reduce inhibitory
        synapses (causing hyperactivity) near the cell bodies of neurons and
        reduce excitatory synapses on dendrites in the neuropil. Each change has
        a different impact on neuronal activity and synaptic circuits,
        contributing to the disruptions seen in Alzheimer's Disease.
      </CitationCard>
      <Hypothesis>
        In Alzheimer’s Disease (AD) patients, a higher density of Aβ plaques
        will correlate with a flatter PSD slope, particularly in frontal and
        temporal regions, due to decreased perisomatic GABAergic inhibition and
        increased neuronal hyperactivity in these areas.
      </Hypothesis>
      <Hypothesis>
        Regions with high tau pathology in AD patients will show a steeper PSD
        slope due to tau's impact on excitatory neurons, resulting in reduced
        high-frequency power and an increased relative contribution of
        low-frequency activity.
      </Hypothesis>
      <Hypothesis>
        In brain regions with both Aβ and tau pathology, the effect on PSD slope
        will depend on the relative densities of Aβ versus tau: Aβ-dominant
        regions will have a flatter slope, while tau-dominant regions will
        exhibit a steeper slope.
      </Hypothesis>
      <CitationCard citations={[EITranslationalPerspective]}>
        Animal models of AD have shown that Aβ plaques induce local
        morphological alterations in the dendrites that are in contact with Aβ
        (e.g., (Knafo et al., 2009; Spires et al., 2005; Tsai et al., 2004)).
      </CitationCard>
    </div>
  )
);
