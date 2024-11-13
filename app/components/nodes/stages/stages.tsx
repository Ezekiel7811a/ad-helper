import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card.tsx";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { ChallengesInAD } from "@/public/citations";
import Figure from "../../figure/figure.tsx";

export const Stages = new MyNode(
  "Stages",
  [],
  (
    <NodeCard>
      <CitationCard citations={[ChallengesInAD]}>
        <Figure
          src="images/classification/ad_stages.png"
          alt="AD Stages"
          caption="AD Stages"
          n={1}
        />
      </CitationCard>
    </NodeCard>
  )
);

export const Wrapper = () => <>{Stages.content}</>;

export default Stages;
