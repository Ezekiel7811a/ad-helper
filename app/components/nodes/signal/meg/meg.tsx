import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import ToCheck from "@/app/components/to-check/to-check.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const Meg = new MyNode(
  "Magnetoencephalography (MEG)",
  [],
  (
    <div>
      <CitationCard citations={[bibtex.martinez2023combining]}>
        Recently, a range of novel features derived from electroencephalography
        (EEG) and magnetoencephalography (MEG) recordings have been described as
        robust proxy makers for noninvasive real-time measurements of changes in
        E/I balance.
      </CitationCard>
      <ToCheck string="From mechanisms to markers: novel noninvasive EEG proxy markers of the neural excitation and inhibition system in humans., Globally elevated excitation-inhibition ratio in children with autism spectrum disorder and below-average intelligence, Methods for inferring neural circuit interactions and neuromodulation from local field potential and electroencephalogram measures, Memantine effects on electroencephalographic measures of putative excitatory/inhibitory balance in schizophrenia, Inferring synaptic excitation/inhibition balance from field potentials" />
      <CitationCard citations={[bibtex.martinez2023combining]}>
        One of the most promising candidate E/I biomarkers is the exponent of
        the 1/f spectral power law
      </CitationCard>
      <ToCheck string="Clinical applications of EEG power spectra aperiodic component analysis: a mini-review" />
      Nakamura et al. (2017): This MEG study found altered network organization
      in healthy elderly individuals with high amyloid levels, particularly in
      the inferior parietal lobe and precuneus. The correlation between Aβ and
      brain synchrony indicates that network impairment precedes metabolic
      (FDG-PET) or structural (MRI) changes, suggesting that M/EEG could detect
      functional changes before visible atrophy.
    </div>
  )
);

export const Wrapper = () => <>{Meg.content}</>;

export default Meg;
