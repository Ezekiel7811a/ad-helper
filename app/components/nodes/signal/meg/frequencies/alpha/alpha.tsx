import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const Alpha = new MyNode(
  "Alpha",
  [],
  (
    <div>
      <CitationCard citations={[bibtex.wiesman2024neurochemical]}>
        &alpha; and &beta; rhythms, in patients with aMCI, AD which are
        associated with cognitive and sensory processing, are significantly
        reduced in frontal and temporal areas. This reduction might signal
        cortical dysfunction in areas critical for cognitive abilities impacted
        by AD. Disease-related decreases in faster &alpha; and &beta; rhythms
        were most strongly aligned with the first neurochemical gradient,
        particularly in areas with high densities of dopaminergic, mu-opioid,
        and glutamatergic receptors.
      </CitationCard>
    </div>
  )
);

export const Wrapper = () => <>{Alpha.content}</>;

export default Alpha;
