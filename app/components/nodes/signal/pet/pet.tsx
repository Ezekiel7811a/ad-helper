import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const PET = new MyNode(
  "PET",
  [],
  (
    <div>
      <CitationCard citations={[bibtex.knopman2018national]}>
        Tau PET: This emerging imaging modality targets PHF tau deposits in the
        brain but faces limitations, such as off-target binding. The
        first-generation ligand, flortaucipir, is a reliable marker for 3R/4R
        PHF tau, correlating with Braak staging and cognitive impairment. Newer
        ligands are in development to improve specificity and reduce off-target
        effects. Tau PET and CSF P-tau cannot detect minimal neurofibrillary
        changes, impacting the diagnostic distinction between “Alzheimer’s
        pathologic change” and full AD.
      </CitationCard>
      <CitationCard citations={[bibtex.knopman2018national]}>
        Amyloid PET: Sensitivity thresholds are set by typical cut points for
        PET ligands. For example: 18F Amyloid PET: Labels moderate to high
        neuritic plaque loads as abnormal but may miss low plaque levels. 11C
        Pittsburgh Compound B: Categorizes individuals with Thal phase 2–5 as
        abnormal, potentially missing early plaque stages (Thal 0–1).
        Consequently, a negative amyloid PET does not necessarily indicate a
        complete absence of amyloid-beta (Aβ) or neuritic plaques, as subtle
        pathologic changes can still occur below detection thresholds, sometimes
        causing mild cognitive effects.
      </CitationCard>
    </div>
  )
);

export const Wrapper = () => <>{PET.content}</>;

export default PET;
