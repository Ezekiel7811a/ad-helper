import CitationCard from "@/app/components/citation-card/citation-card";
import { MyNode } from "@/models/node";
import { MMSEReview } from "@/public/citations";

export const MMSE = new MyNode(
  "Mini Mental State Examination (MMSE)",
  [],
  (
    <div>
      The MMSE is subject to copyright restrictions, therefore will not be
      included in this resource.
      <CitationCard citations={[MMSEReview]}>
        MMSE is the best-known and the most oRen used short screening tool for
        providing an overall measure of cognitive impairment in clinical,
        research and community settings. sensitivities of 23% to 76% and
        specificities from 40% to 94%. n relationship to conversion from MCI to
        Alzheimer’s disease dementia, the accuracy of baseline MMSE scores
        ranged from sensitivities of 27% to 89% and specificities from 32% to
        90%. In conclusion it should not be used as a standalone diagnostic.
      </CitationCard>
      <CitationCard citations={[MMSEReview]}>
        a 30-question assessment of cognitive function that evaluates attention
        and orientation, memory, registration, recall, calculation, language and
        ability to draw a complex polygon ( Folstein 1975). Traditionally, a
        23/24 cut-off has been used to select patients with suspected cognitive
        impairment or dementia ( Tombaugh 1992 ). However, several studies have
        shown that sociocultural variables, age and education, among other
        factors, could affect individual scores (Bleecker 1988; Brayne 1990;
        Crum 1993); therefore local standards must be developed for each
        population and setting evaluated (Diniz 2007; Kulisevsky 2009; Shiroky
        2007; Trenkle 2007).
      </CitationCard>
      <CitationCard citations={[MMSEReview]}>
        Alternatives: Montreal Cognitive Assessment (MoCA) (Davis 2013) and the
        Mini-Cog test (Chan 2014, Fage 2013, Seitz 2014).
      </CitationCard>
    </div>
  )
);
