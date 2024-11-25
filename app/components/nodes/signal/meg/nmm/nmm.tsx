import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import NodeCard from "@/app/components/node-card/node-card.tsx";
import Hypothesis from "@/app/components/hypothesis/hypothesis.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";
import Figure from "@/app/components/figure/figure.tsx";
import MathsCard from "@/app/components/maths-card/maths-card";
import { MathJax } from "better-react-mathjax";
import SectionTitle from "@/app/components/section-title/section-title";

const Introduction = () => {
    return (
        <div>
            <div>
                <CitationCard citations={[bibtex.hodgkin1952quantitative]}>
                    After the Hodgkin–Huxley single-neuron model
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.lopes1974model,
                        bibtex.da1976models,
                        bibtex.van1982model,
                    ]}
                >
                    Lopes Da Silva et al. and Van Rotterdam et al. developped
                    the first mathematical framework to simulate spontaneous
                    electrical activities of neurons assemblies recorded by EEG
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.jansen1993neurophysiologically,
                        bibtex.jansen1995electroencephalogram,
                    ]}
                >
                    Then Jansen et al. discovered these models could be used to
                    simulate Evoked Potentials.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.wilson1972excitatory,
                        bibtex.wilson1973mathematical,
                    ]}
                >
                    the population model of Wilson–Cowan is perhaps the most
                    well-known.
                    <MathsCard>
                        {
                            "\\[\\tau \\frac{dE}{dt} = -E(t) + (1 - rE(t)) f_E\\big(w_{EE} E(t) - w_{EI} I(t) + h_E(t)\\big),\\]"
                        }
                    </MathsCard>
                    <MathsCard>
                        {
                            "\\[\\tau \\frac{dI}{dt} = -I(t) + (1 - rI(t)) f_I\\big(w_{IE} E(t) - w_{II} I(t) + h_I(t)\\big).\\]"
                        }
                    </MathsCard>
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.david2003neural,
                        bibtex.lopes1974model,
                        bibtex.zetterberg1978performance,
                    ]}
                >
                    ‘neural mass models’. These describe oscillatory neuronal
                    activity in cortical regions, and provide realistic
                    descriptions of, for example, the human alpha rhythm.
                </CitationCard>
                <CitationCard citations={[bibtex.grimbert2006bifurcation]}>
                    <Figure
                        src="images/signal/nmm/schema_nmm.png"
                        alt="schema nmm"
                        caption="Schema of NMM"
                        n={1}
                    />
                </CitationCard>
                <CitationCard citations={[bibtex.byrne2020next]}>
                    Typically take the form of systems of nonlinear ODEs.
                </CitationCard>
            </div>
        </div>
    );
};

const Maths = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.grimbert2006bifurcation]}>
                the excitatory feedback must be considered as coming from both
                local pyramidal neurons and genuine excitatory interneurons like
                spiny stellate cells
            </CitationCard>
            <CitationCard citations={[bibtex.byrne2020next]}>
                highlighting that switching, cycling, and information storage
                could all be viewed using the framework of attractor dynamics.
            </CitationCard>
            <div>
                <CitationCard
                    citations={[
                        bibtex.roberts2019metastable,
                        bibtex.wilson2001dynamics,
                    ]}
                >
                    Now explaining traveling cortical waves,
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.meijer2015modeling,
                        bibtex.shusterman2008baseline,
                    ]}
                >
                    epilepsy,
                </CitationCard>
                <CitationCard citations={[bibtex.erlhagen2002dynamic]}>
                    cognitive dynamics of movement,
                </CitationCard>
                <CitationCard citations={[bibtex.onslow2014canonical]}>
                    phase-amplitude coupling,
                </CitationCard>
                <CitationCard citations={[bibtex.lea2016cortical]}>
                    and cortical resonant frequencies,
                </CitationCard>
            </div>
            <CitationCard citations={[bibtex.byrne2020next]}>
                A core part of the Wilson–Cowan modeling framework is the use of
                a sigmoid function to determine population firing rates in terms
                of population activity.
            </CitationCard>
            <CitationCard citations={[bibtex.byrne2020next]}>
                they invariably lack important physiological mechanisms known to
                be fundamental in generating brain rhythms, such as dendritic
                morphology and nonlinear ionic currents.
            </CitationCard>
            <CitationCard citations={[bibtex.byrne2020next]}>
                This gives rise to a neural mass model with a derived firing
                rate that is a real function of the complex-valued Kuramoto
                order parameter Z for synchrony and is, therefore, a marked
                departure from the sigmoidal firing rate functions used by
                Wilson and Cowan.
                <MathsCard>
                    {
                        "\\[ f(Z) = \\frac{1}{\\pi\\tau}Re(\\frac{1 - Z^{*}}{1 + Z^{*}}) \\]"
                    }
                </MathsCard>
                Where &tau; is the effective membrane time constant of the
                neurons and Z<sup>*</sup> is the complex conjugate of Z.
            </CitationCard>
            <CitationCard citations={[bibtex.byrne2020next]}>
                The synaptic response to an action potential:
                <MathsCard>
                    {"\\[ S(t) = \\alpha^{2}te^{-\\alpha t}t \\]"}
                </MathsCard>
            </CitationCard>
            <CitationCard citations={[bibtex.byrne2020next]}>
                The equation of kuramoto order parameter (0 &lt; |Z| &lt; 1 with
                1 being perfect synchrony):
                <MathsCard>
                    {
                        "\\[ \\tau\\frac{dZ}{dt} = \\mathcal{F}(Z; \\eta_0, \\Delta) + \\mathcal{G}(Z, g; v_\\text{syn})\\]"
                    }
                </MathsCard>
                where:
                <MathsCard>
                    {
                        "\\[ \\mathcal{F}(Z; \\eta_0, \\Delta) = -i\\frac{(Z - 1)^{2}}{2}+\\frac{(Z + 1)^{2}}{2} \\left[-\\Delta + i \\eta_0 \\right]\\]"
                    }
                </MathsCard>
                <MathsCard>
                    {
                        "\\[ \\mathcal{G}(Z, g; v_\\text{syn}) = i\\frac{(Z + 1)^{2}}{2}\\nu_{syn}g - \\frac{(Z^{2} - 1)}{2}g \\]"
                    }
                </MathsCard>
                A QIF neuron in a globally coupled synaptic network indexed by i
                = 1, ..., N evolves according to:
                <MathsCard>
                    {
                        "\\[ \\tau\\frac{d\\nu_{i}}{dt} = \\eta_{i} + \\nu_{i}^{2} + g(\\nu_{syn} - \\nu_{i}) \\]"
                    }
                </MathsCard>
                Where &eta; is the noise term, &nu; is the membrane potential, g
                is the synaptic coupling strength, &nu;<sub>syn</sub> is the
                synaptic potential, and &tau; is the membrane time constant.
                Finally we have the equation for the synaptic input Q
                <sub>g</sub> to a neuron or population of neurons:
                <MathsCard>
                    {
                        "\\[ Q_g = \\frac{\\kappa}{N} \\sum_{j=1}^{N} \\sum_{m \\in \\mathbb{Z}} \\delta(t - T_j^m) \\]"
                    }
                </MathsCard>
                <CitationCard citations={[bibtex.byrne2020next]}>
                    Mean fields ~ work because large population averages out
                    noise. Resolving into Z and Q<sub>g</sub>. It has been shown
                    to be reliable compared to simulated QIF neurons (n = 500)
                </CitationCard>
            </CitationCard>
        </div>
    );
};

