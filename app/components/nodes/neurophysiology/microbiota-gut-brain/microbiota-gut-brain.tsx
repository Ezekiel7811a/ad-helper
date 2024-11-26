import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const MicrobiotaGutBrain = new MyNode(
    "MicrobiotaGutBrain",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                In recent years, the microbiota-gut-brain axis hypothesis has
                attracted significant attention, unveiling potential pathways
                for novel therapeutic strategies.213
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                The microbiota predominantly consists of bacteria, with smaller
                populations of fungi, viruses, archaea, and protozoa. These
                microorganisms offer trophic and protective effects in
                metabolism and innate immunity and influence brain function via
                the gut-microbiota-brain axis.214–216
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                The microbiota-gut-brain axis refers to a bidirectional
                communication system between the gut and the brain, including
                metabolic, endocrine, neural, and immune pathways that can work
                independently or in concert.213,216
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                Alterations in the host’s diet, use of antibiotics, exposure to
                psychosocial stress, or irregularities in the immune system may
                shift the relative proportions of bacterial species, resulting
                in a disruption of the microbiota’s composition and
                functionality as dysbiosis.214 Subsequently, the intestinal
                epithelial barrier is compromised. Harmful substances and
                microorganisms in the intestinal tract could enter the
                bloodstream, triggering an immune response that may lead to
                systemic inflammation. The onset of systemic inflammation may
                allow inflammatory mediators to cross over the BBB and impact
                microglia, further exacerbating neuroinflammation.213,217
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                This process is accompanied by imbalanced neurotransmission,218
                which ultimately leads to neuronal degeneration and damage.
                Overall, the microbiota-gut-brain axis hypothesis establishes a
                connection between the peripheral immune system and the CNS,
                offering a fresh perspective for AD research.
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{MicrobiotaGutBrain.content}</>;

export default MicrobiotaGutBrain;
