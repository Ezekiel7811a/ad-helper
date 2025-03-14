import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Hypothesis from "@/app/components/hypothesis/hypothesis.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const HUBS = new MyNode(
  "HUBS",
  [],
  (
    <div>
      <CitationCard citations={[bibtex.maestu2021neuronal]}>
        one striking phenomenon is repeatedly observed: namely that highly
        connected ‘hub’ regions in the brain appear to be most vulnerable in AD
        (Buckner et al., 2009b; Stam, 2014; Yu et al., 2017). T
      </CitationCard>
      <Hypothesis>
        The vulnerability of hub regions in AD may be due to their high
        connectivity, which makes them more susceptible to the spread of
        pathological proteins and the propagation of neurodegenerative
        processes.
        <div>
          We could try to find the correlation between the connectivity of the
          region and the vulnerability to AD.
        </div>
      </Hypothesis>
      <CitationCard citations={[bibtex.maestu2021neuronal]}>
        he tendency of increased clustering and the loss of brain hubs (de Haan
        et al., 2012; Engels et al., 2017) reflect a progressive isolation of
        brain regions which correlates with cognitive impairment. Engels et al.
        (Engels et al., 2015) foundthat, alongside decreased functional
        connectivity values, hubs were mainly damaged in the posteriorregions of
        the brain,with a shift of the center of gravity from the posterior to
        the anterior areas.
      </CitationCard>
      <Hypothesis>
        We could make a model to predict the progression of AD based on the
        previous model of signal but adding the connectivity of the regions.
      </Hypothesis>
      <CitationCard citations={[bibtex.maestu2021neuronal]}>
        (Yu et al., 2017), appliedmultiplex networks analysis and found that
        several brain hubs (hippocampus, posterior regions of the defaultmode
        network and occipital regions), were impaired in AD patients at
        different frequency bands, indicating a close relationship between the
        damage across the frequency spectra.
      </CitationCard>
      <Hypothesis>
        This finding could explain why previous hypersynchronization phenomena
        were found at several frequency bands.
      </Hypothesis>
      <CitationCard citations={[bibtex.maestu2021neuronal]}>
        Why are certain brain regions more prone to phenomenon than others? The
        hubs of the default mode network are brain areas with high metabolic
        demands and increased neuronal activity. In fact, these regions show
        higher presence of Aβ plaques (Buckner et al., 2009b). These higher
        demands of neuronal activity may increase the release of amyloid species
        into the interstitial fluid (Cirrito et al., 2008), exerting toxicity to
        inhibitory terminals (Garcia-Marin et al., 2009) and hyperexcitability
        (Busche and Konnerth, 2016).
      </CitationCard>
      <Hypothesis>
        There is a correlation between the metabolic demands of the region and
        the presence of Aβ plaques.
      </Hypothesis>
    </div>
  )
);

export const Wrapper = () => <>{HUBS.content}</>;

export default HUBS;
