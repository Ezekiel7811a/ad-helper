import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import SectionTitle from "@/app/components/section-title/section-title";

const Introduction = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.borson2000mini]}>
                The Mini-Cog is a brief cognitive test consisting of two
                components, a delayed three-word recall and the clock drawing
                test. he standard scoring system involves assigning a score of 0
                to 3 points on the word recall task for the correct recall of 0,
                1, 2 or 3 words, respectively. The clock drawing test is scored
                as being either normal or abnormal. A positive test on the
                Mini-Cog (that is dementia) is assigned if either the delayed
                recall score is 0 out of 3 or if the delayed recall score is
                either 1 or 2 and the clock drawing test is abnormal. A score of
                3 on the delayed recall or 1 to 2 on delayed recall with a
                normal clock drawing is a negative test.
            </CitationCard>
            <CitationCard citations={[bibtex.fage2015mini]}>
                The Mini-Cog was initially developed in a community setting to
                provide a relatively brief cognitive screening test.
            </CitationCard>
            <CitationCard
                citations={[
                    bibtex.borson2000mini,
                    bibtex.holsinger2007does,
                    bibtex.scanlan2001mini,
                ]}
            >
                The Mini-Cog takes approximately three to five minutes to
                complete in routine practice.
            </CitationCard>
        </div>
    );
};

const Strenghts = () => {
    return (
        <div>
            <CitationCard
                citations={[
                    bibtex.borson2000mini,
                    bibtex.borson2005simplifying,
                ]}
            >
                The Mini-Cog has been reported to have little potential for bias
                in terms of education or language.
            </CitationCard>
            <div>
                Can be used in a variety of settings, including primary care.
            </div>
        </div>
    );
};

const Limitations = () => {
    return (
        <div>
            The Mini-Cog may be too brief to detect subtle cognitive changes.
            Making it less useful in a research setting.
        </div>
    );
};

const AccuracyMetrics = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.fage2015mini]}>
                Sensitivity ranges from 76 to 99% with a specifity ranging from
                83 to 93%. Although they might have been overestimated due to
                the exclusion criterias.
            </CitationCard>
        </div>
    );
};

export const MiniCog = new MyNode(
    "MiniCog",
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

export const Wrapper = () => <>{MiniCog.content}</>;

export default MiniCog;
