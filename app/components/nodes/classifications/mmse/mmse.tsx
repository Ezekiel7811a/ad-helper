import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const MMSE = new MyNode(
    "Mini Mental State Examination (MMSE)",
    [],
    (
        <div>
            The MMSE is subject to copyright restrictions, therefore will not be
            included in this resource.
            <CitationCard citations={[bibtex.arevalo2015mini]}>
                MMSE is the best-known and the most oRen used short screening
                tool for providing an overall measure of cognitive impairment in
                clinical, research and community settings. sensitivities of 23%
                to 76% and specificities from 40% to 94%. n relationship to
                conversion from MCI to Alzheimer’s disease dementia, the
                accuracy of baseline MMSE scores ranged from sensitivities of
                27% to 89% and specificities from 32% to 90%. In conclusion it
                should not be used as a standalone diagnostic.
            </CitationCard>
            <span>
                <CitationCard citations={[bibtex.folstein1975mini]}>
                    a 30-question assessment of cognitive function that
                    evaluates attention and orientation, memory, registration,
                    recall, calculation, language and ability to draw a complex
                    polygon.
                </CitationCard>
                <CitationCard citations={[bibtex.tombaugh1992mini]}>
                    Traditionally, a 23/24 cut-off has been used to select
                    patients with suspected cognitive impairment or dementia.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.bleecker1988age,
                        bibtex.brayne1990association,
                        bibtex.crum1993population,
                    ]}
                >
                    However, several studies have shown that sociocultural
                    variables, age and education, among other factors, could
                    affect individual scores
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.diniz2007mini,
                        bibtex.kulisevsky2009cognitive,
                        bibtex.shiroky2007can,
                        bibtex.trenkle2007detecting,
                    ]}
                >
                    therefore local standards must be developed for each
                    population and setting evaluated.
                </CitationCard>
                <CitationCard citations={[bibtex.davis2013neuropsychological]}>
                    Alternatives: Montreal Cognitive Assessment (MoCA)
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.chan2019mini,
                        bibtex.fage2015mini,
                        bibtex.seitz2014mini,
                    ]}
                >
                    and the Mini-Cog test.
                </CitationCard>
            </span>
        </div>
    )
);

export const Wrapper = () => <>{MMSE.content}</>;

export default MMSE;
