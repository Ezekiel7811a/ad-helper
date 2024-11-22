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
