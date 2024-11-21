import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card.tsx";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Figure from "../../figure/figure.tsx";
import bibtex from "@/public/citations/bibtex.json";
import SectionTitle from "../../section-title/section-title.tsx";

const Introduction = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.frozza2018challenges]}>
                <Figure
                    src="images/classification/ad_stages.png"
                    alt="AD Stages"
                    caption="AD Stages"
                    n={1}
                />
            </CitationCard>
            <div>
                <CitationCard citations={[bibtex.dubois2010revising]}>
                    The introduction of biomarkers has led to the development of
                    a possibility to see AD as a continuum. For this matter,
                    Dubois et al. (2010) proposed a new research framework for
                    AD, which includes new stages of the disease. covering the
                    continuum.
                </CitationCard>
            </div>
        </div>
    );
};

const Preclinical = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.dubois2010revising]}>
                two preclinical states of AD in which individuals are free of
                cognitive/behavioural symptoms, yet have either biomarker
                evidence of Alzheimer’s (Asymptomatic at risk for AD) pathology
                or a monogenic form of AD (presymptomatic AD).
            </CitationCard>
        </div>
    );
};

const Prodromal = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.dubois2010revising]}>
                prodromal AD characterises clinically affected patients who do
                not yet have dementia (predementia) and who are diagnosed to
                have AD on the basis of their clinical presentation and
                supportive evidence of Alzheimer’s pathology from biomarkers.
                The diagnosis of prodromal AD is preferred to that of MCI,
                because identifying the disease responsible for the syndrome is
                more valuable for the patient in terms of prognosis and
                treatment.
            </CitationCard>
        </div>
    );
};

const AD = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.dubois2010revising]}>
                It might still be meaningful to identify the dementia threshold
                as a severity milestone in the course of the disease with
                foreseeable clear economic and social implications.75
            </CitationCard>
        </div>
    );
};

const Mild = () => {
    return (
        <div>
            The mild stage of AD has been evolving as a concept that can be
            identified through different frameworks. For instance in the CDR
            scale, mild AD is defined as a CDR score of 1, which is
            characterized by mild cognitive impairment. In the NIA-AA framework,
            mild AD is defined as the presence of both cognitive impairment and
            biomarker evidence of AD pathology. The mild stage of AD is
            characterized by the presence of cognitive impairment that does not
            interfere with daily activities, but that can be detected through
            neuropsychological tests.
        </div>
    );
};

const Moderate = () => {
    return (
        <div>
            The moderate stage of AD is characterized by a CDR score of 2, which
            is characterized by moderate cognitive impairment. In the NIA-AA
            framework, moderate AD is defined as the presence of both cognitive
            impairment and biomarker evidence of AD pathology. The moderate
            stage of AD is characterized by cognitive impairment that interferes
            with daily activities, such as the ability to manage finances or to
            prepare meals.
        </div>
    );
};

const Severe = () => {
    return (
        <div>
            The severe stage of AD is characterized by a CDR score of 3, which
            is characterized by severe cognitive impairment. In the NIA-AA
            framework, severe AD is defined as the presence of both cognitive
            impairment and biomarker evidence of AD pathology. The severe stage
            of AD is characterized by cognitive impairment that interferes with
            daily activities, such as the ability to manage finances or to
            prepare meals.
        </div>
    );
};

export const Stages = new MyNode(
    "Stages",
    [],
    (
        <NodeCard>
            <SectionTitle>Introduction</SectionTitle>
            <Introduction />
            <SectionTitle>Preclinical AD</SectionTitle>
            <Preclinical />
            <SectionTitle>Prodromal AD</SectionTitle>
            <Prodromal />
            <SectionTitle>AD</SectionTitle>
            <AD />
            <SectionTitle>Mild AD</SectionTitle>
            <Mild />
            <SectionTitle>Moderate AD</SectionTitle>
            <Moderate />
            <SectionTitle>Severe AD</SectionTitle>
            <Severe />
        </NodeCard>
    )
);

export const Wrapper = () => <>{Stages.content}</>;

export default Stages;
