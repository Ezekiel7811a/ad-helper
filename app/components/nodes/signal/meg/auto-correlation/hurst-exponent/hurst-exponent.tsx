import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import SectionTitle from "@/app/components/section-title/section-title";
import MathsCard from "@/app/components/maths-card/maths-card";

const Theory = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.lahmiri2018generalized]}>
                <MathsCard>
                    {
                        "K_{q}(d) = \\frac{\\bigl\\langle \\bigl| S\\bigl(t + d\\bigr) - S(t)\\bigr|^q \\bigr\\rangle}{d^{H(q)}}"
                    }
                </MathsCard>
                <MathsCard>
                    {"K_{q}(d) \\propto \\frac{d}{\\nu}^{q\\,H(q)}"}
                </MathsCard>
                H(q) can be estimated by fitting a power law to the qth-order.
                if H(q) &gt; 0.5, the signal is persistent; if H(q) &lt; 0.5,
                the signal is anti-persistent; and if H(q) = 0.5, the signal is
                uncorrelated or random.
            </CitationCard>
            <CitationCard citations={[bibtex.lahmiri2018generalized]}>
                Interpretations: A higher value of H(q) indicates a stronger
                long memory in the signal. And is significant in the context of
                epilepsy.
            </CitationCard>
        </div>
    );
};

const Pros = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.lahmiri2018generalized]}>
                ndeed, the GHEs quantify long memory in a given signal at
                different scales of analysis. For instance, at each scale q,
                Hurst’s exponent is estimated; and, varying q allows obtaining
                multifractals of the original signal in a straightforward way.
                The main advantage of GHE is the ability to combine sensitivity
                to any type of signal dependence with high computational
                efficiency [25].
            </CitationCard>
            <CitationCard citations={[bibtex.lahmiri2018generalized]}>
                GHE estimates were found to be consistent than those of other
                estimation methods such as MFDFA since GHE provides much
                narrower confidence intervals and does not underestimate the
                expected value so strongly under the presence of heavier tails
                [26].
            </CitationCard>
            <CitationCard citations={[bibtex.lahmiri2018generalized]}>
                Furthermore, GHE based fractal estimates were found to be
                effective in characterization of biomedical signals such as
                those affected with Glioma [7], mild cognitive impairment [27],
                and Alzheimer’s disease [27,28].
            </CitationCard>
        </div>
    );
};

export const HurstExponent = new MyNode(
    "HurstExponent",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.lahmiri2018generalized]}>
                The purpose of this study is to employ the generalized Hurst
                exponent (GHE) [25] to better characterize multifractals in EEG
                signals of healthy control and epileptic subjects. The GHE
                allows a multi-scale analysis of the underlying signal to
                determine its scaling properties by computing the qth-order
                moments of the distribution of signal’s increments [25].
            </CitationCard>
            <SectionTitle>Pros</SectionTitle>
            <Pros />
            <SectionTitle>Theory</SectionTitle>
            <Theory />
        </NodeCard>
    )
);

export const Wrapper = () => <>{HurstExponent.content}</>;

export default HurstExponent;
