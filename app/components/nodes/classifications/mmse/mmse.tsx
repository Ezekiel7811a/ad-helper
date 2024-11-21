import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import NodeCard from "@/app/components/node-card/node-card";
import SectionTitle from "@/app/components/section-title/section-title";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const Introduction = () => {
    return (
        <div>
            <div>
                The MMSE is subject to copyright restrictions, therefore will
                not be included in this resource.
            </div>
            <div>
                <CitationCard citations={[bibtex.arevalo2015mini]}>
                    MMSE is the best-known and the most often used short
                    screening tool for providing an overall measure of cognitive
                    impairment in clinical, research and community settings.
                </CitationCard>
                <CitationCard citations={[bibtex.folstein1975mini]}>
                    a 30-question assessment of cognitive function that
                    evaluates attention and orientation, memory, registration,
                    recall, calculation, language and ability to draw a complex
                    polygon that takes no longer than 10 minutes to complete.
                </CitationCard>
                <CitationCard citations={[bibtex.tombaugh1992mini]}>
                    Traditionally, a 23/24 cut-off has been used to select
                    patients with suspected cognitive impairment or dementia.
                    24–30: Normal cognition 20–23: Mild cognitive impairment
                    (MCI or mild AD) 10–19: Moderate AD &lt;10: Severe AD
                </CitationCard>
            </div>
        </div>
    );
};

const AccuracyMetrics = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.arevalo2015mini]}>
                For conversion from MCI to dementia in general sensitivities of
                23% to 76% and specificities from 40% to 94%. In relationship to
                conversion from MCI to Alzheimer’s disease dementia, the
                accuracy of baseline MMSE scores ranged from sensitivities of
                27% to 89% and specificities from 32% to 90%. In conclusion it
                should not be used as a standalone diagnostic.
            </CitationCard>
        </div>
    );
};

const Strenghts = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.nieuwenhuis2010death]}>
                Advantages of the MMSE include rapid administration,
                availability of multiple language translations and high levels
                of acceptance as a diagnostic instrument amongst health
                professionals and researchers.
            </CitationCard>
        </div>
    );
};

const Limitations = () => {
    return (
        <div>
            <CitationCard
                citations={[
                    bibtex.bleecker1988age,
                    bibtex.brayne1990association,
                    bibtex.crum1993population,
                ]}
            >
                Several studies have shown that sociocultural variables, age and
                education, among other factors, could affect individual scores
            </CitationCard>
            <CitationCard
                citations={[
                    bibtex.diniz2007mini,
                    bibtex.kulisevsky2009cognitive,
                    bibtex.shiroky2007can,
                    bibtex.trenkle2007detecting,
                ]}
            >
                therefore local standards must be developed for each population
                and setting evaluated.
            </CitationCard>
            <CitationCard citations={[bibtex.arevalo2015mini]}>
                is test was not developed to identify the early stages of
                dementia or even to predict the development of dementia in the
                long term.
            </CitationCard>
        </div>
    );
};

const MMSE = new MyNode(
    "Mini Mental State Examination (MMSE)",
    [],
    (
        <NodeCard>
            <SectionTitle>Introduction</SectionTitle>
            <Introduction />
            <SectionTitle>Accuracy Metrics</SectionTitle>
            <AccuracyMetrics />
            <SectionTitle>Strenghts</SectionTitle>
            <Strenghts />
            <SectionTitle>Limitations</SectionTitle>
            <Limitations />
        </NodeCard>
    )
);

export const Wrapper = () => <>{MMSE.content}</>;

export default MMSE;
