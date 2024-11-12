import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import NodeCard from "@/app/components/node-card/node-card.tsx";
import { MyNode } from "@/models/node";
import { AlteredEISubPops, EITranslationalPerspective, } from "@/public/citations.ts";
import { MathJax } from "better-react-mathjax";
export const NMM = new MyNode("NMM", [], (_jsxs(NodeCard, { children: [_jsx(CitationCard, { citations: [EITranslationalPerspective], children: "\u2018neural mass models\u2019. These describe oscillatory neuronal activity in cortical regions, and provide realistic descriptions of, for example, the human alpha rhythm (David and Friston, 2003; Lopes da Silva et al., 1974; Zetterberg et al., 1978)." }), _jsxs(CitationCard, { citations: [AlteredEISubPops], children: [_jsxs("span", { children: ["for every region k (k varies from 1 to N and N is the total number of regions) based on the Desikan\u2013Killiany parcellation, the regional population signal is modeled as the sum of excitatory signals x", _jsx("sub", { children: "e" }), "(t) and inhibitory signals x", _jsx("sub", { children: "i" }), "(t). signal dynamics consist of a decay of the individual signals with a fixed neural gain, incoming signals from populations that alternate between the excitatory and inhibitory signals, and input Gaussian white noise. The equations for the excitatory and inhibitory signals for every region are the following:"] }), _jsx(MathJax, { children: `
            \\[
            \\frac{dx_e(t)}{dt} = -\\frac{f_e(t)}{\\tau_e} \\star \\left( g_{ee} x_e(t) - g_{ei} f_i(t) \\star x_i(t) \\right) + p(t)
            \\]

            \\[
            \\frac{dx_i(t)}{dt} = -\\frac{f_i(t)}{\\tau_i} \\star \\left( g_{ii} x_i(t) + g_{ei} f_e(t) \\star x_e(t) \\right) + p(t)
            \\]
        ` }), _jsx("span", { children: "g stands for neural gain. \u03C4 represents the time constant of the decay, lower \u03C4 = faster rate of change in signal. p(t) is the input Gaussian white noise. f(t) represents \u03B3 shaped average neural impusle." })] })] })));
export const Wrapper = () => _jsx(_Fragment, { children: NMM.content });
