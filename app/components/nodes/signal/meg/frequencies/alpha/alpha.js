import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { MyNode } from "@/models/node";
import { NeuroChemsOrganizationAd } from "@/public/citations";
const Alpha = new MyNode("Alpha", [], (_jsx("div", { children: _jsx(CitationCard, { citations: [NeuroChemsOrganizationAd], children: "\u03B1 and \u03B2 rhythms, in patients with aMCI, AD which are associated with cognitive and sensory processing, are significantly reduced in frontal and temporal areas. This reduction might signal cortical dysfunction in areas critical for cognitive abilities impacted by AD. Disease-related decreases in faster \u03B1 and \u03B2 rhythms were most strongly aligned with the first neurochemical gradient, particularly in areas with high densities of dopaminergic, mu-opioid, and glutamatergic receptors." }) })));
export const Wrapper = () => _jsx(_Fragment, { children: Alpha.content });
export default Alpha;
