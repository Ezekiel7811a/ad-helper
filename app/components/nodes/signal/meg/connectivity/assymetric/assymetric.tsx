import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Hypothesis from "@/app/components/hypothesis/hypothesis.tsx";
import { MyNode } from "@/models/node";
import { DirectionalInformationAD } from "@/public/citations";
import dynamic from "next/dynamic";
const MathJax = dynamic(
  () => import("better-react-mathjax").then((mod) => mod.MathJax),
  { ssr: false }
);

const Assymetric = new MyNode(
  "Assymetric",
  [],
  (
    <div>
      <CitationCard citations={[DirectionalInformationAD]}>
        Phase Transfer Entropy: Functional connections can be evaluated by
        calculating the statistical interdependencies between time series of
        neuronal activity (Friston, 2011). For the PTE the time series of the
        phases are used as input for the transfer entropy (TE) (Schreiber,
        2000), which is a specific version of the Kullback-Leibler entropy
        (Kullback and Leibler, 1951)or the conditional mutual information (Paluš
        and Stefanovska, 2003; Paluš and Vejmelka, 2007; for review see
        Hlaváčková-Schindler et al., 2007). As an information-theoretic measure,
        the TE characterizes the information transfer between time series. The
        TE can be easily understood in terms of uncertainty: a source signal has
        a causal influence on a target signal if the uncertainty of the target
        signal conditioned on both its own past and that of the source signals
        is smaller than the uncertainty of the target signal conditioned only on
        its own past. If the uncertainty of a target signal Y at a delay δ is
        expressed in terms of Shannon Entropy (Shannon, 1948), then the TE from
        source signal X to target signal Y can be expressed as
        <MathJax>
          {
            "\\( \\text{TE}_{xy} = \\sum \\text{p}(Y_{t+\\delta}, Y_t, X_t) \\log \\left( \\frac{\\text{p}(Y_{t+\\delta} \\mid Y_t, X_t)}{\\text{p}(Y_{t+\\delta} \\mid Y_t)} \\right) \\)"
          }
        </MathJax>
        Time series can be described in terms of their amplitudes and
        instantaneous phases (Rosenblum et al., 2001), following which transfer
        entropy can be estimated from the time series of the instantaneous
        phases (PTE).
        <MathJax>
          {
            "\\( \\text{PTE}_{xy} = \\sum \\text{p}(Y_\\delta) \\text{p}(Y) \\text{p}(X) \\log \\left( \\frac{\\text{p}(Y_\\delta \\mid Y, X)}{\\text{p}(Y_\\delta \\mid Y)} \\right) \\)"
          }
        </MathJax>
        where the probabilities are obtained by building histograms of
        occurrences of single, pairs or triplets of phase estimates in an epoch
        assuming p(Yδ,Y,X) = p(Yδ)p(Y)p(X). The number of bins in the histograms
        was set as
        <MathJax>
          {
            "\\( \\text{bins} = \\text{e}^{0.626 + 0.4 \\log(N_s - \\delta - 1)} \\)"
          }
        </MathJax>
        Finally, because the PTE does not have a meaningful upper bound (Lobier
        et al., 2014), and to reduce biases, i.e., the effect of having (small)
        nonzero PTE values in situations when there is no actual information
        flow, we normalized the PTE.
        <MathJax>
          {
            "\\( \\text{dPTE}_{xy} = \\frac{\\text{PTE}_{xy}}{\\text{PTE}_{xy} + \\text{PTE}_{yx}} \\)"
          }
        </MathJax>
        Findings: In the beta band, AD patients exhibited reduced information
        flow from posterior (visual and posterior Default Mode Network regions)
        to anterior regions, compared to controls. The posterior regions,
        particularly the precuneus and visual cortex, were less "sending," while
        prefrontal regions were less "receiving" in AD. This disruption aligns
        with previous EEG findings that suggest altered beta-band connectivity
        in AD. The beta band may play a crucial role in maintaining long-range
        connectivity, which becomes compromised in AD. In AD patients, only the
        beta band exhibited disrupted posterior-to-anterior flow, while the
        theta band’s anterior-to-posterior flow remained intact. This selective
        disruption in the beta band may indicate the vulnerability of beta-band
        connectivity in AD. High-degree hubs, like the posterior hubs, are
        typically strong information senders. However, in AD, these posterior
        hubs are damaged, leading to a redistribution of hub-like activity to
        more anterior regions.
      </CitationCard>
      <Hypothesis>
        Tau and/or Amyloid-Beta Burden in Posterior Hubs Correlates with
        Disrupted Posterior-to-Anterior Information Flow in the Beta Band
      </Hypothesis>
      <Hypothesis>
        Tau Pathology in the Hippocampi Correlates with Theta Band Connectivity
        and Information Flow to Anterior Regions. Although the study did not
        find significant group differences in the theta band, it may be that tau
        deposition specifically affects theta flow involving the hippocampi,
        which could be overlooked in the general analysis.
      </Hypothesis>
    </div>
  )
);

export const Wrapper = () => <>{Assymetric.content}</>;

export default Assymetric;
