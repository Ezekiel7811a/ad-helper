import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const Amyloidogenic = new MyNode(
    "Amyloidogenic",
    [],
    (
        <NodeCard>
            <span>
                <CitationCard
                    citations={[
                        bibtex.lee1998detergent,
                        bibtex.xu1997generation,
                        bibtex.cook1997alzheimer,
                    ]}
                >
                    The Amyloidogenic Pathway (Aβ-forming pathway): In this
                    pathway, β-secretase first cleaves APP, followed by
                    γ-secretase, which produces Aβ fragments. This pathway
                    generates Aβ, which, if accumulated, can aggregate and form
                    plaques commonly associated with Alzheimer’s disease. This
                    happens in subcellular compartments like endoplasmic
                    reticulum/intermediate compartment, and Golgi
                    apparatus/trans-Golgi network
                </CitationCard>
                <CitationCard citations={[bibtex.vassar1999beta]}>
                    APP is proteolyzed by β-secretase
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.zhao2005gamma,
                        bibtex.mori1992mass,
                        bibtex.yan2006abeta42,
                    ]}
                >
                    exposing the N-terminus of Aβ. Then γ-secretase works to
                    generate the C-terminus. The C-terminus ranges from 37 to 49
                    amino acids in length, with Aβ40 (~90%) and Aβ42 (~5-10%)
                    being the most common forms. Aβ42 is more prone to
                    aggregation and is the primary component of amyloid plaques.
                </CitationCard>
            </span>
            <CitationCard citations={[bibtex.forest2018protection]}>
                The hydrophobic C-terminal domains associated with oligomer
                formation are closely associated with neurotoxicity, especially
                at high levels (μmol/L) of Aβ. However, the hydrophilic
                N-terminal domain may mediate the protective action of Aβ at
                physiological levels (pmol/L–nmol/L). It has been found that the
                N-terminal Aβ fragment and shorter Aβ core (Aβ10–15) protect
                against or even reverse the effects of Aβ-induced neurotoxicity,
                memory deficits, and apoptosis.
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{Amyloidogenic.content}</>;

export default Amyloidogenic;
