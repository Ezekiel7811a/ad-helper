import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { MyNode } from "@/models/node";
import { ABInducedHyperAndTau } from "@/public/citations";

const AbTauInteractions = new MyNode(
  "AbTauInteractions",
  [],
  (
    <div>
      <CitationCard citations={[ABInducedHyperAndTau]}>
        It has been proposed that this Ab then promotes the migration of tau4,5
      </CitationCard>
    </div>
  )
);

export const Wrapper = () => <>{AbTauInteractions.content}</>;

export default AbTauInteractions;
