import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CitationCard from "@/app/components/citation-card/citation-card";
import ToCheck from "@/app/components/to-check/to-check";
import { MyNode } from "@/models/node";
import { NeuroChemsOrganizationAd, XModel } from "@/public/citations";
const Beta = new MyNode("Beta", [], (_jsxs("div", { children: [_jsx(CitationCard, { citations: [XModel], children: "Beta band seems to have a special significance in Alzheimer\u2019s disease, especially in the early stages of the disease (Stam et al., 2003). This band has been classically related to excitatory activity, as well as to cognitive processes impaired in Alzheimer\u2019s disease, such as memory or executive function (Koenig et al., 2005). And has been supported by our results." }), _jsx(CitationCard, { citations: [NeuroChemsOrganizationAd], children: "Interestingly, \u03B2 rhythms in patients with aMCI, AD are increased in parietal and prefrontal regions. This selective increase could represent a regionally specific compensatory response or an attempt to maintain certain functions in the face of neurodegeneration. Beta rhythm increases were aligned with the fourth neurochemical gradient, specifically in regions rich in serotonin (5-HT4) and acetylcholine (M1)." }), _jsx(ToCheck, { string: "Higher frequencies, particularly in the beta and gamma ranges, are typically linked with excitatory pyramidal neurons and local, fast synaptic activity. Changes in these frequencies could reflect disruptions in excitatory transmission or altered cortical processing. Decreased alpha and beta power, as observed in AD, might suggest diminished excitatory activity or a decline in excitatory cell populations" })] })));
export default Beta;