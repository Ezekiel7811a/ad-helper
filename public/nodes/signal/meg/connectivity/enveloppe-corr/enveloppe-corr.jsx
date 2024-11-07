import CitationCard from "@/app/components/citation-card/citation-card";
import Figure from "@/app/components/figure/figure";
import { MyNode } from "@/models/node";
import { PowEnvCorrReview } from "@/public/citations";
const EnveloppeCorr = new MyNode("Enveloppe Correlation", [], (<div>
      <CitationCard citations={[PowEnvCorrReview]}>
        <Figure n={0} src="images/signal/enveloppe_coupling.png" alt="enveloppe_coupling" caption="Enveloppe coupling"/>
        However, a number of significant technical challenges exist, in
        particular the MEG inverse problem (inferring 3D distributions of moment
        to moment change in neural current based only on extra cranial magnetic
        fields) is ill posed (Hadamard 1902). This means that estimated
        timecourses of brain current at spatially separate regions are not
        necessarily independent. As a result, estimated functional connectivity
        between regions can be artefactually inflated. This significant confound
        makes connectivity modelling using MEG non-trivial.
      </CitationCard>
    </div>));
export default EnveloppeCorr;
