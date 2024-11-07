import CitationCard from "@/app/components/citation-card/citation-card";
import Hypothesis from "@/app/components/hypothesis/hypothesis";
import { MyNode } from "@/models/node";
import { EITranslationalPerspective } from "@/public/citations";
const HUBS = new MyNode("HUBS", [], (<div>
      <CitationCard citations={[EITranslationalPerspective]}>
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
      <CitationCard citations={[EITranslationalPerspective]}>
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
      <CitationCard citations={[EITranslationalPerspective]}>
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
    </div>));
export default HUBS;
