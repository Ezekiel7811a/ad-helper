import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Figure from "@/app/components/figure/figure.tsx";
import NodeCard from "@/app/components/node-card/node-card";
import SectionTitle from "@/app/components/section-title/section-title";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const AECc = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.schoonhoven2022sensitive]}>
                AEC-c and the phase lag index (PLI). These metrics were selected
                based on their performance in previous work [24, 27, 28], and
                their use in AD literature [11, 29–35].
            </CitationCard>
        </div>
    );
};

const Strengths = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.engel2013intrinsic]}>
                Power envelope correlations have shown a good correlation to
                BOLD signals, which, in turn, have been matched with known
                structural connectivity.
            </CitationCard>
            <CitationCard citations={[bibtex.schoonhoven2022sensitive]}>
                AEC-c has better reproductability than PLI.
            </CitationCard>
        </div>
    );
};

const EnveloppeCorr = new MyNode(
    "Enveloppe Correlation",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.o2015measuring]}>
                <Figure
                    n={0}
                    src="images/signal/enveloppe_coupling.png"
                    alt="enveloppe_coupling"
                    caption="Enveloppe coupling"
                />
                However, a number of significant technical challenges exist, in
                particular the MEG inverse problem (inferring 3D distributions
                of moment to moment change in neural current based only on extra
                cranial magnetic fields) is ill posed (Hadamard 1902). This
                means that estimated timecourses of brain current at spatially
                separate regions are not necessarily independent. As a result,
                estimated functional connectivity between regions can be
                artefactually inflated. This significant confound makes
                connectivity modelling using MEG non-trivial.
            </CitationCard>
            <SectionTitle>Strengths</SectionTitle>
            <Strengths />
            <SectionTitle>AEC-c</SectionTitle>
            <AECc />
        </NodeCard>
    )
);

export const Wrapper = () => <>{EnveloppeCorr.content}</>;

export default EnveloppeCorr;
