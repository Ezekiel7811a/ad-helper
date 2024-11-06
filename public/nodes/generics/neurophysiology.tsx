import CitationCard from "@/app/components/citation-card/citation-card";
import Figure from "@/app/components/figure/figure";
import { MyNode } from "@/models/node";
import {
  CombiningBrainSimAndMeg,
  SynergyABTauCorticalAndMC,
  XModel,
} from "@/public/citations";

const Neurophysiology = new MyNode(
  "Neurophysiology",
  [],
  (
    <div>
      <CitationCard citations={[CombiningBrainSimAndMeg]}>
        Aβ and tau show different temporal evolution profiles (in which tau
        pathology is delayed), are initially deposited in different brain
        regions (Aβ plaques are particularly found in medial prefrontal and
        medial parietal regions, while tau aggregates in the medial temporal
        lobe), and propagate across other cortical regions as the disease
        progresses.
        <Figure
          n={1}
          src="images/ab-tau/ab_tau_progression.png"
          alt="ab_tau_progression"
          caption="chematic representation of the spatiotemporal progression of Aβ and tau biomarker levels during AD progression."
        />
      </CitationCard>
      <CitationCard citations={[SynergyABTauCorticalAndMC]}>
        The joint accumulation of Aβ and tau triggers a cascade of deleterious
        events from synaptic loss, neuronal death, to brain atrophy5,16–18,
        which are thought to underlie the cognitive deficits that characterize
        the disease4,19.
        <Figure
          n={2}
          src="images/ab-tau/proposed_model_ad.png"
          alt="proposed_model"
          caption="the possible evolution of pathological changes across the AD continuum, with the new hypothesis of an early shift in neurophysiological activity from acceleration to slowing during the preclinical phase."
        />
        In the prodromal stage of AD, increased blood-oxygen-level-dependent
        (BOLD) activations in hippocampal and middle temporal lobe circuits have
        been reported
      </CitationCard>
      <CitationCard citations={[XModel]}>
        This model is also supported by the X model, stating that sMCI are just
        future pMCI in the hypersynchronization phase.
        <Figure
          n={3}
          src="images/hypersynchronization/x_model.png"
          alt="X model"
          caption="Proposition of a model explaining the observations made on sMCI."
        />
      </CitationCard>
    </div>
  )
);

export default Neurophysiology;
