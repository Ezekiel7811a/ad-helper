import CitationCard from "@/app/components/citation-card/citation-card";
import { MyNode } from "@/models/node";
import { SynergyABTauCorticalAndMC } from "@/public/citations";

export const AB = new MyNode(
  "Amyloid Beta (AB)",
  [],
  (
    <div>
      Amyloid beta (Aβ) is a peptide that is crucially involved in Alzheimer's
      disease as the main component of amyloid plaques found in the brains of
      patients. These plaques are one of the pathological hallmarks of the
      disease.
      <CitationCard citations={[SynergyABTauCorticalAndMC]}>
        Aβ plaques deposition can begin up to two decades before symptom
        onset1-4,9, initially accumulating in cortical areas with high metabolic
        baseline activity, such as the precuneus, medial orbitofrontal and
        posterior cingulate cortices10,11, before spreading to the entire
        neocortex, brainstem and subcortical nuclei
      </CitationCard>
    </div>
  )
);
