import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CitationCard from "@/app/components/citation-card/citation-card";
import Hypothesis from "@/app/components/hypothesis/hypothesis";
import { MyNode } from "@/models/node";
import { Braak, SynergyABTauCorticalAndMC, synergyABTauInAD, } from "@/public/citations";
const Tau = new MyNode("Tau", [], (_jsxs("div", { children: ["Tau is a microtubule-associated protein that is abundant in neurons. It stabilizes microtubules and promotes their assembly. In the context of Alzheimer's disease, tau becomes hyperphosphorylated and forms neurofibrillary tangles. These tangles are associated with neuronal dysfunction and cell death. Tau pathology is thought to be a key driver of neurodegeneration in Alzheimer's disease.", _jsx(CitationCard, { citations: [synergyABTauInAD], children: "The tau aggregates are commonly found in the medial temporal lobe, starting in the parahippocampal gyrus, which includes the entorhinal cortex, from which they spread to limbic areas, and from there to the association areas." }), _jsx(CitationCard, { citations: [SynergyABTauCorticalAndMC], children: "Tau deposition also follows a relatively stereotypical distribution pattern, accumulating first in the entorhinal cortex before spreading to limbic areas and eventually the neocortex6,14,15." }), _jsx(Hypothesis, { children: "Regions with High Tau Burden Show Altered Aperiodic Slopes, Reflecting an Imbalance in Excitatory-Inhibitory Activity" }), _jsx(CitationCard, { citations: [Braak], children: "Neurofibrillary tangles develop mainly in Pyramidal cells of the entorhinal cortex and then due to the spread effect will spread to hippocampus and finally to the neocortex." })] })));
export default Tau;