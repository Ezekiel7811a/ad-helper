import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import MathsCard from "@/app/components/maths-card/maths-card";

export const NeuronModel = new MyNode(
    "NeuronModel",
    [],
    (
        <NodeCard>
            <div>
                The Hodgkin-Huxley model is a biophysically detailed
                mathematical model of the action potential in a neuron. It uses
                a system of four coupled ordinary differential equations (ODEs)
                to describe the dynamics of the membrane potential and the
                gating variables of the ion channels. With the PM Potential
                Dynamics
                <MathsCard>
                    {" \\[C_{m} \\frac{dV}{dt} = I_{ion} + I_{ext} \\]"}
                </MathsCard>
                With C<sub>m</sub> as the membrane capacitance, V as the
                membrane potential, I<sub>ion</sub> as the total ionic current,
                and I<sub>ext</sub> as the external current. Where:
                <MathsCard>
                    {" \\[I_{ion} = I_{Na} + I_{K} + I{L} \\]"}
                </MathsCard>
                Where Sodium Current I<sub>Na</sub> is given by:
                <MathsCard>
                    {" \\[I_{Na} = \\bar{g}_{Na}m^{3}h(V-E_{Na}) \\]"}
                </MathsCard>
                And Potassium Current I<sub>K</sub> is given by:
                <MathsCard>
                    {" \\[I_{K} = \\bar{g}_{K}n^{4}(V-E_{K}) \\]"}
                </MathsCard>
                And Leak Current I<sub>L</sub> is given by:
                <MathsCard>{" \\[I_{L} = \\bar{g}_{L}(V-E_{L}) \\]"}</MathsCard>
            </div>
            <div>
                Gating variables m, h, and n are given by:
                <MathsCard>
                    {
                        " \\[ \\frac{dx}{dt} = \\alpha_{x}(1 - x) - \\beta_{x}x\\]"
                    }
                </MathsCard>
                We get:
                <MathsCard>
                    {
                        " \\[\\alpha_{m} = \\frac{0.1(V+40)}{1 - e^{-(V+40)/10}}, \\beta_{m} = 4e^{-(V+65)/18} \\]"
                    }
                </MathsCard>
                <MathsCard>
                    {
                        " \\[\\alpha_{h} = 0.07e^{-(V+65)/20}, \\beta_{h} = \\frac{1}{1 + e^{-(V+35)/10}} \\]"
                    }
                </MathsCard>
                <MathsCard>
                    {
                        " \\[\\alpha_{n} = \\frac{0.01(V+55)}{1 - e^{-(V+55)/10}}, \\beta_{n} = 0.125e^{-(V+65)/80} \\]"
                    }
                </MathsCard>
            </div>
        </NodeCard>
    )
);

export const Wrapper = () => <>{NeuronModel.content}</>;

export default NeuronModel;
