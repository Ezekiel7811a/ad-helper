import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Figure from "@/app/components/figure/figure.tsx";
import Hypothesis from "@/app/components/hypothesis/hypothesis.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";
import NodeCard from "../../node-card/node-card";
import SectionTitle from "../../section-title/section-title";

const Introduction = () => {
    return (
        <div>
            <span>
                <div>
                    Due to the complex interactions between different proteins
                    and the lack of understanding of the pathophysiology, it is
                    currently impossible to reach a consensus on the
                    classification criteria for Alzheimer’s disease. For this
                    reason, two major groups have proposed working frameworks
                    that offer classifications subject to evolution: NIAA-AA and
                    IWG.
                </div>
                <CitationCard citations={[bibtex.jack2018nia]}>
                    <Figure
                        src="images/classification/classification.png"
                        alt="Classification problem"
                        caption="Interaction of ATN features"
                        n={1}
                    />
                </CitationCard>
            </span>
        </div>
    );
};

const Features = () => {
    return (
        <div>
            <span>
                <CitationCard citations={[bibtex.dubois2004amnestic]}>
                    The first was a core clinical phenotypic criterion that
                    required evidence of a specific episodic memory profile
                    characterised by a low free recall that is not normalised by
                    cueing.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.lavenu1998explicit,
                        bibtex.pillon1994explicit,
                        bibtex.fossati2004verbal,
                        bibtex.petersen1992memory,
                    ]}
                >
                    This memory profile differs from that observed in patients
                    with non-AD disorders,
                </CitationCard>
                <CitationCard citations={[bibtex.sarazin2010amnestic]}>
                    correlate significantly with hippocampal volume and, more
                    precisely, with the CA1 field in three-dimensional
                    hippocampal surface-based shape analysis.
                </CitationCard>
            </span>
        </div>
    );
};

const AtypicalAD = () => {
    return (
        <div>
            <span>
                <CitationCard citations={[bibtex.dubois2014advancing]}>
                    Atypical forms of AD, which described the less frequent but
                    well defined clinical phenotypic variants of non-amnestic
                    focal cortical syndromes, including logopenic aphasia,
                    posterior cortical atrophy, and frontal variant AD.
                </CitationCard>
            </span>
        </div>
    );
};

const DifferencesNiaaaIwg = () => {
    return (
        <div>
            <span>
                <CitationCard citations={[bibtex.jack2011introduction]}>
                    The NIA–AA diagnostic criteria, published in 2011,
                </CitationCard>
                <CitationCard citations={[bibtex.sperling2011toward]}>
                    similarly advanced the NINCDS–ADRDA framework to cover the
                    full staging of the disease: asymptomatic (preclinical AD),
                </CitationCard>
                <CitationCard citations={[bibtex.albert2013diagnosis]}>
                    predementia (MCI due to AD),
                </CitationCard>
                <CitationCard citations={[bibtex.mckhann2011diagnosis]}>
                    and dementia (due to AD).
                </CitationCard>
                <CitationCard citations={[bibtex.dubois2014advancing]}>
                    These criteria shared many features with the IWG criteria,
                    including the integration of biomarkers in the diagnostic
                    process and the recognition of an asymptomatic
                    biomarker-positive stage. The NIA–AA criteria differ
                    conceptually from the IWG criteria on several points. The
                    NIA–AA proposed three different sets of diagnostic criteria,
                    one for each disease stage.
                </CitationCard>
                <CitationCard citations={[bibtex.sperling2011toward]}>
                    Although both the IWG and NIA–AA criteria recognise that the
                    disease starts before the occurrence of clinical symptoms,
                    the NIA–AA criteria support the diagnosis of AD in
                    asymptomatic individuals with biomarker evidence of Aβ
                    accumulation.
                </CitationCard>
                <CitationCard citations={[bibtex.dubois2014advancing]}>
                    The IWG considers this to be only an at risk of disease
                    state.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.prestia2013prediction,
                        bibtex.bouwman2010new,
                        bibtex.de2010retrospective,
                        bibtex.galluzzi2010new,
                        bibtex.rami2012applying,
                    ]}
                >
                    studies made with patients referred to memory clinics
                    indicate moderate sensitivity and high specificity for the
                    IWG criteria, with a good diagnostic accuracy (from 93% to
                    100% compared with the NINCDS–ADRDA clinical criteria).
                </CitationCard>
                <CitationCard citations={[bibtex.dubois2014advancing]}>
                    The most challenging questions for both the IWG and NIA–AA
                    frameworks focus on the multitude of proposed biomarkers,
                    their inter-relationships particularly with regard to
                    producing additive value, and their putative weight in the
                    diagnosis
                </CitationCard>
                <CitationCard citations={[bibtex.knopman2018national]}>
                    Comparision NIA-AA with IWG: The International Working Group
                    (IWG) also incorporates biomarkers in AD diagnosis but
                    requires cognitive symptoms alongside biomarkers for
                    diagnosis (except for genetic AD). Unlike NIA-AA’s purely
                    biological model, IWG initially required clinical symptoms
                    to define AD. However, IWG’s 2016 update included
                    asymptomatic individuals with both abnormal Aβ and tau
                    biomarkers in the AD category, aligning more closely with
                    NIA-AA’s biologic definition.
                </CitationCard>
            </span>
        </div>
    );
};

