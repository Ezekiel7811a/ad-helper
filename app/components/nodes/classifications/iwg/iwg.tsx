import CitationCard from "@/app/components/citation-card/citation-card";
import NodeCard from "@/app/components/node-card/node-card";
import SectionTitle from "@/app/components/section-title/section-title";
import MyTable from "@/app/components/table/table";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const TypicalAD = () => {
    return (
        <div>
            <span>
                <div>
                    table 1. IWG-2 criteria for typical AD (A plus B at any
                    stage)
                </div>
                <MyTable headers={headers} contents={contents} />
            </span>
        </div>
    );
};

const Variants = () => {
    return (
        <div>
            <span>
                <CitationCard citations={[bibtex.dubois2014advancing]}>
                    propose more precise definitions for atypical AD
                    presentations, including a posterior variant of AD, a
                    logopenic variant of AD, and a frontal variant of AD.
                </CitationCard>
            </span>
            <span>
                <CitationCard citations={[bibtex.crutch2012posterior]}>
                    The posterior variant of AD presents as a posterior cortical
                    atrophy
                </CitationCard>
                <CitationCard citations={[bibtex.warren2012paradox]}>
                    and generally results in several signs and symptoms that
                    distinguish two subtypes:
                </CitationCard>
                <CitationCard citations={[bibtex.galton2000atypical]}>
                    an occipitotemporal variant,
                </CitationCard>
                <CitationCard citations={[bibtex.ross1996progressive]}>
                    with a predominant impairment in the visual identification
                    of objects, symbols, words, or faces; and a more common
                    biparietal variant,
                </CitationCard>
                <CitationCard citations={[bibtex.dubois2014advancing]}>
                    with predominant visuospatial dysfunction, as well as
                    features of Gerstmann or Balint syndrome, limb apraxia, or
                    neglect.
                </CitationCard>
            </span>
            <CitationCard citations={[bibtex.henry2010logopenic]}>
                The logopenic variant of AD, which presents as the logopenic
                primary progressive aphasia, is defined by a progressive
                impairment in single-word retrieval and in repetition of
                sentences in the context of spared semantic, syntactic, and
                motor speech abilities.
            </CitationCard>
            <CitationCard
                citations={[
                    bibtex.habek2010frontal,
                    bibtex.woodward2010does,
                    bibtex.woodward2010differentiating,
                    bibtex.alladi2007focal,
                    bibtex.johnson1999clinical,
                    bibtex.mendez2013clinicopathologic,
                ]}
            >
                The frontal variant of AD presents as a behavioural variant of
                frontotemporal dementia, with progressive apathy or behavioural
                disinhibition and stereotyped behaviours, or with predominant
                executive dysfunction at testing.
            </CitationCard>
            <div>table 2. IWG-2 criteria for mixed AD (A plus B)</div>
            <MyTable headers={headersAtypical} contents={contentsAtypical} />
        </div>
    );
};

const PreclinicalAD = () => {
    return (
        <div>
            <span>
                <CitationCard citations={[bibtex.dubois2014advancing]}>
                    preclinical states of AD require: the absence of clinical
                    symptoms of AD (typical or atypical phenotypes); and the
                    presence of at least one biomarker of Alzheimer’s pathology
                    for the identification of asymptomatic at-risk state, or the
                    presence of a proven AD autosomal dominant mutation on
                    chromosomes 1, 14, or 21
                </CitationCard>
                <div>table 3. IWG-2 criteria for preclinical AD (A plus B)</div>
                <MyTable
                    headers={headersPreclinical}
                    contents={contentsPreclinical}
                />
            </span>
        </div>
    );
};

const headers = ["Title", "Description"];

const contents = [
    [
        "A Specific clinical phenotype",
        "Presence of an early and significant episodic memory impairment (isolated or associated with other cognitive or behavioural changes that are suggestive of a mild cognitive impairment or of a dementia syndrome) that includes the following features:Gradual and progressive change in memory function reported by patient or informant over more than 6 months • Objective evidence of an amnestic syndrome of the hippocampal type,* based on significantly impaired performance on an episodic memory test with established specificity for AD, such as cued recall with control of encoding test",
    ],
    [
        "B In-vivo evidence of Alzheimer’s pathology (one of the following)",
        "Decreased Aβ1–42 together with increased T-tau or P-tau in CSF • Increased tracer retention on amyloid PET • AD autosomal dominant mutation present (in PSEN1, PSEN2, or APP)",
    ],
    [
        "Exclusion criteria† for typical AD",
        "History • Sudden onset • Early occurrence of the following symptoms: gait disturbances, seizures, major and prevalent behavioural changes Clinical features • Focal neurological features • Early extrapyramidal signs • Early hallucinations • Cognitive fluctuations Other medical conditions severe enough to account for memory and related symptoms • Non-AD dementia • Major depression • Cerebrovascular disease • Toxic, inflammatory, and metabolic disorders, all of which may require specific investigations • MRI FLAIR or T2 signal changes in the medial temporal lobe that are consistent with infectious or vascular insults",
    ],
];

