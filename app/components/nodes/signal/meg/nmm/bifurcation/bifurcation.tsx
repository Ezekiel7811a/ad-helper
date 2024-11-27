import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import MathsCard from "@/app/components/maths-card/maths-card";

export const Bifurcation = new MyNode(
    "Bifurcation",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.izhikevich2003simple]}>
                Bifurcation methodologies are techniques in dynamical systems
                theory that analyze how the behavior of a system changes as
                parameters are varied. In the context of neuronal models,
                bifurcation techniques are used to: Identify the key variables
                and dynamics that govern the system&apos;s behavior. Reduce the
                high-dimensional Hodgkin-Huxley model to a simpler,
                two-dimensional (2-D) system of ODEs. Preserve the essential
                behavior of the neuron (like firing patterns and action
                potential dynamics). Gives us the Voltage dynamics:
                <MathsCard>
                    {
                        "\\[ \\frac{dv}{dt} = 0.04v^2 + 5v + 140 - u + I_{ext} \\]"
                    }
                </MathsCard>
                The recovery dynamics:
                <MathsCard>{"\\[ \\frac{du}{dt} = a(bv - u) \\]"}</MathsCard>
                After spike reset:
                <MathsCard>
                    {
                        "\\[ \\text{If } v \\geq 30 \\, \\text{mV}, \\text{ then: } \\begin{cases} v \\leftarrow c \\\\ u \\leftarrow u + d \\end{cases} \\]"
                    }
                </MathsCard>
                a, b, c, and d are dimensionless parameters. By changing the
                parameters a , b , c , d the model can replicate the dynamics of
                various neuron types: RS (Regular Spiking): Adjust parameters to
                mimic slow recovery after a spike, producing regular spiking
                behavior. IB (Intrinsically Bursting): Introduce rapid recovery
                and adaptation to produce bursts of spikes. FS (Fast Spiking):
                Set parameters for fast recovery, enabling high-frequency firing
                without adaptation.
            </CitationCard>
            <div>
                <CitationCard citations={[bibtex.izhikevich2003simple]}>
                    The parameter a describes the time scale of the recovery
                    variable u. Smaller values result in slower recovery. A
                    typical value is a =0:02. • The parameter b describes the
                    sensitivity of the recovery variable u to the subthreshold
                    fluctuations of the membrane potential v. Greater values
                    couple v and u more strongly resulting in possible
                    subthreshold oscillations and low-threshold spiking
                    dynamics. A typical value is b =0:2. The case b&lt;a(b&gt;a)
                    corresponds to saddle-node (Andronov–Hopf) bifurcation of
                    the resting state [10]. • The parameter c describes the
                    after-spike reset value of the membrane potential v caused
                    by the fast high-threshold K+ conductances. A typical value
                    is c = 65 mV.The parameter d describes after-spike reset of
                    the recovery variable u caused by slow high-threshold Na+
                    and K+ conductances. A typical value is d =2
                </CitationCard>
            </div>
        </NodeCard>
    )
);

export const Wrapper = () => <>{Bifurcation.content}</>;

export default Bifurcation;