const Limitations = () => {
    return (
        <div>
            <span>
                <CitationCard citations={[bibtex.fagan2011comparison]}>
                    The lack of agreement on cutoff thresholds.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.carrillo2013research,
                        bibtex.hort2010use,
                        bibtex.mattsson2011alzheimer,
                    ]}
                >
                    These variations have made direct comparison of study
                    results difficult. Several programmes of standardisation,
                    including the Alzheimer’s Association Quality Control
                    programme for CSF biomarkers, initiatives within the Joint
                    Program for Neurodegenerative Diseases, and the Global
                    Biomarker Standardisation Consortium.
                </CitationCard>
                <CitationCard citations={[bibtex.knopman2018national]}>
                    Alzheimer’s clinical syndrome rather than probable AD when
                    describing syndromes without biomarker evidence
                </CitationCard>
            </span>
        </div>
    );
};

const BiomarkersRoles = () => {
    return (
        <div>
            <span>
                <CitationCard
                    citations={[
                        bibtex.mormino2014synergistic,
                        bibtex.jack2017age,
                        bibtex.jack2017defining,
                        bibtex.jagust2009relationships,
                        bibtex.landau2013comparing,
                        bibtex.leuzy2016pittsburgh,
                        bibtex.palmqvist2014accuracy,
                        bibtex.zwan2014concordance,
                    ]}
                >
                    Biomarkers of AD: CSF biomarkers are valid proxies for
                    neuropathologic changes of AD. Imaging-to-autopsy comparison
                    studies have established that amyloid positron emission
                    tomography (PET) is a valid in vivo surrogate for Ab
                    deposits (in brain parenchyma/vessel walls).
                </CitationCard>
                <CitationCard citations={[bibtex.ossenkoppele2012longitudinal]}>
                    Itis also now widely accepted that CSF Aß42 (or the Ab42/
                    Aß40 ratio) is a valid indicator of the abnormal pathologic
                    state associated with cerebral Aß.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.clark2012cerebral,
                        bibtex.ikonomovic2016post,
                        bibtex.murray2015clinicopathologic,
                    ]}
                >
                    An additional development has been the introduction of PET
                    ligands for pathologic tau.
                </CitationCard>
                <CitationCard citations={[bibtex.chhatwal2016temporal]}>
                    MRI, FDG-PET, and CSF total tau (T-tau)—are not specific for
                    AD but rather are nonspecific indicators of damage that may
                    derive from a variety of etiologies, for example,
                    cerebrovascular injury.
                </CitationCard>
            </span>
        </div>
    );
};

const Hypotheses = () => {
    return (
        <div>
            <span>
                <CitationCard citations={[bibtex.jack2018nia]}>
                    <Hypothesis>
                        <Figure
                            src="images/causality/causal_hypothesis.png"
                            alt="Hypothesis"
                            caption="The possible causalities of the biomarkers"
                            n={2}
                        />
                    </Hypothesis>
                </CitationCard>
            </span>
        </div>
    );
};

const Classifications = new MyNode(
    "Classifications",
    [],
    (
        <NodeCard>
            <SectionTitle>Introduction</SectionTitle>
            <Introduction />
            <SectionTitle>Differences between NIAA-AA and IWG</SectionTitle>
            <DifferencesNiaaaIwg />
            <SectionTitle>Specific features of AD</SectionTitle>
            <Features />
            <SectionTitle>Atypical AD</SectionTitle>
            <AtypicalAD />
            <SectionTitle>Biomarkers Roles</SectionTitle>
            <BiomarkersRoles />
            <SectionTitle>Limitations</SectionTitle>
            <Limitations />
            <SectionTitle>Hypotheses</SectionTitle>
            <Hypotheses />
        </NodeCard>
    )
);

export const Wrapper = () => <>{Classifications.content}</>;

export default Classifications;
