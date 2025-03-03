import CitationCard from "@/app/components/citation-card/citation-card";
import NodeCard from "@/app/components/node-card/node-card";
import SectionTitle from "@/app/components/section-title/section-title";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const ADRelated = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.puttaert2020alterations]}>
                Results obtained in AD patients demonstrated that a state of
                increased power in the DMN (including bilateral inferior
                parietal lobes, medial prefrontal cortex and lateral temporal
                cortices) was visited less often and for shorter periods of time
                in participants with AD than in matched healthy subjects34. This
                finding suggests that spontaneous DMN activation is destabilized
                by AD neurodegeneration34.
            </CitationCard>
            <CitationCard citations={[bibtex.puttaert2020alterations]}>
                They used 8 states for HMM.
            </CitationCard>
        </div>
    );
};

const HmmMar = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.vidaurre2016spectrally]}>
                HMM is a mathematical formalism that describes a time series as
                a sequence of states, where each state has its own model of the
                observed data (i.e., the observation model)
            </CitationCard>
            <CitationCard citations={[bibtex.vidaurre2016spectrally]}>
                the observation model we use corresponds to a MAR model, and,
                hence, each state is related to a different set of multiregion
                autoregression coefficients describing the neural oscillations.
            </CitationCard>
            <CitationCard citations={[bibtex.vidaurre2016spectrally]}>
                Although the spectral contents of the states can be obtained
                directly from the (parametric) MAR model, we propose a
                non-parametric method based on the multitaper.
            </CitationCard>
            <CitationCard citations={[bibtex.vidaurre2016spectrally]}>
                the parametrisation of the MAR model and how to control its
                complexity. This is crucial, because, if the MAR models are too
                complex, the inference process (as a consequence of the Bayesian
                principle of parsimony) will tend to drop most of the states of
                the model by letting a few (or even one) dominant states to
                control the entire time series.
            </CitationCard>
            <CitationCard citations={[bibtex.vidaurre2016spectrally]}>
                Firstly, driven by objective Bayesian principles, we use
                appropriate automatic relevance determination (ARD) priors on
                the autoregression coefficients. These ARD priors are Gaussian,
                and are imposed at two levels: for each lag (regularising on the
                time–frequency dimension) and for each pair of sources
                (regularising on the spatial dimension).
            </CitationCard>
            <CitationCard citations={[bibtex.vidaurre2016spectrally]}>
                🔍 Explanation of the Lag Selection Strategy in HMM-MAR This
                section describes a smarter way to choose the set of time lags
                (A) in a Multivariate Autoregressive (MAR) model for analyzing
                MEG data. 💡 What’s the Problem? Lags in an MAR Model: In a
                standard MAR model, we include all time lags from 1 to P:
                {"A={1,2,3,...,P}"}
                {"A={1,2,3,...,P}"}
                However, this is not always practical for MEG data. Why is the
                standard choice problematic? MEG data has strong oscillatory
                components (e.g., alpha, beta rhythms). The signal is highly
                autocorrelated—meaning nearby time points are strongly related.
                If we use the standard choice of lags, variance explained keeps
                increasing as we increase PP, leading to: Overfitting: The model
                becomes too complex. Collapse of HMM states: The model may
                struggle to differentiate brain states. 🔬 Solution: Exponential
                Lapse for Lag Selection Instead of choosing all lags up to PP,
                they propose a non-uniform selection:
                {"A={P0+1,P0+Q,P0+Q2,...,P}"}
                {"A={P0​+1,P0​+Q,P0​+Q2,...,P}"}
                where: P0P0​ (offset lag): Skips the very first lags to reduce
                overfitting. QQ (exponential lapse): Instead of taking all lags,
                selects them exponentially, giving priority to those that
                contain more useful information.
            </CitationCard>
            <CitationCard citations={[bibtex.vidaurre2016spectrally]}>
                Multi taper function : This equation describes a state-specific
                spectral estimation method: Extracts the power spectrum for each
                hidden state kk. Uses HMM posteriors (γt(k)γt(k)​) to weigh
                contributions. Uses a Fourier transform to move from time to
                frequency domain. Averages across trials to stabilize the
                estimate. This is a non-parametric spectral estimation technique
                for HMM states, likely an alternative to computing spectra
                directly from the MAR model. cf the paper.
            </CitationCard>
            <CitationCard citations={[bibtex.vidaurre2016spectrally]}>
                using sLORETA for source reconstruction before applying HMM-MAR
                can be problematic due to how sLORETA normalizes the source
                estimate, potentially affecting the validity of Multivariate
                Autoregressive (MAR) models.Multivariate Autoregressive (MAR)
                models assume that the observed signals retain the original
                dynamics of the brain sources.
            </CitationCard>
            <CitationCard citations={[bibtex.vidaurre2016spectrally]}>
                Another well-known problem for connectivity estimation in source
                space MEG data is the spurious leakage between sources. This is
                again a consequence of the ill-posed nature of the source
                reconstruction inverse problem, which aims to estimate the
                source activity from the sensor measurements (Schoffelen and
                Gross, 2009). To get around this problem we can choose a
                connectivity measure that is insensitive to zero-lag
                interactions, e.g., the imaginary part of coherency (Nolte et
                al., 2004) or phase-lag index (Stam et al., 2007).
                Alternatively, we can orthogonalise the time courses prior to
                estimating envelope correlation (Brookes et al., 2011), (Hipp et
                al., 2012), (Colclough et al., 2015). However, such approaches
                can be overconservative, as they remove genuine zero-lag
                correlation and, indirectly, also lagged correlations.
            </CitationCard>
        </div>
    );
};

const HMM = new MyNode(
    "HMM",
    [],
    (
        <NodeCard>
            Hidden Markov Models (HMM) have been used to model the progression
            of Alzheimer&quot;s disease (AD). This model is based on the
            assumption that the progression of AD can be divided into a finite
            number of states, each representing a different stage of the
            disease. The transition between states is governed by a set of
            probabilities, which can be estimated from longitudinal data. HMMs
            have been shown to be effective in capturing the complex dynamics of
            AD progression and have been used to predict the future course of
            the disease in individual patients.This approach, which identifies
            the points in time at which unique patterns of electrophysiological
            activity recur, revealed transient (100–200 ms) brain states with
            spatial topographies similar to RSNs
            <SectionTitle>HMM-MAR</SectionTitle>
            <HmmMar />
        </NodeCard>
    )
);

export const Wrapper = () => <>{HMM.content}</>;

export default HMM;
