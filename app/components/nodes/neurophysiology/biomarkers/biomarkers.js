import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Figure from "@/app/components/figure/figure.tsx";
import MyTable from "@/app/components/table/table.tsx";
import { MyNode } from "@/models/node";
import { EITranslationalPerspective, InferringEIFromFieldPotentials, } from "@/public/citations";
const biomarkers = {
    excitatory: ["glutamate"],
    inhibitory: ["GABA", "gamma-aminobutyric acid"],
};
const headers = [
    "Biomarkers",
    "Type",
    "Frequency activity",
    "Amplitude activity (proportion)",
];
const rows = [
    ["Glutamate", "E", "High", "1"],
    ["GABA", "E", "Low", "2-6"],
];
const Biomarkers = new MyNode("Biomarkers", [], (_jsxs("div", { children: [_jsxs("ul", { children: [_jsx("li", { children: "Excitatory:" }), biomarkers.excitatory.map((excitatory, index) => (_jsx("li", { children: excitatory }, `excitatory-${index}`)))] }), _jsxs("ul", { children: [_jsx("li", { children: "Inhibitory:" }), biomarkers.inhibitory.map((inhibitory, index) => (_jsx("li", { children: inhibitory }, `inhibitory-${index}`)))] }), "magnetic resonance spectroscopy (MRS) measurements of in vivo concentrations of primary excitatory (glutamate) and inhibitory (\u03B3-aminobutyric acid, GABA) neurotransmitters.14\u201317 This approach presents several methodological challenges: the relatively low signals of glutamate and GABA complicate their interpretation because of their overlap with signals from other metabolites, it has low temporal and spatial resolution, and their measurements are usually restricted to one or few brain regions. For these reasons, current MRS approaches have limited utility for tracking variations of E/I across cortical regions or behavioral states.", _jsx(CitationCard, { citations: [InferringEIFromFieldPotentials], children: _jsx(MyTable, { headers: headers, contents: rows }) }), _jsxs(CitationCard, { citations: [InferringEIFromFieldPotentials], children: ["synaptic input fluctuations during the high conductance state can be accurately modeled by a summation of two stationary stochastic processes representing excitatory and inhibitory inputs (Alvarez and Destexhe, 2004).", _jsx(Figure, { src: "images/ei/ei_frequency.png", alt: "E:I interaction model", caption: "Model schematic: an \u201CLFP population\u201D receives input from two Poisson populations, one excitatory and one inhibitory.", n: 1 })] }), _jsx(CitationCard, { citations: [EITranslationalPerspective], children: "Tau and A\u03B2 together can have complex effects, with tau further silencing neurons even if A\u03B2 is causing hyperactivity, suggesting tau can override the excitatory imbalance from A\u03B2." })] })));
export const Wrapper = () => _jsx(_Fragment, { children: Biomarkers.content });
export default Biomarkers;
