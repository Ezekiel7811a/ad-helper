import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const SynapticTransmission = new MyNode(
    "SynapticTransmission",
    [],
    (
        <NodeCard>
            <CitationCard citations={[]}>
                Partie 2 : Transmission synaptique Comment les neurones
                communiquent-ils ? : Expliquer la synapse (chimique et
                électrique). Rôle des neurotransmetteurs dans la transmission du
                signal. Synapses et modèles dynamiques : Introduisez la notion
                de modèle de réseau : comment plusieurs neurones interagissent.
                Utilisez un graphe simple pour illustrer une connexion.
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{SynapticTransmission.content}</>;

export default SynapticTransmission;
