import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import Hypothesis from "@/app/components/hypothesis/hypothesis";
import Conclusion from "@/app/components/conclusion/conclusion";

export const TauAggregation = new MyNode(
    "TauAggregation",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                The ability of tau to aggregate is encoded in its own sequence.
                Especially, two hexapeptides present in the MTBDs (VQIVYK and
                VQIINK) are fundamental for aggregation and formation of the tau
                filaments [36, 43]. One of the hexapeptides (VQIVYK) is present
                in all tau isoforms in the third MTBD, while the other one
                (VQIINK), since it is located in the second MTBD encoded by exon
                10, is only present in the 4R isoforms. This partially explains
                the higher propensity of 4R isoforms to aggregate compared to 3R
                isoforms.
            </CitationCard>
            <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                Tau dimerization, the first step in tau oligomerization, can
                occur through any combination of these two motifs, which form
                the nucleation center where further tau dimers and tau monomers
                can be recruited to eventually constitute oligomers.
            </CitationCard>
            <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                two cysteine residues located in R2 and R3, which form disulfide
                bridges during tau dimerization and which have been found to
                constitute a critical step in the formation of tau fibrils [44].
            </CitationCard>
            <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                Elongated oligomers then acquire a more ordered β-sheet
                structure, and finally form paired helical filaments (PHFs),
                which represent the building blocks of the neurofibrillary
                tangles (NFT) [45].
            </CitationCard>
            <Conclusion>
                Tau models should take into account the possible different mixes
                of tau.
            </Conclusion>
        </NodeCard>
    )
);

export const Wrapper = () => <>{TauAggregation.content}</>;

export default TauAggregation;
