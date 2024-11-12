import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card.tsx";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { ChallengesInAD } from "@/public/citations";

export const VascularInjury = new MyNode(
  "VascularInjury",
  [],
  (
    <NodeCard>
      <CitationCard citations={[ChallengesInAD]}>
        Altered peripheral metabolism with hyperglycemia and hyperinsulinemia,
        which are cardinal features of type 2 diabetes (T2D), were recently
        found to positively correlate with development of AD-like brain
        pathology in humans (Matsuzaki et al., 2010; Crane et al., 2013).
        Conversely, AD has been associated with increased T2D risk (Janson et
        al., 2004), suggesting that the connection between AD and T2D may
        comprise a two-way road.
      </CitationCard>
      <CitationCard citations={[ChallengesInAD]}>
        Recent studies have shown that AβOs are the toxins linked to impaired
        hippocampal insulin signaling by promoting internalization and cellular
        redistribution of insulin receptors, blocking downstream hippocampal
        insulin signaling (De Felice et al., 2009; Ma et al., 2009; Bomfim et
        al., 2012).
      </CitationCard>
      <CitationCard citations={[ChallengesInAD]}>
        mounting evidence has pointed to inflammation as a critical player
        linking AD and metabolic diseases, including T2D (De Felice and
        Ferreira, 2014; Ferreira et al., 2014; Morales et al., 2014; Heneka et
        al., 2015b). Overproduction of pro-inflammatory cytokines, notably
        TNF-α, is a key feature of the pathophysiology of metabolic disorders
        (Hotamisligil, 2006, 2017).
      </CitationCard>
    </NodeCard>
  )
);

export const Wrapper = () => VascularInjury.content;
