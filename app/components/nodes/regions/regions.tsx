import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card.tsx";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";

export const Regions = new MyNode(
  "Regions",
  [],
  (
    <NodeCard>
      Regions
    </NodeCard>
  )
);

export const Wrapper = () => Regions.content;

export default Regions;