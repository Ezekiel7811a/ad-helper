import { MyNode } from "@/models/node";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import bibtex from "@/public/citations/bibtex.json";
import NodeCard from "../../node-card/node-card.tsx";
import SectionTitle from "../../section-title/section-title.tsx";

const Introduction = () => {
    return (
        <div>
            <span>
                <CitationCard citations={[bibtex.dubois2014advancing]}>
                    Memory disorders that manifest as free recall deficits occur
                    in many brain diseases other than AD.28–30
                </CitationCard>
            </span>
        </div>
    );
};

const AlzheimerNode = new MyNode(
    "Alzheimer's Disease",
    [],
    (
        <NodeCard>
            <SectionTitle>Introduction</SectionTitle>
            <Introduction />
            <CitationCard citations={[bibtex.sweeney2019vascular]}>
                Nor does anyone know for sure whether AD is one or more diseases
                or perhaps rather a syndrome, i.e., a symptom complex caused by
                one or more factors, so that the abbreviation AS may be more
                appropriate than AD. Others have attempted the same distinction
                in talking about “Alzheimer’s clinical syndrome” [20];
            </CitationCard>
            <CitationCard citations={[bibtex.knopman2021alzheimer]}>
                Alzheimer disease (AD) is biologically defined by the presence
                of β-amyloid-containing plaques and tau-containing
                neurofibrillary tangles. AD is a genetic and sporadic
                neurodegenerative disease that causes an amnestic cognitive
                impairment in its prototypical presentation and non-amnestic
                cognitive impairment in its less common variants. AD is a common
                cause of cognitive impairment acquired in midlife and late-life
                but its clinical impact is modified by other neurodegenerative
                and cerebrovascular conditions. This Primer conceives of AD
                biology as the brain disorder that results from a complex
                interplay of loss of synaptic homeostasis and dysfunction in the
                highly interrelated endosomal/lysosomal clearance pathways in
                which the precursors, aggregated species and
                post-translationally modified products of Aβ and tau play
                important roles. Therapeutic endeavours are still struggling to
                find targets within this framework that substantially change the
                clinical course in persons with AD.
            </CitationCard>
            <span>
                <CitationCard citations={[bibtex.salloway2014two]}>
                    From 10% to 30% of individuals clinically diagnosed as AD
                    dementia by experts do not display AD neuropathologic
                    changes at autopsy,
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.jack2016suspected,
                        bibtex.soldan2016hypothetical,
                        bibtex.crary2014primary,
                        bibtex.nelson2016new,
                        bibtex.kryscio2016self,
                        bibtex.nelson2010modeling,
                        bibtex.nelson2011hippocampal,
                        bibtex.nag2015hippocampal,
                        bibtex.brenowitz2014hippocampal,
                        bibtex.luchsinger2001diabetes,
                    ]}
                >
                    and a similar proportion has normal amyloid PET or CSF Ab42
                    studies.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.vemuri2016role,
                        bibtex.vemuri2017age,
                        bibtex.irwin2017neuropathological,
                    ]}
                >
                    Especially in older persons. 30-40% of cognitively
                    unimpaired (CU) elderly persons have AD neuropathologic
                    changes at autopsy,
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.jack2016suspected,
                        bibtex.soldan2016hypothetical,
                        bibtex.crary2014primary,
                        bibtex.nag2015hippocampal,
                        bibtex.vos2016nia,
                        bibtex.kantarci2017av,
                        bibtex.schneider2012cognitive,
                        bibtex.committee2011qualification,
                    ]}
                >
                    and a similar proportion has abnormal amyloid biomarkers.
                </CitationCard>
            </span>
            <CitationCard citations={[bibtex.dubois2024alzheimer]}>
                Recent studies suggested that the clinical diagnosis of AD can
                be made with the biomarkers alone. the development of emerging
                biomarkers of copatholo- gies, eg, α-synuclein, TDP-43, and
                others in the future, could result in the diagnosis of 2, 3, or
                more different neurodegenerative diseases in a cognitively
                normal person, as a norm. IWG does not support the use of
                biomarkers alone for the diagnostis. The combination of common
                (amnestic syndrome of the hippo- campal type, logopenic aphasia,
                posterior cortical atrophy) or uncommon (corticobasal syndrome,
                behavioral and dysexecutive variants) clinical phenotypes and
                the positivity of pathophysiologi- cal amyloid and tau
                biomarkers establishes the diagnosis of AD.
            </CitationCard>
            <CitationCard
                citations={[
                    bibtex.ishii2015metabolic,
                    bibtex.lanctot2017neuropsychiatric,
                ]}
            >
                as disease progresses, other debilitating non-cognitive symptoms
                arise, including impaired sleep and appetite, and
                neuropsychiatric alterations (e.g., depression and apathy).
            </CitationCard>
            <CitationCard
                citations={[
                    bibtex.sperling2011toward,
                    bibtex.sperling2011testing,
                ]}
            >
                pathophysiological changes begin to develop decades prior to
                initial cognitive symptoms, in a preclinical or presymptomatic
                stage.
            </CitationCard>
            <CitationCard
                citations={[
                    bibtex.karran2011amyloid,
                    bibtex.cummings2014alzheimer,
                    bibtex.hendrix2016challenges,
                ]}
            >
                Although advances in animal and clinical research over the past
                few decades have improved our knowledge on the
                pathophysiological course of AD, even drugs with successful
                preclinical assessment have not been effective in reversing or
                slowing down AD progression in large clinical trials. These
                constraints may be due to that clinical trials have
                predominantly focused on therapies based on anti-amyloid
                strategies, since the amyloid cascade hypothesis has been placed
                at the center of therapeutic prospection.
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{AlzheimerNode.content}</>;

export default AlzheimerNode;
