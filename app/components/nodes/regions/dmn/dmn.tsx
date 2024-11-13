import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const DMN = new MyNode(
  "Default Mode Network (DMN)",
  [],
  (
    <div>
      <CitationCard citations={[bibtex.lauterborn2021increased]}>
        baseline DMN activity is increased in AD and fails to deactivate during
        cognitive tasks, suggesting that the DMN is abnormally and continuously
        hyperactive in AD
      </CitationCard>
    </div>
  )
);

export const Wrapper = () => <>{DMN.content}</>;

export default DMN;
