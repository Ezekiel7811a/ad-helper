import CitationCard from "@/app/components/citation-card/citation-card";
import Figure from "@/app/components/figure/figure";
import { MyNode } from "@/models/node";
import { PowEnvCorrReview } from "@/public/citations";
const PhaseCorr = new MyNode("Phase Correlation", [], (<div>
      <CitationCard citations={[PowEnvCorrReview]}>
        <Figure n={0} src="images/signal/phase_coupling.png" alt="phase_coupling" caption="Phase coupling"/>
      </CitationCard>
    </div>));
export default PhaseCorr;
