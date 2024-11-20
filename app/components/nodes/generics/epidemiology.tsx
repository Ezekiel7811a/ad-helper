import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card.tsx";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import bibtex from "@/public/citations/bibtex.json";

export const Epidemiology = new MyNode(
    "Epidemiology",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.dubois2024alzheimer]}>
                [T1 biomarkers according to the AA framework: hazard ratio =
                1.08-1.31],25 and unstratified tau-PET posi- tivity [35% of
                progression after 7 years of follow-up]. 25,26
            </CitationCard>
            <CitationCard citations={[bibtex.frozza2018challenges]}>
                AD is the most frequent cause of dementia, accounting for 60–80%
                of all cases (Prince et al., 2016). roughly doubling in
                prevalence every 5 years after age 65 (Prince et al., 2013), and
                affects some 47 million people worldwide (Prince et al., 2013).
            </CitationCard>
            <CitationCard citations={[bibtex.frozza2018challenges]}>
                The total cost of dementia was estimated around $818 billion in
                2010 and has been projected to hit $1 trillion by 2018 worldwide
                (Prince et al., 2016). This becomes even more dramatic because
                nearly 60% of people affected by dementia live in low- and
                middle-income countries.
            </CitationCard>
            <CitationCard citations={[bibtex.frozza2018challenges]}>
                genetic mutations cause a rare (&lt;0.5%) familial form of AD,
                whose symptoms develop earlier, typically between 30 and 50
                years of age (Bateman et al., 2010).
            </CitationCard>
            <CitationCard citations={[bibtex.frozza2018challenges]}>
                two-thirds of the patients living with AD are women (Alzheimer’s
                Association, 2017)
            </CitationCard>
            <CitationCard citations={[bibtex.frozza2018challenges]}>
                mounting epidemiological studies have supported a link between
                metabolic disorders and AD (Ott et al., 1996, 1999; Steen et
                al., 2005; Matsuzaki et al., 2010; Takeda et al., 2010; Crane et
                al., 2013; De Felice, 2013; De Felice and Lourenco, 2015;
                Chatterjee et al., 2016).
            </CitationCard>
            <CitationCard citations={[bibtex.frozza2018challenges]}>
                related signs and symptoms: Depression and/or apathy have been
                reported as frequent comorbidities in AD patients (Lyketsos and
                Olin, 2002) AβOs induce both depressive-like behavior and memory
                deficits in mice and associate with decreased brain serotonin
                levels (Ledo et al., 2013, 2016). Reduced serotonin levels may
                be linked to increased levels and activity of
                indolamine2,3-dioxygenase (IDO) follow microglial activation.
                Interestingly, AD patients were found to have reduced levels of
                plasma tryptophan and increased quinolinic acid (Gulaj et al.,
                2010), as well as increased IDO immunoreactivity in microglia
                (Bonda et al., 2010).
            </CitationCard>
            <CitationCard citations={[bibtex.plassman2008prevalence]}>
                The prevalence of cognitive impairment without dementia as 22%
                in people aged 71 years or older.
            </CitationCard>
            <CitationCard citations={[bibtex.arevalo2015mini]}>
                10% to 15% of individuals with MCI may progress to dementia,
            </CitationCard>
            <CitationCard citations={[bibtex.bateman2011autosomal]}>
                Genetic mutations cause a rare (&lt;0.5%) familial form of AD,
                whose symptoms develop earlier, typically between 30 and 50
                years of age.
            </CitationCard>
            <div>
                <CitationCard citations={[bibtex.alzheimer20172017]}>
                    two-thirds of the patients living with AD are women,
                </CitationCard>
                <CitationCard citations={[bibtex.frozza2018challenges]}>
                    raising the intriguing suggestion that there are biological
                    mechanisms underlying the higher incidence of AD cases in
                    women that still demand to be investigated.
                </CitationCard>
                <CitationCard citations={[bibtex.vina2010women]}>
                    However, late-onset AD risk is greater in women even after
                    controlling for their longer lifespan relative to men.
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.tariot2024relationships]}>
                    AD causes worsened quality of life, adding to health,
                    social, and economic burden for individuals, family, and the
                    healthcare system [4, 5].
                </CitationCard>
            </div>
        </NodeCard>
    )
);

export const Wrapper = () => <>{Epidemiology.content}</>;

export default Epidemiology;
