import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const DnaProtection = new MyNode(
  "DnaProtection",
  [],
  (
    <NodeCard>
      <CitationCard citations={[bibtex.brunello2020mechanisms]}>
        as tau knockout mice display impaired long-term depression in the
        hippocampus [11]. Tau also interacts with nucleic acids and can localize
        to the nucleus, and upon binding to DNA it promotes DNA stability [15],
        suggesting that tau may have a role in DNA protection [16].
      </CitationCard>
    </NodeCard>
  )
);

export const Wrapper = () => <>{DnaProtection.content}</>;

export default DnaProtection;
