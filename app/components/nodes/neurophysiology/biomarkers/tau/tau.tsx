import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Hypothesis from "@/app/components/hypothesis/hypothesis.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const Tau = new MyNode(
  "Tau",
  [],
  (
    <div>
      <CitationCard citations={[bibtex.brunello2020mechanisms]}>
        Tau is one of the many microtubule-associated proteins (MAP) that have
        an important function of regulating microtubules (MT) to ensure proper
        cytoskeletal organization and trafficking [1], which is particularly
        important in highly polarized neuronal cells whose functionality and
        viability depend on transport of cellular cargo to and from axonal and
        dendritic peripheries [2–4].
      </CitationCard>
      <CitationCard citations={[bibtex.brunello2020mechanisms]}>
        Tau has important physiological functions in regulating MT, including MT
        polymerization, stabilization and suppression of MT dynamics.
        Dysregulation of the tau–MT complex leads to tau detachment and
        instability and disassembly of MTs, eventually leading to perturbation
        of MT-dependent transport and impaired maintenance of cellular polarity
        and viability [4, 5].
      </CitationCard>
      <CitationCard citations={[bibtex.brunello2020mechanisms]}>
        Finally, several domains of the tau protein have the ability to interact
        with lipids and membranes [17], and one of tau kinases, Fyn, is mainly
        located in PM microdomains called lipid rafts, where tau can also be
        recruited [18]. It is also possible that tau localized at the PM
        occupies a role as a signaling regulator, via its interaction with
        membrane receptors [19, 20].
      </CitationCard>
      <CitationCard citations={[bibtex.brunello2020mechanisms]}>
        Tau is present in neurons and, to a lesser degree, in glial cells [6,
        7]. Tau is mainly an axonal protein in mature neurons, but it can also
        be found in the nucleus, mitochondria, dendrites, synapses, and at the
        plasma membrane (PM) [8–13]. This localization pattern suggests that
        besides the main function of MT regulation, tau may have other roles in
        cells.
      </CitationCard>
      <CitationCard citations={[bibtex.brunello2020mechanisms]}>
        Synaptic tau has been reported to be involved in synaptic development of
        newborn hippocampal neurons [14].
      </CitationCard>
      In the context of Alzheimer&apos;s disease, tau becomes
      hyperphosphorylated and forms neurofibrillary tangles. These tangles are
      associated with neuronal dysfunction and cell death. Tau pathology is
      thought to be a key driver of neurodegeneration in Alzheimer&apos;s
      disease.
      <CitationCard citations={[bibtex.frozza2018challenges]}>
        thereby destabilizing microtubules and compromising axonal transport
        (Querfurth and LaFerla, 2010; Ittner and Götz, 2011; Medeiros et al.,
        2011; Morris et al., 2011; Scheltens et al., 2016).
      </CitationCard>
      <span>
        <CitationCard citations={[bibtex.brunello2020mechanisms]}>
          Tau is encoded by the MAPT gene.
        </CitationCard>
        <CitationCard
          citations={[bibtex.goedert1989prospective, bibtex.goedert2018tau]}
        >
          In fact, there are six different isoforms of the tau protein, and
          these can adopt different conformations, leading to various
          tauopathies spanning from 352 to 441 aa
        </CitationCard>
        <CitationCard citations={[bibtex.levy202218f]}>
          The characteristic tau pathology found in Alzheimer&apos;s disease
          consists of neurofibrillary tangles (NFTs) composed of all six tau
          isoforms.
        </CitationCard>
      </span>
      <CitationCard citations={[bibtex.busche2020synergy]}>
        The tau aggregates are commonly found in the medial temporal lobe,
        starting in the parahippocampal gyrus, which includes the entorhinal
        cortex, from which they spread to limbic areas, and from there to the
        association areas.
      </CitationCard>
      <CitationCard citations={[bibtex.gallego2024synergistic]}>
        Tau deposition also follows a relatively stereotypical distribution
        pattern, accumulating first in the entorhinal cortex before spreading to
        limbic areas and eventually the neocortex6,14,15.
      </CitationCard>
      <Hypothesis>
        Regions with High Tau Burden Show Altered Aperiodic Slopes, Reflecting
        an Imbalance in Excitatory-Inhibitory Activity
      </Hypothesis>
      <CitationCard citations={[bibtex.braak1993staging]}>
        Neurofibrillary tangles develop mainly in Pyramidal cells of the
        entorhinal cortex and then due to the spread effect will spread to
        hippocampus and finally to the neocortex.
      </CitationCard>
    </div>
  )
);

export const Wrapper = () => <>{Tau.content}</>;

export default Tau;
