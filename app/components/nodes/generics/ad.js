import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { MyNode } from "@/models/node";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { ADBiologicalConstruct, adReview, NIAAA } from "@/public/citations";
const AlzheimerNode = new MyNode("Alzheimer's Disease", [], (_jsxs("div", { children: [_jsx(CitationCard, { citations: [adReview], children: `Alzheimer disease (AD) is biologically defined by the presence of
        β-amyloid-containing plaques and tau-containing neurofibrillary tangles.
        AD is a genetic and sporadic neurodegenerative disease that causes an
        amnestic cognitive impairment in its prototypical presentation and
        non-amnestic cognitive impairment in its less common variants. AD is a
        common cause of cognitive impairment acquired in midlife and late-life
        but its clinical impact is modified by other neurodegenerative and
        cerebrovascular conditions. This Primer conceives of AD biology as the
        brain disorder that results from a complex interplay of loss of synaptic
        homeostasis and dysfunction in the highly interrelated
        endosomal/lysosomal clearance pathways in which the precursors,
        aggregated species and post-translationally modified products of Aβ and
        tau play important roles. Therapeutic endeavours are still struggling to
        find targets within this framework that substantially change the
        clinical course in persons with AD.` }), _jsx(CitationCard, { citations: [NIAAA], children: "From 10% to 30% of individuals clinically diagnosed as AD dementia by experts do not display AD neuropathologic changes at autopsy [50], and a similar proportion has normal amyloid PET or CSF Ab42 studies [53\u201362]. especially in older persons. Thirty to forty percent of cognitively unimpaired (CU) elderly persons have AD neuropathologic changes at autopsy [67\u201369], and a similar proportion has abnormal amyloid biomarkers [33,53\u201355,60,70\u201373]." }), _jsx(CitationCard, { citations: [ADBiologicalConstruct], children: "Recent studies suggested that the clinical diagnosis of AD can be made with the biomarkers alone. the development of emerging biomarkers of copatholo- gies, eg, \u03B1-synuclein, TDP-43, and others in the future, could result in the diagnosis of 2, 3, or more different neurodegenerative diseases in a cognitively normal person, as a norm. AA does not support the use of biomarkers alone for the diagnostis. The combination of common (amnestic syndrome of the hippo- campal type, logopenic aphasia, posterior cortical atrophy) or uncommon (corticobasal syndrome, behavioral and dysexecutive variants) clinical phenotypes and the positivity of pathophysiologi- cal amyloid and tau biomarkers establishes the diagnosis of AD." })] })));
export const Wrapper = () => _jsx(_Fragment, { children: AlzheimerNode.content });
export default AlzheimerNode;
