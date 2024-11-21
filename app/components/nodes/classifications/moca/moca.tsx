import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import Link from "next/link";
import SectionTitle from "@/app/components/section-title/section-title";

const Introduction = () => {
    return (
        <div>
            <div>
                <CitationCard citations={[bibtex.nasreddine2005montreal]}>
                    MoCA is a screening instrument that evaluates seven
                    cognitive domains on a single page and scores range from 0
                    to 30 26–30: Normal cognition 18–25: Mild impairment (MCI or
                    early AD) &lt;18: Moderate to severe impairment (middle to
                    late-stage AD).
                </CitationCard>
                <CitationCard citations={[bibtex.o2017cross]}>
                    The domains are: visuospatial/executive functions, naming,
                    verbal memory registration and learning, attention,
                    abstraction, 5minute delayed verbal memory, and orientation.
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.o2017cross]}>
                    To facilitate the detection of MCI, many health
                    professionals around the world are using the Montreal
                    Cognitive Assessment (MoCA) as a brief cognitive screen
                    across a variety of clinical settings.
                </CitationCard>
            </div>
        </div>
    );
};

const Strenghts = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.o2017cross]}>
                is a brief and potentially useful screening tool with high
                sensitivity and specificity for detecting MCI in persons
                performing in the normal range on the MMSE.
            </CitationCard>
        </div>
    );
};

const Limitations = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.tan2014optimal]}>
                only a small number have been validated and nearly all versions
                lack population-based data of individuals aged 80-plus. For
                instance, the norms and cut-off scores for MCI and dementia of
                the MoCA are different among five Chinese versions.
            </CitationCard>
        </div>
    );
};

const AccuracyMetrics = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.o2017cross]}>
                Twenty six studies in total (N=19060) investigated the ability
                of the MoCA to differentiate MCI from NC. Sensitivity ranged
                from 55% (at a specificity of 76%) to 96% (at a specificity of
                76%). Specificity ranged from 19% (at sensitivity of 96%) to 97%
                (at sensitivity of 91%). Other studies did the same but for the
                other versions of MoCA showing variable results.
            </CitationCard>
        </div>
    );
};

export const MOCA = new MyNode(
    "MOCA",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.nasreddine2005montreal]}>
                <Link
                    href={
                        "https://www.auvergne-rhone-alpes.paps.sante.fr/media/96059/download?inline"
                    }
                >
                    Montreal Cognitive Assessment (MoCA): developed and
                    validated by Nasreddine et al. (2005).
                </Link>
            </CitationCard>
            <SectionTitle>Introduction</SectionTitle>
            <Introduction />
            <SectionTitle>Strenghts</SectionTitle>
            <Strenghts />
            <SectionTitle>Limitations</SectionTitle>
            <Limitations />
            <SectionTitle>Accuracy Metrics</SectionTitle>
            <AccuracyMetrics />
        </NodeCard>
    )
);

export const Wrapper = () => <>{MOCA.content}</>;

export default MOCA;
