import CitationCard from "@/app/components/citation-card/citation-card";
import { MyNode } from "@/models/node";
import { CombiningBrainSimAndMeg } from "@/public/citations";

export const Meg = new MyNode(
  "Magnetoencephalography (MEG)",
  [],
  (
    <div>
      <CitationCard citations={[CombiningBrainSimAndMeg]}>
        Recently, a range of novel features derived from electroencephalography
        (EEG) and magnetoencephalography (MEG) recordings have been described as
        robust proxy makers for noninvasive real-time measurements of changes in
        E/I balance.
      </CitationCard>
      <ToCheck string="From mechanisms to markers: novel noninvasive EEG proxy markers of the neural excitation and inhibition system in humans., Globally elevated excitation-inhibition ratio in children with autism spectrum disorder and below-average intelligence, Methods for inferring neural circuit interactions and neuromodulation from local field potential and electroencephalogram measures, Memantine effects on electroencephalographic measures of putative excitatory/inhibitory balance in schizophrenia, Inferring synaptic excitation/inhibition balance from field potentials" />
      <CitationCard citations={[CombiningBrainSimAndMeg]}>
        One of the most promising candidate E/I biomarkers is the exponent of
        the 1/f spectral power law
      </CitationCard>
      <ToCheck string="Clinical applications of EEG power spectra aperiodic component analysis: a mini-review" />
    </div>
  )
);
