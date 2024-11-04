import { Citation } from "@/models/citation";
import {
  DSKnopman,
  HyperactivationAuthors,
  HyperactivationAuthors2,
  HyperactivationA3,
  HyperactivationA4,
  PMCanada,
  SynergyABTauA,
  LinksADOscillatorySlowingA,
  EIIncreasedParietalA,
  SynergyABTauCorticalAndMCA,
} from "./authors";

export const adReview: Citation = {
  title: "Alzheimer's disease",
  authors: [DSKnopman],
  publicationDate: new Date("2021-05-13"),
};

export const CombiningBrainSimAndMeg: Citation = {
  title:
    "Combining aperiodic 1/f slopes and brain simulation: An EEG/MEG proxy marker of excitation/inhibition imbalance in Alzheimer's disease",
  authors: [PMCanada],
  publicationDate: new Date("2023-09-01"),
};

export const hyperexcitability: Citation = {
  title: "A vicious cycle of β amyloid-dependent neuronal hyperactivation ",
  authors: HyperactivationAuthors,
  publicationDate: new Date("2019-08-09"),
};

export const hyperexcitability2: Citation = {
  title: "A vicious cycle of β amyloid-dependent neuronal hyperactivation ",
  authors: HyperactivationAuthors2,
  publicationDate: new Date("2015-10-12"),
};

export const hyperexcitability3: Citation = {
  title:
    "Inhibitory Interneuron Deficit Links Altered Network Activity and Cognitive Dysfunction in Alzheimer Model",
  authors: HyperactivationA3,
  publicationDate: new Date("2012-04-27"),
};

export const hyperexcitability4: Citation = {
  title:
    "Clusters of Hyperactive Neurons Near Amyloid Plaques in a Mouse Model of Alzheimer's Disease",
  authors: HyperactivationA4,
  publicationDate: new Date("2008-09-19"),
};

export const synergyABTauInAD: Citation = {
  title: "Synergy between amyloid-β and tau in Alzheimer’s disease",
  authors: SynergyABTauA,
  publicationDate: new Date("2020-08-10"),
};

export const LinksADOscillatorySlowing: Citation = {
  title:
    "A multiscale brain network model links Alzheimer’s disease-mediated neuronal hyperactivity to large-scale oscillatory slowing",
  authors: LinksADOscillatorySlowingA,
  publicationDate: new Date("2022-07-01"),
};

export const EIIncreasedParietal: Citation = {
  title:
    "Increased excitatory to inhibitory synaptic ratio in parietal cortex samples from individuals with Alzheimer’s disease",
  authors: EIIncreasedParietalA,
  publicationDate: new Date("2021-05-10"),
};

export const SynergyABTauCorticalAndMC: Citation = {
  title:
    "Synergistic association of Aβ and tau pathology with cortical neurophysiology and cognitive decline in asymptomatic older adults",
  authors: SynergyABTauCorticalAndMCA,
  publicationDate: new Date("2024-08-13"),
};