const Limits = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.byrne2020next]}>
                The neural dynamics underlying ERD and ERS is most likely a
                manifestation of a spiking network, with enhanced ERS being
                linked to an increase in the coherence (synchrony) of spike
                trains. Thus, in view of their coarse-grained natures, neural
                mass models in isolation are not natural candidates for modeling
                ERS/ERD
            </CitationCard>
            <CitationCard citations={[bibtex.byrne2020next]}>
                On long time scales, there is a strong correspondence between SC
                and FC, meaning functional connectivity reflects underlying
                structural pathways. On short time scales, this relationship
                weakens as neural activity becomes more dynamic and influenced
                by local or transient factors.
            </CitationCard>
        </div>
    );
};

export const NMM = new MyNode(
    "NMM",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.ranasinghe2022altered]}>
                <span>
                    for every region k (k varies from 1 to N and N is the total
                    number of regions) based on the Desikan–Killiany
                    parcellation, the regional population signal is modeled as
                    the sum of excitatory signals x<sub>e</sub>(t) and
                    inhibitory signals x<sub>i</sub>
                    (t). signal dynamics consist of a decay of the individual
                    signals with a fixed neural gain, incoming signals from
                    populations that alternate between the excitatory and
                    inhibitory signals, and input Gaussian white noise. The
                    equations for the excitatory and inhibitory signals for
                    every region are the following:
                </span>
                <MathJax>
                    {`
            \\[
            \\frac{dx_e(t)}{dt} = -\\frac{f_e(t)}{\\tau_e} \\star \\left( g_{ee} x_e(t) - g_{ei} f_i(t) \\star x_i(t) \\right) + p(t)
            \\]

            \\[
            \\frac{dx_i(t)}{dt} = -\\frac{f_i(t)}{\\tau_i} \\star \\left( g_{ii} x_i(t) + g_{ei} f_e(t) \\star x_e(t) \\right) + p(t)
            \\]
        `}
                </MathJax>
                <span>
                    g stands for neural gain. &tau; represents the time constant
                    of the decay, lower &tau; = faster rate of change in signal.
                    p(t) is the input Gaussian white noise. f(t) represents
                    &gamma; shaped average neural impusle.
                </span>
                <Hypothesis>
                    Using NMM we can show that &delta;-&theta; power increase is
                    due to changes in the slope by varying the neural gain
                    without changing the time constant or neural populations.
                </Hypothesis>
                <span>
                    Patients with AD showed significantly increased neuronal
                    time-constants, τe and τi compared to age-matched controls.
                    Patients with AD also showed increased excitatory neural
                    gains (g<sub>ee</sub>) and reduced inhibitory neural gains
                    (g<sub>ii</sub>).
                </span>
                <Figure
                    src="images/ab-tau/ti_te_ab_tau.png"
                    alt="ti te ab tau"
                    caption="Relation between ti, te, ab and tau"
                    n={1}
                />
                <Hypothesis>
                    The increased excitatory neural gains and reduced inhibitory
                    neural gains in AD patients could be a compensatory
                    mechanism to the increased neuronal time-constants.
                </Hypothesis>
                <Figure
                    src="images/ab-tau/ab_tau_f.png"
                    alt="ab tau f"
                    caption="Frequency-specific spectral power modulations of tau and Aβ"
                    n={2}
                />
            </CitationCard>
            partially mediated via increased excitatory (τe) and inhibitory (τi)
            timeconstants.
            <SectionTitle>Introduction</SectionTitle>
            <Introduction />
            <SectionTitle>Maths</SectionTitle>
            <Maths />
            <SectionTitle>Limits</SectionTitle>
            <Limits />
        </NodeCard>
    )
);

export const Wrapper = () => <>{NMM.content}</>;

export default NMM;
