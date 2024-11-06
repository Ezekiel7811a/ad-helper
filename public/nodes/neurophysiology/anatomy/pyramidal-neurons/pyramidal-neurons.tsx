import CitationCard from "@/app/components/citation-card/citation-card";
import Figure from "@/app/components/figure/figure";
import { MyNode } from "@/models/node";
import { EITranslationalPerspective } from "@/public/citations";

export const PyramidalNeurons = new MyNode(
  "PyramidalNeurons",
  [],
  (
    <div>
      <CitationCard citations={[EITranslationalPerspective]}>
        The dendritic spines of pyramidal cells are the mainpostsynaptic targets
        of excitatory glutamatergic synapses, and pyramidal cell axons represent
        the main source of these synapses in the cerebral cortex (DeFelipe and
        Farinas, 1992).
        <Figure
          src="images/neurons/pyramidal_degradation.png"
          alt="Pyramidal cell degradation"
          n={1}
          caption="Scheme representing the changes to pyramidal cell dendrites of that showed different patterns of PHF-tau immunostaining"
        />
        <Figure
          src="images/ab-tau/ab_pyramidal.png"
          alt="AB pyramidal"
          n={2}
          caption="Aβ depositions on pyramidal cells"
        />
      </CitationCard>
      <div>
        Pyramidal neurons in alpha-dominant areas receive rhythmic inhibitory
        input from GABAergic interneurons, which regulates their excitability
        and helps sustain a lower-frequency rhythm. This interplay between
        excitation and inhibition within these circuits supports a slower,
        synchronized alpha rhythm.In beta-generating regions, pyramidal neurons
        tend to fire at higher rates and with less synchrony than in
        alpha-dominated areas. Beta oscillations involve faster cycles of
        excitation and inhibition, allowing for rapid processing required for
        motor control and planning.
      </div>
    </div>
  )
);
