import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Conclusion from "@/app/components/conclusion/conclusion";
import Figure from "@/app/components/figure/figure";
import Hypothesis from "@/app/components/hypothesis/hypothesis";
import NodeCard from "@/app/components/node-card/node-card";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

export const TauSpread = new MyNode(
    "TauSpread",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.seibyl2023visual]}>
                Temporal lobe structures, especially the mesial temporal gyri
                and hippocampus, are the earliest neocortical regions to
                manifest neurofibrillary tangles (9)
            </CitationCard>
            <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                Tau secretion involves multiple vesicular and
                non-vesicle-mediated pathways, including secretion directly
                through the plasma membrane. Consequently, extracellular tau can
                be found in various forms, both as a free protein and in
                vesicles, such as exosomes and ectosomes. Once in the
                extracellular space, tau aggregates can be internalized by
                neighboring cells, both neurons and glial cells, via endocytic,
                pinocytic and phagocytic mechanisms.
            </CitationCard>
            <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                prion-like propagation of misfolding protein pathology could
                provide a general mechanism for disease progression in
                tauopathies
            </CitationCard>
            <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                Absence of the N-terminus alters cellular localization of tau,
                promoting cytosol to nucleus relocalization [24]. It has also
                been suggested that the N-terminal projection domain mediates PM
                localization of tau via annexin-2 interaction [25].
            </CitationCard>
            <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                n the majority of tauopathies glial inclusions, in the form of
                coiled bodies, are found in oligodendrocytes [97, 98],
                astrocytic tufts and astrocytic plaques [99].
            </CitationCard>
            <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                tau can propagate trans-synaptically from one neuron to another,
                and that the nearby network, synaptic contacts and neuronal
                activity modulate such propagation [117, 118].
                <Figure
                    src="images/tau/tau_spread.png"
                    alt="tau spread"
                    caption="Mechanisms of tau spread"
                    n={1}
                />
                (1) Tau secretion directly through the PM involves clustering of
                tau at the PM, interaction with specific lipids in
                cholesterol/sphingomyelin/PI(4,5)P2-rich membrane microdomains,
                penetration through the PM and release from the PM facilitated
                by cell surface HSPGs. This unconventional tau secretion
                mechanism resembles the secretion of FGF2 (UPS I-like). (2) Tau
                is secreted in ectosomes shed from the PM. Ectosomes are larger
                than exosomes and also differ in their molecular composition.
                After their release from cells, both ectosomes and exosomes
                function similarly and can be fused to or endocytosed by target
                cells. (3) Secretion of tau in exosomes and via organelle
                hitchhiking. Tau can be packed in exosomes by inward budding of
                late endosome membrane leading to formation of intraluminal
                vesicles in multivesicular bodies (MVB) that can be secreted by
                fusion of MVB membrane with the PM. Other organelle hitch-hiking
                (UPS III-like) pathways possibly involved in secretion of tau
                and other misfolded cytosolic proteins include secretory
                endo-lysosomes, related to the autophagy-lysosomal pathway. The
                MAPS pathway promotes secretion of cytosolic misfolded proteins
                by chaperone-mediated capture of misfolded cytosolic proteins to
                the ER, followed by secretion via fusion of endo-lysosomal
                vesicles with the PM releasing vesicle-free tau in the
                extracellular space. (4) Cell-to-cell transfer of tau seeds via
                tunneling nanotubes that directly connect the cytosols of two
                neighboring cell. Regardless of the secretion pathway, tau
                aggregates eventually reach the cytosol of the recipient cells,
                allowing templated seeding of healthy tau molecules into
                misfolded pathological conformations. The recipient cells can
                then propagate the pathology further to other previously
                unaffected cells. It is currently unclear which ones of the
                above mechanisms are involved in synaptic release of tau, and
                whether the synaptic release of physiological and pathological
                forms of tau are mediated by the same mechanism(s)
            </CitationCard>
            <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                depolarization of neurons promotes the release of tau-containing
                exosomes [127].{" "}
                <Hypothesis>
                    There is a correlation between activity and tau spread
                    potentially explaining the AB cascade.
                </Hypothesis>
                it has been suggested that synaptic activity mainly modulates
                non-exosomal secretion of tau, through a mechanism dependent on
                the release of synaptic vesicles [119].
            </CitationCard>
            <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                the pattern of spread is determined by synaptic connectivity
                rather than spatial proximity [131].
            </CitationCard>
            <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                Different mechanisms are also involved in cellular uptake of
                vesicular tau and vesicle-free tau, and this likely affects the
                efficiency of cellular uptake, subcellular localization of
                internalized tau and the overall seeding potency of different
                forms of tau and in different cell types.
                <Conclusion>Quelque chose à creuse ici</Conclusion>
            </CitationCard>
            <CitationCard citations={[bibtex.vogels2020propagation]}>
                1) bulk endocytosis (55), 2) macropinocytosis by heparan sulfate
                proteoglycans (56), and/or 3) clathrin-mediated endocytosis
                (57,58).After tau seeds enter the neuron, they can leak via
                damaged vesicles into the cytosol and seed physiological
                monomers to propagate the pathological process (59,60).
            </CitationCard>
            <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                three scenarios: (1) tau may be secreted in a free,
                non-vesicle-associated form, with a minority secreted in
                vesicles, (2) tau may be secreted exclusively in vesicles, but
                rapidly escaping most of the vesicles, or (3) tau may be
                secreted exclusively in free form, but may associate with
                extracellular vesicles after secretion. scenario (1) seems to be
                the most supported with th release from the PM facilitated by
                binding to heparan sulfate proteoglycans (HSPG) located at the
                extracellular leaflet of the PM. [67, 159]
            </CitationCard>
            <CitationCard citations={[bibtex.vogels2020propagation]}>
                transgenic models have been developed that selectively express
                the transgene in the entorhinal cortex (87,88). These models
                show spreading of human tau to neighboring and synaptically
                connected neurons, albeit only at advanced ages (12–21 months).
                Viral vector models are a practical improvement on transgenic
                spreading models, as they have been shown to induce spreading
                from the entorhinal cortex to the dentate gyrus in as little as
                4 weeks after injection (61).
            </CitationCard>
            <CitationCard citations={[bibtex.braak2018spreading]}>
                Diffusion through volume transmission in non-thalamic nuclei
                leads to widespread, nonspecific effects, inconsistent with AD’s
                precise pattern of tau spread. These subcortical nuclei lack
                specific synaptic structures necessary for tau seeding and
                transsynaptic propagation, meaning they cannot effectively
                transmit tau pathology to other regions.
            </CitationCard>
            <CitationCard citations={[bibtex.braak2018spreading]}>
                They propose 4 stages of tau spread: Phase 1: Tau aggregates in
                isolated distal dendrites. Phase 2: Thread-like tau structures
                extending from basal dendrites around a central, mostly
                tau-negative area. Phase 3: Tau pathology in the cell body and
                part of the apical dendrite. Phase 4: Extensive tau pathology
                throughout the dendritic tree and into the axon.
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{TauSpread.content}</>;

export default TauSpread;
