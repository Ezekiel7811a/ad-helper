import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Hypothesis from "@/app/components/hypothesis/hypothesis";
import NodeCard from "@/app/components/node-card/node-card";
import SectionTitle from "@/app/components/section-title/section-title";
import MyTable from "@/app/components/table/table";
import ToCheck from "@/app/components/to-check/to-check.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const Introduction = () => {
    return (
        <div>
            <div>
                <CitationCard
                    citations={[bibtex.singh2014magnetoencephalography]}
                >
                    Magnetoencephalography (MEG) measures the magnetic fields
                    generated by electric currents in the brain. The magnetic
                    field measurements are in the range of femto-tesla to
                    pico-tesla. An electric current is always associated with a
                    magnetic field perpendicular to its direction as per the
                    righthand rule. The magnetic permeability of biological
                    tissues is almost the same as that of empty space and so the
                    magnetic field is not distorted by scalp or skull compared
                    to electric fields.However, the magnetic fields diminish as
                    1/r3 with the distance of ‘r’. the source of the magnetic
                    fields is dendritic current of pyramidal neurons that fire
                    synchronously and in parallel.
                </CitationCard>
                <CitationCard citations={[bibtex.hamalainen1991basic]}>
                    Axonal and synaptic currents and their magnetic fields
                    cancel out.
                </CitationCard>
                <CitationCard
                    citations={[bibtex.hamalainen1992magnetoencephalography]}
                >
                    MEG does not detect radial dipoles but tangential dipoles
                    are seen on MEG, this is because the corresponding magnetic
                    field of the radial dipole remains within the cranial cavity
                    and thus cannot be detected by sensors on the outside. Thus
                    It is less sensitive to activity in gyri or other regions
                    where dipoles are radial.
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.martinez2023combining]}>
                    Recently, a range of novel features derived from
                    electroencephalography (EEG) and magnetoencephalography
                    (MEG) recordings have been described as robust proxy makers
                    for noninvasive real-time measurements of changes in E/I
                    balance.
                </CitationCard>
            </div>
            <div>
                <ToCheck string="Clinical applications of EEG power spectra aperiodic component analysis: a mini-review" />
                Nakamura et al. (2017): This MEG study found altered network
                organization in healthy elderly individuals with high amyloid
                levels, particularly in the inferior parietal lobe and
                precuneus. The correlation between Aβ and brain synchrony
                indicates that network impairment precedes metabolic (FDG-PET)
                or structural (MRI) changes, suggesting that M/EEG could detect
                functional changes before visible atrophy.
            </div>
            <div>
                <ToCheck>
                    From mechanisms to markers: novel noninvasive EEG proxy
                    markers of the neural excitation and inhibition system in
                    humans., Globally elevated excitation-inhibition ratio in
                    children with autism spectrum disorder and below-average
                    intelligence, Methods for inferring neural circuit
                    interactions and neuromodulation from local field potential
                    and electroencephalogram measures, Memantine effects on
                    electroencephalographic measures of putative
                    excitatory/inhibitory balance in schizophrenia, Inferring
                    synaptic excitation/inhibition balance from field potentials
                </ToCheck>
            </div>
        </div>
    );
};

const Biomarkers = () => {
    return (
        <div>
            <div>
                <CitationCard citations={[bibtex.martinez2023combining]}>
                    One of the most promising candidate E/I biomarkers is the
                    exponent of the 1/f spectral power law
                </CitationCard>
            </div>
        </div>
    );
};

