import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import SectionTitle from "../../section-title/section-title";

const Introduction = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.schoffelen2009source]}>
                The goal of cognitive neuroscience is to understand how the
                brain is able to perceive, to think, and to behave. These
                processes rely on a coordinated interplay between various
                specialized brain regions. With the aim of identifying areas
                that subserve specific information processing tasks, the
                majority of neuroimaging studies have traditionally investigated
                task-dependent changes in brain activity
            </CitationCard>
            <CitationCard citations={[bibtex.friston1994functional]}>
                based on the concept of functional segregation.
            </CitationCard>
            <CitationCard citations={[bibtex.schoffelen2009source]}>
                However, to increase our knowledge of how the brain works, it
                does not suffice to study the activity and function of brain
                regions in isolation. Brain function also critically depends on
                functional integration, which relates to the pattern of
                interactions between brain regions. EEG and MEG are well suited
                thanks to their high temporal resolution.
            </CitationCard>
        </div>
    );
};

const MEGvsEEG = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.singh2014magnetoencephalography]}>
                MEG fields pass through the head without any distortion. This is
                a significant advantage of MEG over EEG.
            </CitationCard>
        </div>
    );
};

const Limits = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                Studies show a highly negative correlation between amyloid PET
                and CSF results, whereas CSF P-tau and tau PET findings are
                inconsistent. This discrepancy is related to their respective
                representations of PHFs formation and pathological tau
                deposition, with the latter’s higher correlation to cognitive
                abilities supporting tau PET as the most effective method for
                predicting cognitive decline in AD.365,374
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                A recent study indicated that within 20 years, abnormalities in
                CSF Aβ42, the ratio of CSF Aβ42 to Aβ40, CSF P-tau181, CSF
                T-tau, CSF neurofilament light chain (NfL), and hippocampal
                volume (as detected by sMRI) appear in sequence before the
                clinical diagnosis of SAD.375 This suggests that CSF biomarkers
                may reveal changes in the disease process earlier than imaging
                biomarkers.7
            </CitationCard>
        </div>
    );
};

export const Signal = new MyNode(
    "Signal",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.dubois2014advancing]}>
                108 Results from this study showed that individuals with
                increased ligand retention in amyloid imaging typically have
                decreased CSF Aβ and increased CSF tau concentrations.
            </CitationCard>
            <SectionTitle>Introduction</SectionTitle>
            <Introduction />
            <SectionTitle>MEG vs EEG</SectionTitle>
            <MEGvsEEG />
        </NodeCard>
    )
);

export const Wrapper = () => <>{Signal.content}</>;

export default Signal;
