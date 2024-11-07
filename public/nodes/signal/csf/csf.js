import { jsx as _jsx } from "react/jsx-runtime";
import CitationCard from "@/app/components/citation-card/citation-card";
import { MyNode } from "@/models/node";
import { NIAAA } from "@/public/citations";
const CSF = new MyNode("CSF", [], (_jsx("div", { children: _jsx(CitationCard, { citations: [NIAAA], children: "P-tau: Primarily measured by the P-tau181 epitope (and others like P-tau231 and P-tau199), elevated CSF P-tau is specific to AD and correlates with PHF tau formation. It remains normal in most other neurodegenerative diseases, making it a reliable biomarker for AD pathology. T-tau: Reflects general neuronal injury rather than AD-specific tau pathology. T-tau increases in response to various neuronal injuries (e.g., traumatic brain injury), distinguishing it from P-tau, which rises specifically in AD. Tau PET and CSF P-tau cannot detect minimal neurofibrillary changes, impacting the diagnostic distinction between \u201CAlzheimer\u2019s pathologic change\u201D and full AD." }) })));
export default CSF;
