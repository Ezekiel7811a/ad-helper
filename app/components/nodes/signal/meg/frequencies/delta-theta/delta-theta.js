import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import ToCheck from "@/app/components/to-check/to-check.tsx";
import { MyNode } from "@/models/node";
import { NeuroChemsOrganizationAd } from "@/public/citations";
const DeltaTheta = new MyNode("Delta-Theta", [], (_jsxs("div", { children: ["\u03B4 and \u03B8 rhythms are considered slow rythms.", _jsx(CitationCard, { citations: [NeuroChemsOrganizationAd], children: "\u03B4 and \u03B8 rhythms in patients with aMCI, AD are elevated in prefrontal and parieto-occipital regions. Disease-related increases in slow \u03B4 and \u03B8 rhythms were strongest in regions with low density of dopaminergic, serotonergic, and mu-opioid receptors, indicating that these slower rhythms are more prominent in areas with lower densities of these neurotransmitter systems. The noradrenergic (NET), serotonergic (5-HT1a, 5-HT6), dopaminergic (D2), and GABAergic (GABAa) systems showed alignment with theta alterations." }), _jsx(ToCheck, { string: "These frequencies are often associated with inhibitory interneurons and slower, synchronized network activity. They are commonly linked to large-scale, long-range interactions in the brain. Increased delta and theta rhythms, as seen in AD, could indicate compensatory or pathological upregulation of inhibitory processes in affected areas." })] })));
export const Wrapper = () => _jsx(_Fragment, { children: DeltaTheta.content });
export default DeltaTheta;
