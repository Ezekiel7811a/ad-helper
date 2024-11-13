import { Citation } from "@/models/citation";
import bibtex from "@/public/citations/bibtex.json";
import {
  DSKnopman,
  HyperactivationAuthors2,
  HyperactivationA3,
  HyperactivationA4,
  PMCanada,
  SynergyABTauA,
  LinksADOscillatorySlowingA,
  EIIncreasedParietalA,
  SynergyABTauCorticalAndMCA,
  XModelA,
  ABViciousCycleA,
  PowEnvCorrReviewA,
  ParamsPSDA,
  NeuroChemsOrganizationAdA,
  DirectionalInformationADA,
  ATNA,
  NIAAAA,
  BraakA,
  MMSEReviewA,
  InferringEIFromFieldPotentialsA,
  EITranslationalPerspectiveA,
  ABInducedHyperAndTauA,
  ADBiologicalConstructA,
  PetTauGeneticFrontoTemporalA,
  VisualInterpretationPetTauA,
  AlteredEISubPopsA,
  ChallengesInADA,
} from "./authors";

export const adReview: Citation = {
  title: "Alzheimer's disease",
  authorsList: [DSKnopman],
  publicationDate: new Date("2021-05-13"),
};
export const CombiningBrainSimAndMeg: Citation = {
  title:
    "Combining aperiodic 1/f slopes and brain simulation: An EEG/MEG proxy marker of excitation/inhibition imbalance in Alzheimer's disease",
  authorsList: [PMCanada],
  publicationDate: new Date("2023-09-01"),
};
export const ABViciousCycle: Citation = {
  title: "A vicious cycle of β amyloid-dependent neuronal hyperactivation ",
  authorsList: ABViciousCycleA,
  publicationDate: new Date("2019-08-09"),
};
export const hyperexcitability2: Citation = {
  title:
    "Rescue of long-range circuit dysfunction in Alzheimer's disease models",
  authorsList: HyperactivationAuthors2,
  publicationDate: new Date("2015-10-12"),
};
export const hyperexcitability3: Citation = {
  title:
    "Inhibitory Interneuron Deficit Links Altered Network Activity and Cognitive Dysfunction in Alzheimer Model",
  authorsList: HyperactivationA3,
  publicationDate: new Date("2012-04-27"),
};
export const hyperexcitability4: Citation = {
  title:
    "Clusters of Hyperactive Neurons Near Amyloid Plaques in a Mouse Model of Alzheimer's Disease",
  authorsList: HyperactivationA4,
  publicationDate: new Date("2008-09-19"),
};
export const synergyABTauInAD: Citation = {
  title: "Synergy between amyloid-β and tau in Alzheimer’s disease",
  authorsList: SynergyABTauA,
  publicationDate: new Date("2020-08-10"),
};
export const LinksADOscillatorySlowing: Citation = {
  title:
    "A multiscale brain network model links Alzheimer’s disease-mediated neuronal hyperactivity to large-scale oscillatory slowing",
  authorsList: LinksADOscillatorySlowingA,
  publicationDate: new Date("2022-07-01"),
};
export const EIIncreasedParietal: Citation = {
  title:
    "Increased excitatory to inhibitory synaptic ratio in parietal cortex samples from individuals with Alzheimer’s disease",
  authorsList: EIIncreasedParietalA,
  publicationDate: new Date("2021-05-10"),
};
export const SynergyABTauCorticalAndMC: Citation = {
  title:
    "Synergistic association of Aβ and tau pathology with cortical neurophysiology and cognitive decline in asymptomatic older adults",
  authorsList: SynergyABTauCorticalAndMCA,
  publicationDate: new Date("2024-08-13"),
};
export const XModel: Citation = {
  title: "Hypersynchronization in mild cognitive impairment: the ‘X’ model",
  authorsList: XModelA,
  publicationDate: new Date("2019-12-01"),
};
export const PowEnvCorrReview: Citation = {
  title:
    "Measuring electrophysiological connectivity by power envelope correlation: a technical review on MEG methods",
  authorsList: PowEnvCorrReviewA,
  publicationDate: new Date("2015-11-07"),
};
export const ParamsPSD: Citation = {
  title:
    "Parameterizing neural power spectra into periodic and aperiodic components",
  authorsList: ParamsPSDA,
  publicationDate: new Date("2020-12-01"),
};
export const NeuroChemsOrganizationAd: Citation = {
  title:
    "Neurochemical organization of cortical proteinopathy and neurophysiology along the Alzheimer’s disease continuum ",
  authorsList: NeuroChemsOrganizationAdA,
  publicationDate: new Date("2024-09-01"),
};
export const DirectionalInformationAD: Citation = {
  title:
    "Directional information flow in patients with Alzheimer's disease. A sourcespace resting-state MEG study",
  authorsList: DirectionalInformationADA,
  publicationDate: new Date("2017-01-01"),
};
export const ATNClassification: Citation = {
  title:
    "A/T/N: An unbiased descriptive classification scheme for Alzheimer disease biomarkers",
  authorsList: ATNA,
  publicationDate: new Date("2016-08-02"),
};
export const NIAAA: Citation = {
  title:
    "The National Institute on Aging and the Alzheimer’s Association Research Framework for Alzheimer’s disease",
  authorsList: NIAAAA,
  publicationDate: new Date("2018-01-01"),
};
export const Braak: Citation = {
  title: "Staging of Alzheimer-Related Cortical Destruction",
  authorsList: BraakA,
  publicationDate: new Date("1993-01-01"),
};
export const MMSEReview: Citation = {
  title:
    "Mini-Mental State Examination (MMSE) for the detection of Alzheimer's disease and other dementias in people with mild cognitive impairment (MCI)",
  authorsList: MMSEReviewA,
  publicationDate: new Date("2015-01-01"),
};
export const InferringEIFromFieldPotentials: Citation = {
  title:
    "Inferring synaptic excitation/inhibition balance from field potentials",
  authorsList: InferringEIFromFieldPotentialsA,
  publicationDate: new Date("2017-09-01"),
};
export const EITranslationalPerspective: Citation = {
  title:
    "Neuronal excitation/inhibition imbalance: core element of a translational perspective on Alzheimer pathophysiology",
  authorsList: EITranslationalPerspectiveA,
  publicationDate: new Date("2021-08-01"),
};
export const ABInducedHyperAndTau: Citation = {
  title:
    "Amyloid induced hyperexcitability in default mode network drives medial temporal hyperactivity and early tau accumulation",
  authorsList: ABInducedHyperAndTauA,
  publicationDate: new Date("2024-02-01"),
};
export const ADBiologicalConstruct: Citation = {
  title:
    "Alzheimer Disease as a Clinical-Biological Construct - An International Working Group Recommendation",
  authorsList: ADBiologicalConstructA,
  publicationDate: new Date("2024-11-01"),
};
export const PetTauGeneticFrontoTemporal: Citation = {
  title:
    "PET tau, amyloid, and neurodegeneration in the genetic frontotemporal dementia",
  authorsList: PetTauGeneticFrontoTemporalA,
  publicationDate: new Date("2021-10-19"),
};
export const VisualInterpretationPetTau: Citation = {
  title:
    "A Visual Interpretation Algorithm for Assessing Brain Tauopathy with 18F-MK-6240 PET",
  authorsList: VisualInterpretationPetTauA,
  publicationDate: new Date("2023-03-01"),
};
export const AlteredEISubPops: Citation = {
  title:
    "Altered excitatory and inhibitory neuronal subpopulation parameters are distinctly associated with tau and amyloid in Alzheimer’s disease",
  authorsList: AlteredEISubPopsA,
  publicationDate: new Date("2022-05-26"),
};
/* export const ChallengesInAD: Citation = {
  title:
    "Challenges for Alzheimer’s Disease Therapy: Insights from Novel Mechanisms Beyond Memory Defects",
  authorsList: ChallengesInADA,
  publicationDate: new Date("2018-02-06"),
}; */
export const frozza2018challenges = bibtex.frozza2018challenges
export const seibyl2023visual = bibtex.seibyl2023visual;