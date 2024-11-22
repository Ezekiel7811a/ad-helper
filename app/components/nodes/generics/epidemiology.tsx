import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card.tsx";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import bibtex from "@/public/citations/bibtex.json";
import SectionTitle from "../../section-title/section-title";

const Introduction = () => {
    return (
        <div>
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
                <CitationCard citations={[bibtex.nichols2021estimation]}>
                    and affects more than 57 million people worldwide (2021).
                </CitationCard>
                <CitationCard citations={[bibtex.nichols2022estimation]}>
                    The prevalence of demencia is expected to triple by 2050.
                </CitationCard>
                <CitationCard citations={[bibtex.catala2022estimation]}>
                    as the largest increase would be observed in North Africa
                    and the Middle East and eastern sub-Saharan Africa with a
                    &gt;3.5-fold increase.
                </CitationCard>
                <CitationCard citations={[bibtex.knopman2020enigma]}>
                    There is evidence of decreasing prevalence in certain
                    regions, which is not yet understood.
                </CitationCard>
                <CitationCard citations={[bibtex.lanctot2024burden]}>
                    Estimated 5-year mortality in AD is 35%
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.alzheimer20172017]}>
                    two-thirds of the patients living with AD are women.
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
                <CitationCard citations={[bibtex.plassman2008prevalence]}>
                    The prevalence of cognitive impairment without dementia as
                    22% in people aged 71 years or older.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.arevalo2015mini,
                        bibtex.davis2018estimating,
                    ]}
                >
                    10% to 21% of individuals with MCI may progress to dementia,
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.lyketsos2002depression]}>
                    related signs and symptoms: Depression and/or apathy have
                    been reported as frequent comorbidities in AD patients
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.qiu2009epidemiology,
                        bibtex.pyenson2019real,
                    ]}
                >
                    AD causes worsened quality of life, adding to health,
                    social, and economic burden for individuals, family, and the
                    healthcare system.
                </CitationCard>
            </div>
        </div>
    );
};

const Monetary = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.prince2016world]}>
                The total cost of dementia was estimated around $818 billion in
                2010 and has been projected to hit $1 trillion by 2018
                worldwide.
            </CitationCard>
            <CitationCard citations={[bibtex.frozza2018challenges]}>
                This becomes even more dramatic because nearly 60% of people
                affected by dementia live in low- and middle-income countries.
            </CitationCard>
        </div>
    );
};

const Causes = () => {
    return (
        <div>
            <div>
                <CitationCard citations={[bibtex.bateman2011autosomal]}>
                    genetic mutations cause a rare (&lt;0.5%) familial form of
                    AD, whose symptoms develop earlier, typically between 30 and
                    50 years of age.
                </CitationCard>
            </div>
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
        </div>
    );
};

const Comorbidities = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.lanctot2024burden]}>
                hypertension: 30.2–73.9%; diabetes: 6.0–24.3%; stroke: 2.7–13.7%
            </CitationCard>
        </div>
    );
};

export const Epidemiology = new MyNode(
    "Epidemiology",
    [],
    (
        <NodeCard>
            <SectionTitle>Introduction</SectionTitle>
            <Introduction />
            <SectionTitle>Monetary</SectionTitle>
            <Monetary />
            <SectionTitle>Causes</SectionTitle>
            <Causes />
        </NodeCard>
    )
);

export const Wrapper = () => <>{Epidemiology.content}</>;

export default Epidemiology;
