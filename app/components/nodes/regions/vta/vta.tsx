import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card.tsx";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { ChallengesInAD } from "@/public/citations";

export const VTA = new MyNode(
  "VTA",
  [],
  (
    <NodeCard>
      Ventral Tegmental Area (VTA)
      <CitationCard citations={[ChallengesInAD]}>
        Given that dopaminergic neurons from ventral tegmental area not only
        modulate hippocampal synaptic plasticity (Rossato et al., 2009; McNamara
        et al., 2014; Broussard et al., 2016), but also target the nucleus
        accumbens and the cerebral cortex (Russo and Nestler, 2013),
        dopaminergic degeneration in ventral tegmental area might largely
        contribute to the deficits in hippocampusdependent memory and reward
        circuits.
      </CitationCard>
    </NodeCard>
  )
);

export const Wrapper = () => <>{VTA.content}</>;

export default VTA;
