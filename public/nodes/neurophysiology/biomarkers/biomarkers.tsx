import { MyNode } from "@/models/node";

const biomarkers = {
  excitatory: ["glutamate"],
  inhibitory: ["GABA", "gamma-aminobutyric acid"],
};

export const Biomarkers = new MyNode(
  "Biomarkers",
  [],
  (
    <div>
      <ul>
        <li>Excitatory:</li>
        {biomarkers.excitatory.map((excitatory, index) => (
          <li key={`excitatory-${index}`}>{excitatory}</li>
        ))}
      </ul>
      <ul>
        <li>Inhibitory:</li>
        {biomarkers.inhibitory.map((inhibitory, index) => (
          <li key={`inhibitory-${index}`}>{inhibitory}</li>
        ))}
      </ul>
      magnetic resonance spectroscopy (MRS) measurements of in vivo
      concentrations of primary excitatory (glutamate) and inhibitory
      (γ-aminobutyric acid, GABA) neurotransmitters.14–17 This approach presents
      several methodological challenges: the relatively low signals of glutamate
      and GABA complicate their interpretation because of their overlap with
      signals from other metabolites, it has low temporal and spatial
      resolution, and their measurements are usually restricted to one or few
      brain regions. For these reasons, current MRS approaches have limited
      utility for tracking variations of E/I across cortical regions or
      behavioral states.
    </div>
  )
);