const headersAtypical = ["Title", "Description"];
const contentsAtypical = [
    [
        "A Specific clinical phenotype (one of the following)",
        "• Posterior variant of AD (including) • An occipitotemporal variant defined by the presence of an early, predominant, and progressive impairment of visuoperceptive functions or of visual identification of objects, symbols, words, or faces • A biparietal variant defined by the presence of early, predominant, and progressive difficulty with visuospatial function, features of Gerstmann syndrome, of Balint syndrome, limb apraxia, or neglect • Logopenic variant of AD defined by the presence of an early, predominant, and progressive impairment of single word retrieval and in repetition of sentences, in the context of spared semantic, syntactic, and motor speech abilities • Frontal variant of AD defined by the presence of early, predominant, and progressive behavioural changes including association of primary apathy or behavioural disinhibition, or predominant executive dysfunction on cognitive testing • Down’s syndrome variant of AD defined by the occurrence of a dementia characterised by early behavioural changes and executive dysfunction in people with Down’s syndrome",
    ],
    [
        "B In-vivo evidence of Alzheimer’s pathology (one of the following)",
        "• Decreased Aβ1–42 together with increased T-tau or P-tau in CSF • Increased tracer retention on amyloid PET • Alzheimer’s disease autosomal dominant mutation present (in PSEN1, PSEN2, or APP)",
    ],
    [
        "Exclusion criteria* for atypical AD",
        "History • Sudden onset • Early and prevalent episodic memory disorders Other medical conditions severe enough to account for related symptoms • Major depression • Cerebrovascular disease • Toxic, inflammatory, or metabolic disorders",
    ],
];

const headersPreclinical = ["Title", "Description"];
const contentsPreclinical = [
    [
        "IWG-2 criteria for asymptomatic at risk for AD (A plus B)",
        "A Absence of specific clinical phenotype (both are required) • Absence of amnestic syndrome of the hippocampal type • Absence of any clinical phenotype of atypical AD B In-vivo evidence of Alzheimer’s pathology (one of the following) • Decreased Aβ1–42 together with increased T-tau or P-tau in CSF • Increased retention on fibrillar amyloid PET",
    ],
    [
        "IWG-2 criteria for presymptomatic AD (A plus B)",
        "A Absence of specific clinical phenotype (both are required) • Absence of amnestic syndrome of the hippocampal type • Absence of any clinical phenotype of atypical AD B Proven AD autosomal dominant mutation in PSEN1, PSEN2, or APP, or other proven genes (including Down’s syndrome trisomy 21)",
    ],
];
const heandersMarkers = ["Title", "Description"];
const contentsMarkers = [
    [
        "Diagnostic marker",
        "• Pathophysiological marker • Refl ects in-vivo pathology • Is present at all stages of the disease • Observable even in the asymptomatic state • Might not be correlated with clinical severity • Indicated for inclusion in protocols of clinical trials",
    ],
    [
        "Progression marker",
        "• Topographical or downstream marker • Poor disease specificity • Indicates clinical severity (staging marker) • Might not be present in early stages • Quantifies time to disease milestones • Indicated for disease progression",
    ],
];

const Introduction = () => {
    return (
        <div>
            <span>
                <div>
                    IWG was first introduced in 2007, a second version was
                    proposed in 2014 by dubois et al.
                </div>
                <CitationCard citations={[bibtex.dubois2004amnestic]}>
                    IWG for New Research Criteria for the Diagnosis of AD
                    provided a new conceptual framework that moved AD from a
                    clinicopathological to a clinicobiological entity.
                </CitationCard>
                <CitationCard citations={[bibtex.dubois2014advancing]}>
                    Presence of biomarker evidence consistent with and
                    supportive of AD on: (1) structural MRI; (2) molecular
                    neuroimaging with PET (¹⁸F-2-fluoro-2-deoxy-D-glucose PET
                    [FDG PET] or ¹¹C-labelled Pittsburgh compound B PET [PiB
                    PET]); or (3) CSF analysis of amyloid β (Aβ) or tau protein
                    (total tau [T-tau] and phosphorylated tau [P-tau])
                    concentrations.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.jellinger2010prevalence,
                        bibtex.schneider2004cerebral,
                    ]}
                >
                    The IWG initially defined mixed AD as the co-occurrence of
                    Alzheimer’s pathology with other pathologies that might
                    contribute to the cognitive decline with a prevalence of 50%
                    of all ADs with increased frequency with age.
                </CitationCard>
            </span>
            <CitationCard citations={[bibtex.dubois2014advancing]}>
                A differential approach regarding markers has been proposed:
                <MyTable headers={heandersMarkers} contents={contentsMarkers} />
            </CitationCard>
        </div>
    );
};

const IWG = new MyNode(
    "IWG",
    [],
    (
        <NodeCard>
            <SectionTitle>Introduction</SectionTitle>
            <Introduction />
            <SectionTitle>Typical AD</SectionTitle>
            <TypicalAD />
            <SectionTitle>Variants</SectionTitle>
            <Variants />
            <SectionTitle>Preclinical AD</SectionTitle>
            <PreclinicalAD />
        </NodeCard>
    )
);

export const Wrapper = () => <>{IWG.content}</>;

export default IWG;
