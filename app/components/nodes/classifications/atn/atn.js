import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import MyTable from "@/app/components/table/table.tsx";
import { MyNode } from "@/models/node";
import { ATNClassification } from "@/public/citations";
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
const ATN = new MyNode("ATN", [], (_jsx("div", { children: _jsxs(CitationCard, { citations: [ATNClassification], children: ["\u201CA\u201D refers to the value of a b-amyloid biomarker (amyloid PET or CSF Ab42); \u201CT,\u201D the value of a tau biomarker (CSF phospho tau, or tau PET); and \u201CN,\u201D biomarkers of neurodegeneration or neuronal injury ([18F]-fluorodeoxyglucose\u2013PET, structural MRI, or CSF total tau). Conflicting results within a category would be labeled \u201Cc.\u201D For example, if an individual had conflicting results from amyloid PET and CSF Ab,heorshemight be labeled Ac.Individuals can be fully classified by CSF alone, imaging alone, or combinations.Several different approaches to selecting normal/ abnormal cutpoints in the continuous range of biomarker values exist. These include selecting values that best separate clinically normal individuals from those with dementia, values that have predictive power for future clinical decline,53 or using autopsied individuals with antemortem biomarker studies to guide selection of cutpoints.51,52 In laboratory medicine, the 95th percentile based on a healthy control population is commonly used or the 10th percentile of values seen in typical AD dementia.21,55. Biomarker values are then scaled linearly from 0 (normal) to 100 (abnormal). The centiloid scale is related to but not identical to percentiles because centiloid values below 0 (i.e., below the mean for the normal group) and above 100 (i.e., above the mean for the abnormal group) are possible. An example of how this might appear is A80/T50/N20.", _jsx("div", { children: "Table 1. Clinically normal individuals" }), _jsx(MyTable, { headers: headers, contents: rows }), _jsx("div", { children: "Table 2. MCI individuals" }), _jsx(MyTable, { headers: headers, contents: rowsMCI }), _jsx("div", { children: "Table 3. Probable AD" }), _jsx(MyTable, { headers: headers, contents: rowsAD })] }) })));
export const Wrapper = () => {
    return _jsx(_Fragment, { children: ATN.content });
};
export default ATN;
