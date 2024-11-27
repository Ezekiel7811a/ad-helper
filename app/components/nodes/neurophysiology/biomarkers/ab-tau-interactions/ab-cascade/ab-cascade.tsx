import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card.tsx";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import bibtex from "@/public/citations/bibtex.json";
import SectionTitle from "@/app/components/section-title/section-title";

const InteractionsWithTau = () => {
    return (
        <div>
            <div>
                <CitationCard citations={[bibtex.maia2013changes]}>
                    Interestingly, several APP models exhibit some degree of
                    Aβ-induced tau hyperphosphorylation, especially in
                    dystrophic neurites near plaques, and increased tau CSF
                    levels, even in the absence of expression of a human tau
                    transgene.
                </CitationCard>
                <CitationCard citations={[bibtex.schelle2017prevention]}>
                    Additionally, β-secretase inhibition prevented the
                    age-related increase of tau in the CSF of APP mice.
                </CitationCard>
                <CitationCard citations={[bibtex.bennett2017enhanced]}>
                    Aβ is more complex, such that its presence enhances tau
                    phenotypes throughout the disease course
                </CitationCard>
                <CitationCard citations={[bibtex.busche2019tau]}>
                    and that the functional consequences of Aβ and tau occur in
                    late stages of the disease.
                </CitationCard>
                <CitationCard citations={[bibtex.pontecorvo2017relationships]}>
                    It is further supported by spread of tau pathology into
                    association cortices is nearly always associated with the
                    presence of widespread plaques,
                </CitationCard>
                <CitationCard citations={[bibtex.adams2019cortical]}>
                    Isuggesting either that plaques precede tangles in the
                    cortex by chance or that plaques act synergistically on
                    tangles, leading to a situation in which tangle spread to
                    the cortex is more likely and A recent study combining
                    resting-state functional MRI (fMRI) and tau–Aβ-PET in
                    cognitively normal individuals reported that the likelihood
                    of tau spread outside of the EC was augmented by the
                    presence of cortical Aβ.
                </CitationCard>
                <CitationCard citations={[bibtex.jacobs2018structural]}>
                    Aβ accumulation facilitates tau spread into the posterior
                    cingulate cortex (PCC) through the cingulum bundle, a major
                    white matter tract that connects the HC with the cingulate
                    gyrus,
                </CitationCard>
                <CitationCard
                    citations={[bibtex.hanseeuw2017fluorodeoxyglucose]}
                >
                    the combination of cortical Aβ and tau (but not Aβ or tau
                    individually) is associated with hypometabolism of the PCC,
                    which in turn predicts memory decline.
                </CitationCard>
                <CitationCard citations={[bibtex.pascoal2017amyloid]}>
                    Similarly, the Aβ–tau interaction, but not their independent
                    effects, was reported to drive cortical hypometabolism.
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.takeda2015neuronal]}>
                    the presence of Aβ accelerates the formation of a rare
                    soluble species of high-molecular weight (HMW)
                    hyperphosphorylated tau, which in experimental studies
                    appears to be a competent substrate for the intercellular
                    spread.
                </CitationCard>
                <CitationCard citations={[bibtex.ferrari2003beta]}>
                    In cell culture, the addition of Aβ to human cells
                    expressing (wild-type) tau resulted, after a 5-day period,
                    in tau aggregate formation in the form of PHF.
                </CitationCard>
                <CitationCard citations={[bibtex.busche2020synergy]}>
                    Further supported by animal models. With evidences of
                    modulation of Aß by tau through microglia activation.
                </CitationCard>
                <CitationCard citations={[bibtex.ondrejcak2019soluble]}>
                    synergistic effects on LTP, as subthreshold doses of soluble
                    tau dramatically enhanced Aβ-dependent inhibition of LTP.
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.busche2020synergy]}>
                    Move away from linear frameworks (e.g., single targets or
                    &apos;silver bullets&apos;).
                </CitationCard>
            </div>
        </div>
    );
};

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
                <CitationCard
                    citations={[
                        bibtex.koffie2009oligomeric,
                        bibtex.bjorklund2012absence,
                        bibtex.perez2013dissecting,
                        bibtex.bilousova2016synaptic,
                    ]}
                >
                    and are found in association with synapses in the brains of
                    patients presenting clinical signals of dementia, adding
                    clinical relevance to their role in AD.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.terry1991physical,
                        bibtex.masliah1992three,
                        bibtex.selkoe2002alzheimer,
                    ]}
                >
                    These studies suggest that synapse-associated AβOs promote
                    detrimental modifications in synapse structure and
                    composition, thereby leading to memory loss. This growing
                    body of evidence props up an early notion that cognitive
                    decline is not only a result of the extracellular
                    accumulation of Aβ and intracellular accumulation of tau but
                    also as a consequence of synapse failure and loss in AD.
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.ferreira2015soluble]}>
                    Despite intense research, the exact mechanisms of how AβOs
                    exert their toxicity remains to be fully unveiled. Binding
                    of Aβ aggregates to various receptors may disrupt key
                    neuronal functions. However, the complete identity of
                    receptors to which they bind and the underlying signaling
                    pathways still remain to be fully elucidated.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.mattson2010er,
                        bibtex.ferreira2015soluble,
                    ]}
                >
                    We now know that AβOs bind to cell surface receptors and
                    trigger multiple aberrant signaling pathways, including
                    calcium signaling,
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.smith1998amyloid,
                        bibtex.perry2002alzheimer,
                        bibtex.de2007abeta,
                    ]}
                >
                    oxidative stress,
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.roselli2005soluble,
                        bibtex.shankar2007natural,
                        bibtex.decker2010n,
                        bibtex.ferreira2015soluble,
                    ]}
                >
                    derangements in plasticity-related receptors and increased
                    glutamate release from pre-synaptic terminals.
                </CitationCard>
                <CitationCard
                    citations={[bibtex.de2008alzheimer, bibtex.jin2011soluble]}
                >
                    In addition, they promote tau hyperphosphorylation,
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.snyder2005regulation,
                        bibtex.decker2010amyloid,
                        bibtex.minano2011soluble,
                        bibtex.bomfim2012anti,
                    ]}
                >
                    impaired axonal transport,
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.rowan2005synaptic,
                        bibtex.shankar2008amyloid,
                        bibtex.ferreira2011abeta,
                        bibtex.yang2017large,
                    ]}
                >
                    and drive inhibition of LTP and memory impairment.
                </CitationCard>
                <CitationCard
                    citations={[bibtex.de2008alzheimer, bibtex.jin2011soluble]}
                >
                    In addition, AßOs promote tau hyperphosphorylation
                </CitationCard>
            </div>
            <div>
                <CitationCard
                    citations={[
                        bibtex.gotz2001formation,
                        bibtex.chabrier2012soluble,
                    ]}
                >
                    supported by mouse models where soluble Aβ promotes
                    development of tau pathology.
                </CitationCard>
            </div>
            <SectionTitle>Interactions with Tau</SectionTitle>
            <InteractionsWithTau />
        </NodeCard>
    )
);

export const Wrapper = () => <>{AbCascade.content}</>;

export default AbCascade;
