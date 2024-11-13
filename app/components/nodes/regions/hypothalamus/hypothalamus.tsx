import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card.tsx";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { ChallengesInAD } from "@/public/citations";

export const Hypothalamus = new MyNode(
  "Hypothalamus",
  [],
  (
    <NodeCard>
      <CitationCard citations={[ChallengesInAD]}>
        the hypothalamus is responsible for controlling circadian rhythm,
        impairments in its function can at least partially account for sleep
        disturbances. Nonetheless, although initial results have already shed
        light on how sleep becomes deregulated in AD (Ju et al., 2014; Musiek
        and Holtzman, 2016; Kincheski et al., 2017), studies investigating
        whether hypothalamic defects mediate sleep disturbances in AD are still
        needed. Derangements in hypothalamic functions play a central role in
        peripheral metabolism deregulation and its consequences. For instance,
        hypothalamic inflammation and impaired proteostasis are critical
        pathogenic events in the establishment of peripheral insulin resistance
        in metabolic disorders (Zhang et al., 2008; Milanski et al., 2009; Denis
        et al., 2010; Arruda et al., 2011; Thaler et al., 2012; Valdearcos et
        al., 2015).
      </CitationCard>
    </NodeCard>
  )
);

export const Wrapper = () => <>{Hypothalamus.content}</>;

export default Hypothalamus;
