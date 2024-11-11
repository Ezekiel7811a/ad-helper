import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Figure from "@/app/components/figure/figure.tsx";
import Hypothesis from "@/app/components/hypothesis/hypothesis.tsx";
import { MyNode } from "@/models/node";
import { ParamsPSD } from "@/public/citations";

const Periodic = new MyNode(
  "Periodic",
  [],
  (
    <div>
      <CitationCard citations={[ParamsPSD]}>
        Older adults had lower (slower) &alpha; center frequencies than younger
        adults. Measured as a pourcentage of the canonical &alpha; frequency
        younger = 84%, older = 71%; Specifically, we find that canonical alpha
        band analyses (for example, analyzing the 8–12-Hz range) fail to capture
        all of the oscillatory power within individual participants, and are
        systematically biased between groups22. We conclude that periodic
        activity is not the sole driver of the apparent ~10-Hz power differences
        in aging, and that the magnitude of alpha power differences has been
        systemically confounded by concomitant differences in aperiodic
        activity.
        <Figure
          n={1}
          src="images/signal/periodic_distrib.png"
          alt="periodic distribution"
          caption="distribution of center of frequencies"
        />
        <Figure
          n={2}
          src="images/signal/spatial_feature_distrib.png"
          alt="spatial feature distribution"
          caption="spatial feature distribution of the fooof extraction"
        />
      </CitationCard>
      <Hypothesis>
        Is it possible that the &theta; frequency increased in AD patients is in
        fact due to slower &alpha; causing a leakage of power into the &theta;
        band?
      </Hypothesis>
    </div>
  )
);

export const Wrapper = () => <>{Periodic.content}</>;

export default Periodic;
