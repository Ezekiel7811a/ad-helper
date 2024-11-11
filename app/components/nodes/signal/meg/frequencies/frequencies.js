import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CitationCard from "@/app/components/citation-card/citation-card";
import Figure from "@/app/components/figure/figure";
import Hypothesis from "@/app/components/hypothesis/hypothesis";
import ToCheck from "@/app/components/to-check/to-check";
import { MyNode } from "@/models/node";
import { SynergyABTauCorticalAndMC } from "@/public/citations";
const Frequencies = new MyNode("Frequencies", [], (_jsxs("div", { children: [_jsxs(CitationCard, { citations: [SynergyABTauCorticalAndMC], children: ["A consistent observation with electroencephalography (EEG) and magnetoencephalography (MEG) is that low-frequency neurophysiological activity (\u03B4\u2013\u03B8 bands; 2\u20138 Hz) is increased and higher frequency activity (mainly in the \u03B1 band; 8\u201312 Hz) is reduced in the symptomatic and prodromal stages of the disease31,35\u201340. To test the synergy of proteins with bands. 104 patients were tested with PET-A\u03B2 and tau, and MEG. The results showed that early A\u03B2 deposition is with macroscopic neurophysiological manifestations of hyperactivity, expressed as an acceleration of neurophysiological oscillatory activity reflected by increased alpha-band and decreased delta-band activity. As predicted from disease models, we also found that these effects shift from oscillatory acceleration to slowing in individuals presenting early temporal lobe tau pathology and that the magnitude of the shift from neurophysiological acceleration to slowing is associated with longitudinal cognitive decline. They ran their test with the mean values of each participant and with linear mixed effects models to account for intra-patient variability.", _jsx(Figure, { n: 1, src: "images/ab-tau/ab_frequencies.png", alt: "ab_frequencies", caption: "Interactive effects of AD proteinopathies on neurophysiological activity in asymptomatic adults" }), "A\u03B2 deposits induce toxic effects on the dynamics of neuronal circuits, by simultaneously increasing excitation and decreasing inhibition, leading to augmented levels of alpha-band activity41. slower brain activity in the delta and theta bands, which are linked to impairments in additional cognitive domains, such as processing speed34."] }), _jsx(ToCheck, { string: "Would not that be due to shifts of frequency centers ?" }), _jsx(Hypothesis, { children: "Increased Tau Accumulation Leads to Decreased High-Frequency Power (Alpha/Beta) in Excitatory-Dominated Regions" }), _jsx(Hypothesis, { children: "High Tau Levels Correlate with Increased Low-Frequency Power (Delta/Theta) as a Result of Compensatory Inhibitory Activity" }), _jsx(Hypothesis, { children: "The Ratio of Low- to High-Frequency Power Increases with Tau Load, Indicating Shifts Toward Slower Rhythms in Tau-Rich Regions" })] })));
export default Frequencies;