const headers = ["Measure", "Advantages", "Disadvantages"];
const contents = [
    [
        "Coherence",
        "Quantifies both amplitude and phase relationships between signals.",
        "Confounded by amplitude correlations, not purely phase-sensitive.",
    ],
    [
        "PLV",
        "Robust to noise compared to coherence.",
        "Ignores amplitude, so it may miss amplitude-related dependencies. Cannot capture nonlinear relationships.",
    ],
    [
        "MI",
        "Captures both linear and nonlinear dependencies.",
        "Lacks frequency specificity unless combined with time-frequency methods. Requires careful estimation of joint probability distributions, which can introduce bias.",
    ],
    [
        "DTF",
        "Provides directional information about connectivity",
        "Assumes linear relationships, limiting its use with nonlinear systems. Sensitive to model order selection in multivariate autoregressive (MVAR) modeling",
    ],
    [
        "Granger Causality",
        "Provides directional information about connectivity. Provides both time-domain and frequency-domain variants.",
        "Assumes linearity. Prone to false positives due to common inputs or indirect connections. Sensitive to preprocessing",
    ],
    [
        "DCM",
        "Models directed and causal interactions in a biologically informed manner. Accounts for nonlinear and state-dependent interactions. Incorporates Bayesian statistics for robust inference.",
        "Requires strong a priori assumptions about the network and experimental design.",
    ],
];
const Measures = () => {
    return (
        <div>
            <div>
                Symetric:
                <CitationCard citations={[bibtex.schoffelen2009source]}>
                    Coherence: is the frequency domain analog of the
                    cross-correlation coefficient.
                </CitationCard>
                <CitationCard citations={[bibtex.lachaux1999measuring]}>
                    PLV: Amplitude effects can be disentangled from the
                    consistency of the phase difference by means of the PLV.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.ioannides2000real,
                        bibtex.liu2006spatiotemporal,
                    ]}
                >
                    MI: Mutual information was computed with a range of time
                    lags between any pair of ROI
                </CitationCard>
            </div>
            <div>
                Asymetric:
                <CitationCard citations={[bibtex.schoffelen2009source]}>
                    DTF: After fitting the MVAR-model to the time courses of the
                    estimated sources, directed interactions can be quantified
                    by means of the DTF or the partial directed coherence.
                </CitationCard>
                Granger Causality
                <CitationCard citations={[bibtex.schoffelen2009source]}>
                    DCM: aims to provide a biophysically plausible generative
                    model of the measured data. The generative model specifies
                    how input activates a system of prespecified interconnected
                    neuronal populations, leading to the measured signal.
                </CitationCard>
            </div>
            <div>
                Table 1. Advantages and disadvantages of different connectivity
                measures
                <MyTable headers={headers} contents={contents} />
            </div>
        </div>
    );
};

const NonLinearity = () => {
    return (
        <div>
            <div>
                As seen some of the measures are sensitive to linearity, which
                is a major assumption in the field of brain function.
                <CitationCard citations={[bibtex.vignesh2024review]}>
                    Indeed bifurcation theory, and attractor dynamics,
                    facilitating comprehension of how neural networks organize
                    themselves manifest inherently nonlinear dynamics.
                </CitationCard>
                <Hypothesis>
                    The non linearity phenomenon explains why linear measures
                    work at smaller scales.
                </Hypothesis>
            </div>
        </div>
    );
};

const InverseProblem = () => {
    return (
        <div>
            <CitationCard
                citations={[bibtex.hamalainen1993magnetoencephalography]}
            >
                This problem has no unique solution. Thus, source localization
                represents approximations based on certain assumptions that have
                to be made. A commonly used assumption is presuming simplified
                models of neuronal generators like equivalent current dipole
                (ECD).
            </CitationCard>
        </div>
    );
};

const FieldSpread = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.schoffelen2009source]}>
                Field spread leads to a wide-spread representation of any source
                at the sensors. This has severe consequences for the
                interpretability of connectivity measures estimated between
                pairs or sensors.
            </CitationCard>
        </div>
    );
};

const Meg = new MyNode(
    "Magnetoencephalography (MEG)",
    [],
    (
        <NodeCard>
            <SectionTitle>Introduction</SectionTitle>
            <Introduction />
            <SectionTitle>Biomarkers</SectionTitle>
            <Biomarkers />
            <SectionTitle>Measures</SectionTitle>
            <Measures />
            <SectionTitle>Non Linearity</SectionTitle>
            <NonLinearity />
            <SectionTitle>Field Spread</SectionTitle>
            <FieldSpread />
        </NodeCard>
    )
);

export const Wrapper = () => <>{Meg.content}</>;

export default Meg;
