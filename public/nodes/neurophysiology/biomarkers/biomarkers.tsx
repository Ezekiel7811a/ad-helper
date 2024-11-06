import CitationCard from "@/app/components/citation-card/citation-card";
import Figure from "@/app/components/figure/figure";
import MyTable from "@/app/components/table/table";
import { MyNode } from "@/models/node";
import {
  EITranslationalPerspective,
  InferringEIFromFieldPotentials,
} from "@/public/citations";

const biomarkers = {
  excitatory: ["glutamate"],
  inhibitory: ["GABA", "gamma-aminobutyric acid"],
};

const headers = [
  "Biomarkers",
  "Type",
  "Frequency activity",
  "Amplitude activity (proportion)",
];
const rows = [
  ["Glutamate", "E", "High", "1"],
  ["GABA", "E", "Low", "2-6"],
];

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
      <CitationCard citations={[InferringEIFromFieldPotentials]}>
        <MyTable headers={headers} contents={rows} />
      </CitationCard>
      <CitationCard citations={[InferringEIFromFieldPotentials]}>
        synaptic input fluctuations during the high conductance state can be
        accurately modeled by a summation of two stationary stochastic processes
        representing excitatory and inhibitory inputs (Alvarez and Destexhe,
        2004).
        <Figure
          src="images/ei/ei_frequency.png"
          alt="E:I interaction model"
          caption="Model schematic: an “LFP population” receives input from two Poisson populations, one excitatory and one inhibitory."
          n={1}
        />
      </CitationCard>
      <CitationCard citations={[EITranslationalPerspective]}>
        Tau and Aβ together can have complex effects, with tau further silencing
        neurons even if Aβ is causing hyperactivity, suggesting tau can override
        the excitatory imbalance from Aβ.
      </CitationCard>
    </div>
  )
);
