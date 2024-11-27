import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const ActionPotential = new MyNode(
    "ActionPotential",
    [],
    (
        <NodeCard>
            <CitationCard citations={[]}>
                Partie 1 : Les bases des potentiels d&apos;action Structure d’un
                neurone : Corps cellulaire, axone, synapse. Rôle des ions Na + +
                , K + + , et des canaux ioniques. Potentiel d’action expliqué
                simplement : Dépolarisation, repolarisation, et potentiel de
                repos. Utilisez une analogie simple, comme une vague ou un
                domino. Lien mathématique : Présentez l’équation de
                Hodgkin-Huxley (sans entrer dans tous les détails). Expliquez
                l&apos;idée de base : des équations différentielles qui
                décrivent les variations de tension.
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{ActionPotential.content}</>;

export default ActionPotential;
