import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const NeuronalNet = new MyNode(
    "NeuronalNet",
    [],
    (
        <NodeCard>
            <CitationCard citations={[]}>
                Partie 3 : Dynamique des réseaux neuronaux Qu’est-ce qu’un
                réseau neuronal ? Connectivité entre neurones, réseau
                excitateur/inhibiteur. Lien avec les rythmes cérébraux (alpha,
                bêta, gamma). Modélisation mathématique des réseaux : Concepts
                de base des équations différentielles couplées. Exemple simple :
                un petit réseau excitateur-inhibiteur. Application pratique :
                Comment ces modèles aident à comprendre des phénomènes comme
                l’épilepsie ou les rythmes cérébraux dans le sommeil.
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{NeuronalNet.content}</>;

export default NeuronalNet;
