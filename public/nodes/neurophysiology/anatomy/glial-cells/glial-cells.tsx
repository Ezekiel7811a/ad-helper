import CitationCard from "@/app/components/citation-card/citation-card";
import Hypothesis from "@/app/components/hypothesis/hypothesis";
import { MyNode } from "@/models/node";
import { EITranslationalPerspective } from "@/public/citations";

export const GlialCells = new MyNode(
  "GlialCells",
  [],
  (
    <div>
      <CitationCard citations={[EITranslationalPerspective]}>
        Microglia (immune cells in the brain) become active when neurons are
        hypoactive. They can further reduce neuronal firing and are known to
        clear synapses and neurons in AD, contributing to loss of E. also
        contribute to synapse removal and become structurally abnormal in AD.
        These changes further disrupt neuron communication and could impair
        brain circuits.
      </CitationCard>
      <CitationCard citations={[EITranslationalPerspective]}>
        Astrocytes also contribute to synapse removal and become structurally
        abnormal in AD. These changes further disrupt neuron communication and
        could impair brain circuits.
      </CitationCard>
      <CitationCard citations={[EITranslationalPerspective]}>
        Oligodendrocytes (cells involved in myelination) are implicated in AD,
        but their specific role is still under research.
      </CitationCard>
      <Hypothesis>
        It is possible to make a model of MEG signal / features based on tau and
        Aβ that takes into account their interactions with one another and with
        glial cells. As it is possible to predict the AD progression based on
        MEG features it would help understand glial cells role in AD
        progression.
      </Hypothesis>
    </div>
  )
);
