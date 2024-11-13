import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import MyTable from "@/app/components/table/table.tsx";
import { MyNode } from "@/models/node";

import bibtex from "@/public/citations/bibtex.json";

const rows = [
  ["A-/T-/N-", "Not defined", "Not defined"],
  [
    "A+/T-/N-",
    "Stage 1",
    "Asymptomatic at risk of AD (if A+ established by amyloid PET)",
  ],
  ["A+/T+/N-", "Stage 2/3", "Asymptomatic at risk of AD"],
  [
    "A+/T-/N+",
    "Not addressed",
    "Asymptomatic at risk of AD (if A+ established by amyloid PET)",
  ],
  ["A+/T+/N+", "Stage 2/3", "Asymptomatic at risk of AD"],
  ["A-/T+/N-", "Not defined", "Not defined"],
  ["A-/T-/N+", "Not defined", "Not defined"],
  ["A-/T+/N+", "Not defined", "Not defined"],
];

const rowsMCI = [
  ["A-/T-/N-", "MCI, unlikely due to AD", "Not defined"],
  [
    "A+/T-/N-",
    "MCI, core clinical criteria",
    "Asymptomatic at risk of AD (if A+ established by amyloid PET)",
  ],
  ["A+/T+/N-", "MCI, core clinical criteriaa", "Typical AD"],
  [
    "A+/T-/N+",
    "MCI, core clinical criteria",
    "Typical AD (if A1 established by amyloid PET)",
  ],
  ["A+/T+/N+", "MCI due to AD, high likelihood", "Typical AD"],
  ["A-/T+/N-", "Not defined", "Not defined"],
  ["A-/T-/N+", "Not defined", "Not defined"],
  ["A-/T+/N+", "Not defined", "Not defined"],
];

const rowsAD = [
  ["A-/T-/N-", "Dementia, unlikely due to AD", "Not defined"],
  [
    "A+/T-/N-",
    "Intermediate likelihood; probable AD dementia; based on clinical criteria",
    "Typical AD (if A+ established by amyloid PET)",
  ],
  [
    "A+/T+/N-",
    "High likelihood probable AD dementia; based on clinical criteria",
    "Typical AD",
  ],
  [
    "A+/T-/N+",
    "High likelihood; probable AD dementia; based on clinical criteria",
    "Typical AD (if A+ established by amyloid PET)",
  ],
  ["A+/T+/N+", "High likelihood AD pathophysiology", "Typical AD"],
  [
    "A-/T+/N-",
    "Probable AD dementia; based on clinical criteria",
    "Not defined",
  ],
  [
    "A-/T-/N+",
    "Intermediate likelihood; probable AD dementia; based on clinical criteria",
    "Not defined",
  ],
  [
    "A-/T+/N+",
    "Intermediate likelihood; probable AD dementia; based on clinical criteria",
    "Not defined",
  ],
];

const headers = [
  "A/T/N Classification",
  "NIA-AA Classification preclinical AD",
  "2014 IWG Classification",
];

const ATN = new MyNode(
  "ATN",
  [],
  (
    <div>
      <CitationCard citations={[bibtex.jack2016t]}>
        “A” refers to the value of a b-amyloid biomarker (amyloid PET or CSF
        Ab42); “T,” the value of a tau biomarker (CSF phospho tau, or tau PET);
        and “N,” biomarkers of neurodegeneration or neuronal injury
        ([18F]-fluorodeoxyglucose–PET, structural MRI, or CSF total tau).
        Conflicting results within a category would be labeled “c.” For example,
        if an individual had conflicting results from amyloid PET and CSF
        Ab,heorshemight be labeled Ac.Individuals can be fully classified by CSF
        alone, imaging alone, or combinations.Several different approaches to
        selecting normal/ abnormal cutpoints in the continuous range of
        biomarker values exist. These include selecting values that best
        separate clinically normal individuals from those with dementia, values
        that have predictive power for future clinical decline,53 or using
        autopsied individuals with antemortem biomarker studies to guide
        selection of cutpoints.51,52 In laboratory medicine, the 95th percentile
        based on a healthy control population is commonly used or the 10th
        percentile of values seen in typical AD dementia.21,55. Biomarker values
        are then scaled linearly from 0 (normal) to 100 (abnormal). The
        centiloid scale is related to but not identical to percentiles because
        centiloid values below 0 (i.e., below the mean for the normal group) and
        above 100 (i.e., above the mean for the abnormal group) are possible. An
        example of how this might appear is A80/T50/N20.
        <div>Table 1. Clinically normal individuals</div>
        <MyTable headers={headers} contents={rows} />
        <div>Table 2. MCI individuals</div>
        <MyTable headers={headers} contents={rowsMCI} />
        <div>Table 3. Probable AD</div>
        <MyTable headers={headers} contents={rowsAD} />
      </CitationCard>
    </div>
  )
);

export const Wrapper = () => {
  return <>{ATN.content}</>;
};

export default ATN;
