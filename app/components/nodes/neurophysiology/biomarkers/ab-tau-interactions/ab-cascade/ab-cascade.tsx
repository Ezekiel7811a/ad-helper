import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card.tsx";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import bibtex from "@/public/citations/bibtex.json";

export const AbCascade = new MyNode(
    "AbCascade",
    [],
    (
        <NodeCard>
            <div>
                <CitationCard
                    citations={[
                        bibtex.karran2011amyloid,
                        bibtex.selkoe2016amyloid,
                    ]}
                >
                    The amyloid cascade hypothesis suggests that brain
                    accumulation of the Aβ peptide, produced by sequential
                    cleavage of the APP by the β- and γ-secretase enzymes, is a
                    central event in AD.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.stine2003vitro,
                        bibtex.blennow2006alzheimer,
                        bibtex.finder2007amyloid,
                        bibtex.lee2007role,
                    ]}
                >
                    Soluble Aβ undergoes conformational changes to high β-sheet
                    content, rendering it prone to aggregation into polymeric
                    forms, including soluble oligomers and larger insoluble
                    fibrils. These fibrils ultimately deposit into extracellular
                    amyloid plaques in the AD brains.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.qiu1998insulin,
                        bibtex.iwata2001metabolic,
                        bibtex.farris2003insulin,
                        bibtex.leissring2003enhanced,
                    ]}
                >
                    Aβ is physiologically degraded by the peptidases
                    insulindegrading enzyme, neprilysin, and by
                    endothelin-converting enzyme.
                </CitationCard>
                <CitationCard citations={[bibtex.tarasoff2015clearance]}>
                    In addition, Aβ can be cleared out by transportation to
                    peripheral circulation across multiple pathways, including
                    the blood-brain barrier, interstitial fluid bulk flow,
                    arachnoid villi, and glymphatic-lymphatic pathways.
                </CitationCard>
                <CitationCard citations={[bibtex.hardy2002amyloid]}>
                    Additionally, Aβ aggregates can be phagocited and degraded
                    by microglia, perivascular macrophages, and astrocytes.
                    Defective clearing systems could thus lead to an imbalance
                    between production and clearance of Aβ in the brain, thereby
                    resulting in subsequent neuronal dysfunction and
                    neurodegeneration.
                </CitationCard>
            </div>
            <div>
                <CitationCard
                    citations={[
                        bibtex.walsh2007abeta,
                        bibtex.selkoe2008soluble,
                        bibtex.ferreira2011abeta,
                        bibtex.ferreira2015soluble,
                        bibtex.yang2017large,
                    ]}
                >
                    A growing body of evidence indicates, however, that plaque
                    deposition is not the sole responsible for the impairments
                    observed in AD. On the other hand, the notion that AβOs are
                    the main toxins responsible for synapse dysfunction and
                    cognitive deficits in AD has attracted considerable
                    attention to improve our understanding of the mechanisms of
                    the disease.
                </CitationCard>
                <CitationCard citations={[bibtex.selkoe2016amyloid]}>
                    In this context, plaques have been thought to comprise a
                    reservoir from which AβOs diffuse, or may even act
                    sequestering soluble oligomers until they reach a
                    physiological plateau.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.georganopoulou2005nanoparticle,
                        bibtex.haes2005detection,
                        bibtex.anker2009detection,
                        bibtex.xia2009specific,
                        bibtex.herskovits2013luminex,
                        bibtex.viola2015towards,
                        bibtex.murakami2016monoclonal,
                    ]}
                >
                    A considerable number of studies has reported that AβOs
                    accumulate in the brain and CSF of AD patients,
                </CitationCard>
                <CitationCard citations={[]}>
                    and are found in association with synapses in the brains of
                    patients presenting clinical signals of dementia (Koffie et
                    al., 2009; Bjorklund et al., 2012; Perez-Nievas et al.,
                    2013; Bilousova et al., 2016), adding clinical relevance to
                    their role in AD.
                </CitationCard>
                <CitationCard citations={[]}>
                    These studies suggest that synapse-associated AβOs promote
                    detrimental modifications in synapse structure and
                    composition, thereby leading to memory loss. This growing
                    body of evidence props up an early notion that cognitive
                    decline is not only a result of the extracellular
                    accumulation of Aβ and intracellular accumulation of tau but
                    also as a consequence of synapse failure and loss in AD
                    (Terry et al., 1991; Masliah et al., 1992; Selkoe, 2002).
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[]}>
                    Despite intense research, the exact mechanisms of how AβOs
                    exert their toxicity remains to be fully unveiled. Binding
                    of Aβ aggregates to various receptors may disrupt key
                    neuronal functions. However, the complete identity of
                    receptors to which they bind and the underlying signaling
                    pathways still remain to be fully elucidated (Ferreira et
                    al., 2015).
                </CitationCard>
                <CitationCard citations={[]}>
                    We now know that AβOs bind to cell surface receptors and
                    trigger multiple aberrant signaling pathways, including
                    calcium signaling (Mattson, 2010; Ferreira et al., 2015),
                </CitationCard>
                <CitationCard citations={[]}>
                    oxidative stress (Smith et al., 1998; Perry et al., 2002; De
                    Felice et al., 2007),
                </CitationCard>
                <CitationCard citations={[]}>
                    derangements in plasticity-related receptors and increased
                    glutamate release from pre-synaptic terminals (Roselli et
                    al., 2005; Shankar et al., 2007; Decker et al., 2010a;
                    Ferreira et al., 2015).
                </CitationCard>
                <CitationCard citations={[]}>
                    In addition, they promote tau hyperphosphorylation (De
                    Felice et al., 2008; Jin et al., 2011),
                </CitationCard>
                <CitationCard citations={[]}>
                    impaired axonal transport (Snyder et al., 2005; Decker et
                    al., 2010b; Miñano-Molina et al., 2011; Bomfim et al.,
                    2012),
                </CitationCard>
                <CitationCard citations={[]}>
                    and drive inhibition of long-term potentiation (LTP) and
                    memory impairment (Rowan et al., 2005; Shankar et al., 2008;
                    Ferreira and Klein, 2011; Ferreira et al., 2015; Yang et
                    al., 2017).
                </CitationCard>
                <CitationCard citations={[bibtex.frozza2018challenges]}>
                    In addition, AßOs promote tau hyperphosphorylation (De
                    Felice et al., 2008; Jin et al., 2011)
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                    supported by mouse models where soluble Aβ promotes
                    development of tau pathology [75, 76].
                </CitationCard>
            </div>
        </NodeCard>
    )
);

export const Wrapper = () => <>{AbCascade.content}</>;

export default AbCascade;
