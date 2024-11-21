import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card.tsx";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import bibtex from "@/public/citations/bibtex.json";

export const Epidemiology = new MyNode(
    "Epidemiology",
    [],
    (
        <NodeCard>
            <div>
                <CitationCard citations={[bibtex.mielke2022comparison]}>
                    [T1 biomarkers according to the AA framework: hazard ratio =
                    1.08-1.31],
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.mielke2022comparison,
                        bibtex.hanseeuw2019association,
                    ]}
                >
                    and unstratified tau-PET posi- tivity [35% of progression
                    after 7 years of follow-up].
                </CitationCard>
            </div>
            <div>
                <CitationCard
                    citations={[
                        bibtex.prince2016world,
                        bibtex.blennow2006alzheimer,
                        bibtex.brunnstrom2009cause,
                        bibtex.ol1994canadian,
                    ]}
                >
                    AD is the most frequent cause of dementia, accounting for
                    60–80% of all cases.
                </CitationCard>
                <CitationCard citations={[bibtex.prince2013global]}>
                    Roughly doubling in prevalence every 5 years after age 65,
                </CitationCard>
                <CitationCard citations={[bibtex.prince2013global]}>
                    and affects some 47 million people worldwide.
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.prince2016world]}>
                    The total cost of dementia was estimated around $818 billion
                    in 2010 and has been projected to hit $1 trillion by 2018
                    worldwide.
                </CitationCard>
                <CitationCard citations={[bibtex.frozza2018challenges]}>
                    This becomes even more dramatic because nearly 60% of people
                    affected by dementia live in low- and middle-income
                    countries.
                </CitationCard>
            </div>
            <CitationCard citations={[bibtex.bateman2011autosomal]}>
                genetic mutations cause a rare (&lt;0.5%) familial form of AD,
                whose symptoms develop earlier, typically between 30 and 50
                years of age.
            </CitationCard>
            <CitationCard citations={[bibtex.alzheimer20172017]}>
                two-thirds of the patients living with AD are women.
            </CitationCard>
            <div>
                <CitationCard
                    citations={[
                        bibtex.ott1996association,
                        bibtex.ott1999diabetes,
                        bibtex.steen2005impaired,
                        bibtex.matsuzaki2010insulin,
                        bibtex.takeda2010diabetes,
                        bibtex.crane2013glucose,
                        bibtex.de2013alzheimer,
                        bibtex.de2015brain,
                        bibtex.chatterjee2016type,
                    ]}
                >
                    mounting epidemiological studies have supported a link
                    between metabolic disorders and AD.
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.lyketsos2002depression]}>
                    related signs and symptoms: Depression and/or apathy have
                    been reported as frequent comorbidities in AD patients
                </CitationCard>
                <CitationCard
                    citations={[bibtex.ledo2013amyloid, bibtex.ledo2016cross]}
                >
                    AβOs induce both depressive-like behavior and memory
                    deficits in mice and associate with decreased brain
                    serotonin levels.
                </CitationCard>
                <CitationCard citations={[bibtex.gulaj2010kynurenine]}>
                    Reduced serotonin levels may be linked to increased levels
                    and activity of indolamine2,3-dioxygenase (IDO) follow
                    microglial activation. Interestingly, AD patients were found
                    to have reduced levels of plasma tryptophan and increased
                    quinolinic acid,
                </CitationCard>
                <CitationCard citations={[bibtex.frozza2018challenges]}>
                    as well as increased IDO immunoreactivity in microglia
                    (Bonda et al., 2010).
                </CitationCard>
            </div>
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
