import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Figure from "@/app/components/figure/figure.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";
import { MathJax } from "better-react-mathjax";

const PhaseCorr = new MyNode(
    "Phase Correlation",
    [],
    (
        <div>
            <CitationCard citations={[bibtex.o2015measuring]}>
                <Figure
                    n={0}
                    src="images/signal/phase_coupling.png"
                    alt="phase_coupling"
                    caption="Phase coupling"
                />
            </CitationCard>
            <CitationCard citations={[bibtex.canuet2015network]}>
                Phase synchronization measures are based on the hypothesis that
                the difference of phases between two phaselocked systems must be
                nonuniform, so the degree of nonuniformity must be a good
                estimator of the coupling level.
            </CitationCard>
            <CitationCard citations={[bibtex.canuet2015network]}>
                the complex analytic signal from each of the brain regions was
                obtained by using the Hilbert transform.
                <MathJax>
                    {
                        "\\[ \\text{Hilbert}(x(t)) = \\frac{1}{\\pi} P.V. \\int_{-\\infty}^{\\infty} \\frac{x(\\tau)}{t-\\tau} d\\tau;\\ \\text{or} \\; \\left( \\frac{1}{\\pi t'} \\right) * x(t) \\] \
                        \\[ z(t) = x(t) + i \\text{Hilbert}(x(t)) \\] \
                        \\[ z(t) = A(t) e^{i \\phi(t)} \\]"
                    }
                </MathJax>
                The PLV between the time series x(k) and y(k) from two brain
                regions is defined as follows:
                <MathJax>
                    {
                        "\\[ \\text{PLV}_{xy} = \\frac{1}{N} \\sum_{k=1}^{N} \\left| e^{i(\\phi_x(k) - \\phi_y(k))} \\right| \\]"
                    }
                </MathJax>
            </CitationCard>
        </div>
    )
);

export const Wrapper = () => <>{PhaseCorr.content}</>;

export default PhaseCorr;
