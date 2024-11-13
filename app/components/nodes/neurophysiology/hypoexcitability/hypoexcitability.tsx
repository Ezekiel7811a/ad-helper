import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const Hypoexcitability = new MyNode(
  "Hypoexcitability",
  [],
  (
    <div>
      <CitationCard citations={[bibtex.martinez2023combining]}>
        Aβ-mediated effects, tau is associated with suppression of neuronal
        activity (hypoexcitability) and progressive loss of connectivity
      </CitationCard>
      <CitationCard citations={[bibtex.martinez2023combining]}>
        Significant patterns of hypoexcitability observed in the temporal lobe
        associated with tau accumulation.
      </CitationCard>
    </div>
  )
);

export const Wrapper = () => <>{Hypoexcitability.content}</>;

export default Hypoexcitability;
