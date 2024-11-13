import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

export const Excitotoxicity = new MyNode(
  "Excitotoxicity",
  [],
  (
    <div>
      <CitationCard citations={[bibtex.maestu2021neuronal]}>
        Long-term neuronal hyperexcitability leads to neuronal death caused by
        excitotoxicity (Canter et al., 2016)
      </CitationCard>
    </div>
  )
);

export const Wrapper = () => <>{Excitotoxicity.content}</>;

export default Excitotoxicity;
