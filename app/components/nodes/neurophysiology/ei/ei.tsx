import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Figure from "@/app/components/figure/figure.tsx";
import NodeCard from "@/app/components/node-card/node-card.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";
import { MathJax } from "better-react-mathjax";

const EI = new MyNode(
    "E/I balance",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.gao2017inferring]}>
                Neurons are constantly bombarded with spontaneous synaptic
                inputs. This state of fluctuating activity is referred to as the
                high-conductance state (Destexhe et al., 2003), and gives rise
                to the asynchronous, irregular (Poisson-like) firing observed in
                vivo (Destexhe et al., 2001). As the inhibitory LFP power is 2-6
                times the excitatory LFP power, it has been inferred that the
                slope would be at most horizontal and getting steeper with
                inhibitory activation. Consistent with the results.
            </CitationCard>
            <CitationCard citations={[bibtex.martinez2023combining]}>
                Accumulation and interaction of Aβ and tau proteins during
                progression of AD are shown to tilt neuronal circuits away from
                balanced E:I. Moreover, Aβ and tau may not act independently.
                Recent evidence suggests that both pathologies have synergistic
                effects. Observations on AD patients revealed an interesting
                pattern in AD with opposing effects suggesting a coexistence of
                excitation and inhibitiondominated regions.
                <Figure
                    src="images/ei/ei_balance.png"
                    alt="ei_balance"
                    caption="Spectral changes and E/I shifts in MCI. (A) Normalized power spectrum across all individuals from the control (Ctrl), MCIn,and MCIcv groups and over all ROIs."
                    n={1}
                />
            </CitationCard>
            <CitationCard citations={[bibtex.maestu2021neuronal]}>
                “The Virtual Brain” (Ritter et al., 2013; Sanzleon et al.,
                2013). With this simulator, optimal E/I balance and coupling in
                individual models was associated with cognitive performance in
                AD in various cognitive domains (Zimmermann et al., 2018).
                <Figure
                    src="images/ei/ei_disruption_model.png"
                    alt="ei_disruption_model"
                    caption="Model of E/I disruption in AD"
                    n={1}
                />
            </CitationCard>
            E:I balance has been verified as follows:
            <CitationCard citations={[bibtex.martinez2023combining]}>
                Comparision between a model of E:I that passes through a
                leadfield matrix and 1/f spectral power law observed at the
                sensor space. Showing that based on this assumption the E:I
                balance can be inferred from the sensor space with 1/f slope.
                (using FOOOF algorithm)
            </CitationCard>
            <CitationCard citations={[bibtex.gao2017inferring]}>
                First normalize LFP power. then we get the PSC in time domain:
                <MathJax>
                    {
                        "\\( \\text{PSC}(t) = C\\left(-e^{\\frac{-t}{\\tau_{\\text{rise}}}} + e^{\\frac{-t}{\\tau_{\\text{decay}}}}\\right) \\)"
                    }
                </MathJax>
                Then we can get the power spectrum of the PSC with Welch method.
                Finally we extract the 1/f slope thanks to non linear fitting.
                Then we change the E:I balance and observe the change in the
                slope, we do that for all the empirically known E:I balance
                accross the stratum depth and look at E:I and 1/f slope
                correlation. This observation was further confirmed by the
                observation of macaques with an evoked inhibitory response.
            </CitationCard>
            <div>
                The origin of extracellular fields and currents — EEG, ECoG, LFP
                and spikes. Electric current contributions from all active
                cellular processes within a volume of brain tissue superimpose
                at a given location in the extracellular medium and generate a
                potential, Ve. Vehas been referred to as the
                electroencephalogram (EEG) when recorded from the scalp, as the
                electrocorticogram (ECoG) when recorded by subdural grid
                electrodes on the cortical surface, and as the local field
                potential (LFP; also known as micro-, depth or intracranial
                EEG1). Any excitable membrane — whether it is a spine, dendrite,
                soma, axon or axon terminal and any type of transmembrane
                current contributes to the extracellular field. The field is the
                superposition of all ionic processes, from fast action
                potentials to the slowest fluctuations in glia. Thus, any
                transmembrane current, irrespective of its origin, leads to an
                intracellular as well as an extracellular (that is, LFP) voltage
                deflection. The characteristics of the LFP waveform, such as the
                amplitude and frequency, depend on the proportional contribution
                of the multiple sources and various properties of the brain
                tissue. Veamplitude scales with the inverse of the distance
                rbetween the source and the recording site, and to the inclusion
                of other (interfering) signals (leading to ‘spatial averaging’).
                AMPA and NMDA receptors mediate excitatory currents, involving
                Na+ or Ca2+ ions, respectively, which flow inwardly at the
                synapse. This influx of cations from the extracellular into the
                intracellular space gives rise to a local extracellular sink. To
                achieve effective electroneutrality within the time constants of
                relevance for systems neuroscience, the extracellular sink needs
                to be ‘balanced’ by an extracellular source, that is, an
                opposing ionic flux from the intracellular to the extracellular
                space, along the neuron; this flux is termed passive current or
                return current. Depending on the location of the sink current(s)
                and its distance from the source current(s), a dipole or a
                higher-order n-pole is formed (FIG. 2a). The contribution of a
                monopole to Vescales as 1/r, whereas the contribution of a
                dipole decays faster, as 1/r2; this steeper decay is due to the
                two opposing charges that comprise the dipole cancelling each
                other out to first order. Notably, GABA subtype A (GABAA)
                receptor-mediated inhibitory currents are typically assumed to
                add very little to the extracellular field as the Cl−
                equilibrium potential is close to the resting membrane
                potential26,27. However, in actively spiking neurons the
                membrane is depolarized, and therefore inhibitory (and often
                hyperpolarizing) currents can generate substantial transmembrane
                currents28–30. Although Na+ spikes generate large-amplitude
                Vedeflections near the soma (FIG. 2d), until recently they were
                thought not to contribute substantially to the traditionally
                considered LFP band (&lt;100 Hz) or to the scalp-recorded
                EEG10,16, because the strongest fields they generate are of
                short duration (&lt;2 ms) and nearby neurons rarely fire
                synchronously in such short time windows under physiological
                conditions31. However, synchronous action potentials from many
                neurons can contribute substantially to high-frequency
                components of the LFP. Therefore, with appropriate methods,
                valuable information can be extracted from the LFP about the
                temporal structure of spiking neuronal populations.
            </div>
            <div>
                Inferring synaptic excitation/inhibition balance from field
                potentials. In this state, neural circuits sit in a balance
                between synaptic excitation (E) and inhibition (I), typically
                consisting of fast glutamate and slower GABA inputs,
                respectively, where inhibition is two to six times the strength
                of excitation
            </div>
        </NodeCard>
    )
);

export const Wrapper = () => <>{EI.content}</>;

export default EI;
