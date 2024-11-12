import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Figure from "@/app/components/figure/figure.tsx";
import Hypothesis from "@/app/components/hypothesis/hypothesis.tsx";
import { MyNode } from "@/models/node";
import { ParamsPSD } from "@/public/citations";
const Periodic = new MyNode("Periodic", [], (_jsxs("div", { children: [_jsxs(CitationCard, { citations: [ParamsPSD], children: ["Older adults had lower (slower) \u03B1 center frequencies than younger adults. Measured as a pourcentage of the canonical \u03B1 frequency younger = 84%, older = 71%; Specifically, we find that canonical alpha band analyses (for example, analyzing the 8\u201312-Hz range) fail to capture all of the oscillatory power within individual participants, and are systematically biased between groups22. We conclude that periodic activity is not the sole driver of the apparent ~10-Hz power differences in aging, and that the magnitude of alpha power differences has been systemically confounded by concomitant differences in aperiodic activity.", _jsx(Figure, { n: 1, src: "images/signal/periodic_distrib.png", alt: "periodic distribution", caption: "distribution of center of frequencies" }), _jsx(Figure, { n: 2, src: "images/signal/spatial_feature_distrib.png", alt: "spatial feature distribution", caption: "spatial feature distribution of the fooof extraction" })] }), _jsx(Hypothesis, { children: "Is it possible that the \u03B8 frequency increased in AD patients is in fact due to slower \u03B1 causing a leakage of power into the \u03B8 band?" })] })));
export const Wrapper = () => _jsx(_Fragment, { children: Periodic.content });
export default Periodic;
