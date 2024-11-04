import CitationCard from "@/app/components/citation-card/citation-card";
import { MyNode } from "@/models/node";
import {
  CombiningBrainSimAndMeg,
  hyperexcitability,
  hyperexcitability2,
  hyperexcitability3,
  hyperexcitability4,
  LinksADOscillatorySlowing,
} from "@/public/citations";

export const Hyperexcitability = new MyNode(
  "Hyperexcitability",
  [],
  (
    <div>
      <CitationCard
        citations={[
          CombiningBrainSimAndMeg,
          hyperexcitability,
          hyperexcitability2,
          hyperexcitability3,
          hyperexcitability4,
        ]}
      >
        There is strong evidence that Aβ plaques, as well as soluble forms of
        Aβ,area key player in driving neuronal hyperexcitability in AD, which
        might ultimately give rise to epileptiform activity.
      </CitationCard>
      <CitationCard citations={[CombiningBrainSimAndMeg]}>
        Significant patterns of hyperexcitability observed in prefrontal regions
        associated with Aβ deposition.
      </CitationCard>
      <CitationCard citations={[LinksADOscillatorySlowing]}>
        A link between neuronal hyperactivity in preclinical AD to oscillatory
        slowing has been shown.
      </CitationCard>
    </div>
  )
);
