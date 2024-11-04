import CitationCard from "@/app/components/citation-card/citation-card";
import Figure from "@/app/components/figure/figure";
import { MyNode } from "@/models/node";
import { SynergyABTauCorticalAndMC } from "@/public/citations";

export const Frequencies = new MyNode(
  "Frequencies",
  [],
  (
    <div>
      <CitationCard citations={[SynergyABTauCorticalAndMC]}>
        A consistent observation with electroencephalography (EEG) and
        magnetoencephalography (MEG) is that low-frequency neurophysiological
        activity (&delta;–&theta; bands; 2–8 Hz) is increased and higher
        frequency activity (mainly in the &alpha; band; 8–12 Hz) is reduced in
        the symptomatic and prodromal stages of the disease31,35–40. To test the
        synergy of proteins with bands. 104 patients were tested with
        PET-A&beta; and tau, and MEG. The results showed that early A&beta;
        deposition is with macroscopic neurophysiological manifestations of
        hyperactivity, expressed as an acceleration of neurophysiological
        oscillatory activity reflected by increased alpha-band and decreased
        delta-band activity. As predicted from disease models, we also found
        that these effects shift from oscillatory acceleration to slowing in
        individuals presenting early temporal lobe tau pathology and that the
        magnitude of the shift from neurophysiological acceleration to slowing
        is associated with longitudinal cognitive decline. They ran their test
        with the mean values of each participant and with linear mixed effects
        models to account for intra-patient variability.
        <Figure
          n={1}
          src="images/ab-tau/ab_frequencies.png"
          alt="ab_frequencies"
          caption="Interactive effects of AD proteinopathies on neurophysiological activity in asymptomatic adults"
        />
      </CitationCard>
      <ToCheck string="Would not that be due to shifts of frequency centers ?" />
    </div>
  )
);
