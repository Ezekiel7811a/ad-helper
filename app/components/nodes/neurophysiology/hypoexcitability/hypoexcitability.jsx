import CitationCard from "@/app/components/citation-card/citation-card";
import { MyNode } from "@/models/node";
import { CombiningBrainSimAndMeg } from "@/public/citations";
const Hypoexcitability = new MyNode("Hypoexcitability", [], (<div>
      <CitationCard citations={[CombiningBrainSimAndMeg]}>
        Aβ-mediated effects, tau is associated with suppression of neuronal
        activity (hypoexcitability) and progressive loss of connectivity
      </CitationCard>
      <CitationCard citations={[CombiningBrainSimAndMeg]}>
        Significant patterns of hypoexcitability observed in the temporal lobe
        associated with tau accumulation.
      </CitationCard>
    </div>));
export default Hypoexcitability;
