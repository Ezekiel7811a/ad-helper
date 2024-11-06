import CitationCard from "@/app/components/citation-card/citation-card";
import Figure from "@/app/components/figure/figure";
import Hypothesis from "@/app/components/hypothesis/hypothesis";
import { MyNode } from "@/models/node";
import { MMSEReview, NIAAA } from "@/public/citations";

const Classifications = new MyNode(
  "Classifications",
  [],
  (
    <div>
      <CitationCard citations={[NIAAA]}>
        individuals without overt symptoms, called “preclinical AD” [4].
      </CitationCard>
      <CitationCard citations={[NIAAA]}>
        Biomarkers of AD: CSF biomarkers are valid proxies for neuropathologic
        changes of AD. Imaging-to-autopsy comparison studies have established
        that amyloid positron emission tomography (PET) is a valid in vivo
        surrogate for Ab deposits (in brain parenchyma/vessel walls)
        [17–24].Itis also now widely accepted that CSF Ab42 (or the Ab42/ Ab40
        ratio) is a valid indicator of the abnormal pathologic state associated
        with cerebral Ab [25]. An additional development has been the
        introduction of PET ligands for pathologic tau [26–28]. magnetic
        resonance imaging (MRI), fluorodeoxyglucose (FDG) PET, and CSF total tau
        (T-tau)—are not specific for AD but rather are nonspecific indicators of
        damage that may derive from a variety of etiologies, for example,
        cerebrovascular injury [29].
      </CitationCard>
      <CitationCard citations={[NIAAA]}>
        <Figure
          src="images/classifcation/classification.png"
          alt="Classification problem"
          caption="Interaction of ATN features"
          n={1}
        />
        <Figure
          src="images/classifcation/atn_niaaa.png"
          alt="ATN X NIA-AA"
          caption="Biomarkers interactions with NIA-AA"
          n={2}
        />
      </CitationCard>
      <CitationCard citations={[NIAAA]}>
        Comparision NIA-AA with IWG: The International Working Group (IWG) also
        incorporates biomarkers in AD diagnosis but requires cognitive symptoms
        alongside biomarkers for diagnosis (except for genetic AD). Unlike
        NIA-AA’s purely biological model, IWG initially required clinical
        symptoms to define AD. However, IWG’s 2016 update included asymptomatic
        individuals with both abnormal Aβ and tau biomarkers in the AD category,
        aligning more closely with NIA-AA’s biologic definition.
      </CitationCard>
      <CitationCard citations={[NIAAA]}>
        Alzheimer’s clinical syndrome rather than probable AD when describing
        syndromes without biomarker evidence
      </CitationCard>
      <Hypothesis>
        <Figure
          src="images/causality/causal_hypothesis.png"
          alt="Hypothesis"
          caption="The possible causalities of the biomarkers"
          n={1}
        />
      </Hypothesis>
      <CitationCard citations={[MMSEReview]}>
        he prevalence of cognitive impairment without dementia as 22% in people
        aged 71 years or older (Plassman 2008).10% to 15% of individuals with
        MCI may progress to dementia,
      </CitationCard>
    </div>
  )
);

export default Classifications;
