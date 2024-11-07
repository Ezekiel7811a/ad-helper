import CitationCard from "@/app/components/citation-card/citation-card";
import { MyNode } from "@/models/node";
import { XModel } from "@/public/citations";

const MCI = new MyNode(
  "Mild Cognitive Impairment (MCI)",
  [],
  (
    <div>
      <CitationCard citations={[XModel]}>
        we observed an increment of functional connectivity in those patients
        with MCI that progress to Alzheimer’s disease [progressive (p)MCI]
        compared to those that remained stable [stable (s)MCI]. We found two
        networks, one in the theta band and the other one in the beta band,
        where the functional connectivity ratio of the pMCI group was lower than
        that of the sMCI group. These networks involved the frontooccipital
        cortex and fronto-temporal regions including the hippocampus.
      </CitationCard>
    </div>
  )
);

export default MCI;
