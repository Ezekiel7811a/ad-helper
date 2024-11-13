import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const Aperiodic = new MyNode(
  "Aperiodic",
  [],
  (
    <div>
      <CitationCard citations={[bibtex.donoghue2020parameterizing]}>
        aperiodic power across frequencies, and is equivalent to the negative
        slope of the power spectrum when measured in log–log space24. The
        aperiodic component is additionally parameterized with an ‘offset’
        parameter, which reflects the uniform shift of power across frequencies.
        The aperiodic offset, for example, is correlated with both neuronal
        population spiking13,14 and the blood-oxygen-level-dependent signal from
        functional MRI15. The aperiodic exponent, in contrast, has been related
        to the integration of the underlying synaptic currents26. Currents with
        faster time constants, such as excitatory (E) AMPA, have relatively
        constant power at lower frequencies before power quickly decays, whereas
        for inhibitory (I) GABA currents power decays more slowly as a function
        of frequency. This means that the exponent will be lower (flatter PSD)
        when E » I, and larger when E« I.
      </CitationCard>
      Aperiodic components can be extracted thanks to FOOOF algorithm of the
      same authors.
      <CitationCard citations={[bibtex.donoghue2020parameterizing]}>
        The observation of within-subject changes of the aperiodic exponent also
        has implications regarding the ubiquitous negative correlation between
        low-frequency (&lt;30 Hz) and high-frequency (&gt;40 Hz) activity38,
        observed here in the EEG data (Fig. 5d). This is often interpreted as a
        push/pull relationship between low-frequency oscillations and gamma;
        however spectral parameterization offers a different interpretation: a
        see-saw-like rotation of the spectrum at around 20–30 Hz due to a change
        in aperiodic activity.
      </CitationCard>
      <CitationCard citations={[bibtex.wiesman2024neurochemical]}>
        In patients with aMCI and AD, both aperiodic offsets and slopes are
        altered, particularly in prefrontal and parieto-occipital regions. A
        higher aperiodic offset and steeper slope indicate increased
        &quot;background&quot; or arrhythmic neural activity, particularly in
        lower frequencies.
      </CitationCard>
    </div>
  )
);

export const Wrapper = () => <>{Aperiodic.content}</>;

export default Aperiodic;
