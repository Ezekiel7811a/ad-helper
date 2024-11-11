import CitationCard from "@/app/components/citation-card/citation-card";
import { MyNode } from "@/models/node";
import { NeuroChemsOrganizationAd } from "@/public/citations";
const Alpha = new MyNode("Alpha", [], (<div>
      <CitationCard citations={[NeuroChemsOrganizationAd]}>
        &alpha; and &beta; rhythms, in patients with aMCI, AD which are
        associated with cognitive and sensory processing, are significantly
        reduced in frontal and temporal areas. This reduction might signal
        cortical dysfunction in areas critical for cognitive abilities impacted
        by AD. Disease-related decreases in faster &alpha; and &beta; rhythms
        were most strongly aligned with the first neurochemical gradient,
        particularly in areas with high densities of dopaminergic, mu-opioid,
        and glutamatergic receptors.
      </CitationCard>
    </div>));
export default Alpha;
