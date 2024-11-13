import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { MyNode } from "@/models/node";
import { EITranslationalPerspective } from "@/public/citations";

export const Excitotoxicity = new MyNode(
  "Excitotoxicity",
  [],
  (
    <div>
      <CitationCard citations={[EITranslationalPerspective]}>
        Long-term neuronal hyperexcitability leads to neuronal death caused by
        excitotoxicity (Canter et al., 2016)
      </CitationCard>
    </div>
  )
);

export const Wrapper = () => <>{Excitotoxicity.content}</>;

export default Excitotoxicity;