import CitationCard from "@/app/components/citation-card/citation-card";
import { MyNode } from "@/models/node";
import { NeuroChemsOrganizationAd, XModel } from "@/public/citations";

export const Beta = new MyNode(
  "Beta",
  [],
  (
    <div>
      <CitationCard citations={[XModel]}>
        Beta band seems to have a special significance in Alzheimer’s disease,
        especially in the early stages of the disease (Stam et al., 2003). This
        band has been classically related to excitatory activity, as well as to
        cognitive processes impaired in Alzheimer’s disease, such as memory or
        executive function (Koenig et al., 2005). And has been supported by our
        results.
      </CitationCard>
      <CitationCard citations={[NeuroChemsOrganizationAd]}>
        Interestingly, &beta; rhythms in patients with aMCI, AD are increased in
        parietal and prefrontal regions. This selective increase could represent
        a regionally specific compensatory response or an attempt to maintain
        certain functions in the face of neurodegeneration. Beta rhythm
        increases were aligned with the fourth neurochemical gradient,
        specifically in regions rich in serotonin (5-HT4) and acetylcholine
        (M1).
      </CitationCard>
      <ToCheck string="Higher frequencies, particularly in the beta and gamma ranges, are typically linked with excitatory pyramidal neurons and local, fast synaptic activity. Changes in these frequencies could reflect disruptions in excitatory transmission or altered cortical processing. Decreased alpha and beta power, as observed in AD, might suggest diminished excitatory activity or a decline in excitatory cell populations" />
    </div>
  )
);
