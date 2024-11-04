import { MyNode } from "@/models/node";

export const ClassificationNode = new MyNode(
  "Classification",
  [],
  (
    <div>
      {`The classification of Alzheimer's disease is based on the clinical
        presentation and the underlying pathology. The clinical presentation is
        based on the severity of the cognitive impairment, which is assessed
        using the Mini-Mental State Examination (MMSE) or the Clinical Dementia
        Rating (CDR) scale. The underlying pathology is based on the presence of
        amyloid-beta plaques and tau tangles in the brain, which are detected
        using positron emission tomography (PET) or cerebrospinal fluid (CSF)
        analysis.`}
    </div>
  )
);
