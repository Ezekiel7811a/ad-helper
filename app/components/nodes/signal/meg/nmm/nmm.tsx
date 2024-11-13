import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import NodeCard from "@/app/components/node-card/node-card.tsx";
import Hypothesis from "@/app/components/hypothesis/hypothesis.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";
import { MathJax } from "better-react-mathjax";
import Figure from "@/app/components/figure/figure.tsx";

export const NMM = new MyNode(
  "NMM",
  [],
  (
    <NodeCard>
      <CitationCard citations={[bibtex.maestu2021neuronal]}>
        ‘neural mass models’. These describe oscillatory neuronal activity in
        cortical regions, and provide realistic descriptions of, for example,
        the human alpha rhythm (David and Friston, 2003; Lopes da Silva et al.,
        1974; Zetterberg et al., 1978).
      </CitationCard>
      <CitationCard citations={[bibtex.ranasinghe2022altered]}>
        <span>
          for every region k (k varies from 1 to N and N is the total number of
          regions) based on the Desikan–Killiany parcellation, the regional
          population signal is modeled as the sum of excitatory signals x
          <sub>e</sub>(t) and inhibitory signals x<sub>i</sub>
          (t). signal dynamics consist of a decay of the individual signals with
          a fixed neural gain, incoming signals from populations that alternate
          between the excitatory and inhibitory signals, and input Gaussian
          white noise. The equations for the excitatory and inhibitory signals
          for every region are the following:
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
          g stands for neural gain. &tau; represents the time constant of the
          decay, lower &tau; = faster rate of change in signal. p(t) is the
          input Gaussian white noise. f(t) represents &gamma; shaped average
          neural impusle.
        </span>
        <Hypothesis>
          Using NMM we can show that &delta;-&theta; power increase is due to
          changes in the slope by varying the neural gain without changing the
          time constant or neural populations.
        </Hypothesis>
        <span>
          Patients with AD showed significantly increased neuronal
          time-constants, τe and τi compared to age-matched controls. Patients
          with AD also showed increased excitatory neural gains (g<sub>ee</sub>)
          and reduced inhibitory neural gains (g<sub>ii</sub>).
        </span>
        <Figure
          src="images/ab-tau/ti_te_ab_tau.png"
          alt="ti te ab tau"
          caption="Relation between ti, te, ab and tau"
          n={1}
        />
        <Hypothesis>
          The increased excitatory neural gains and reduced inhibitory neural
          gains in AD patients could be a compensatory mechanism to the
          increased neuronal time-constants.
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
    </NodeCard>
  )
);

export const Wrapper = () => <>{NMM.content}</>;

export default NMM;
