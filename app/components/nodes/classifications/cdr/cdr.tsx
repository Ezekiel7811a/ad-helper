import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import Link from "next/link";
import SectionTitle from "@/app/components/section-title/section-title";

const Introduction = () => {
    return (
        <div>
            <span>
                <CitationCard citations={[bibtex.chaves2007validity]}>
                    CDR
                </CitationCard>
                <CitationCard citations={[bibtex.chaves2007validity]}>
                    Variants: BDRS or DSM III-R. Previous gold standards:
                    NINCDS-ADRDA and NINDS-AIREN
                </CitationCard>
                <CitationCard citations={[bibtex.chaves2007validity]}>
                    Found a sensitivity of 86% for healthy elderly and 80% for
                    questionnable dementia. Specificity was 100% for both
                    groups. Inference based on n = 343.
                </CitationCard>
                <CitationCard citations={[bibtex.chaves2007validity]}>
                    CDR was first introduced for AD and is now used for other
                    dementias.
                </CitationCard>
                <CitationCard citations={[bibtex.chaves2007validity]}>
                    The clinical protocol incorporates semistructured
                    interviews, of the patient and informant to obtain
                    information sufficient to rate the subject’s cognitive
                    performance in 6 domains: memory, orientation, judgment and
                    problem solving, community affairs, home and hobbies, and
                    personal care. each domain is rated on 5 levels of
                    impairment: 0 (none), 0.5 (questionable), 1 (mild), 2
                    (moderate), and 3 (severe). An exception is that personal
                    care is rated on only a 4-point scale: 0 to 3.
                </CitationCard>
                <CitationCard citations={[bibtex.chaves2007validity]}>
                    The global CDR represents a 5-point ordinal scale, where CDR
                    0 indicates no dementia, and CDR 0.5, 1, 2, and 3 indicate
                    questionable, mild, moderate, and severe dementia. Thus
                    making it dichotomous
                </CitationCard>
            </span>
        </div>
    );
};

const Strenghts = () => {
    return (
        <div>
            <span>
                <CitationCard citations={[bibtex.chaves2007validity]}>
                    The CDR rates only impairment caused by cognitive loss
                    rather than by physical disability or other noncognitive
                    factors.
                </CitationCard>
                <CitationCard citations={[bibtex.mcculla1989reliability]}>
                    The CDR scale has been shown to be effectively and reliably
                    applied by nonmedical personnel to identify and stage
                    dementia.
                </CitationCard>
                <CitationCard citations={[bibtex.chaves2007validity]}>
                    The scale has been widely adapted for clinical research
                    around the world and as a criterion standard in multicenter
                    clinical trials in Alzheimer disease.9
                </CitationCard>
            </span>
        </div>
    );
};

const Performance = () => {
    return (
        <div>
            <span>
                <CitationCard citations={[bibtex.chaves2007validity]}>
                    Diagnostic Performance: CDR vs. Healthy Elderly:
                    Sensitivity: 86%. Specificity: 100%. BDRS Staging:
                    Sensitivity: 100%. Specificity: 97%-100% using DSM III-R
                    criteria as the standard. CDR Global Scores: Sensitivity:
                    79%-84%. Specificity: 98%-100% when compared to DSM III-R or
                    BDRS.
                </CitationCard>
            </span>
        </div>
    );
};

export const CDR = new MyNode(
    "CDR",
    [],
    (
        <NodeCard>
            <Link
                href={
                    "https://www.mdcalc.com/calc/10160/clinical-dementia-rating-cdr-scale"
                }
            >
                Clinical Dementia Rating: CDR
            </Link>

            <SectionTitle>Performance</SectionTitle>
            <Performance />
            <SectionTitle>Strenghts</SectionTitle>
            <Strenghts />
        </NodeCard>
    )
);

export const Wrapper = () => <>{CDR.content}</>;

export default CDR;
