import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import SectionTitle from "@/app/components/section-title/section-title";

const Alternatives = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.davis2013neuropsychological]}>
                Alternatives: Montreal Cognitive Assessment (MoCA)
            </CitationCard>
            <CitationCard
                citations={[
                    bibtex.chan2019mini,
                    bibtex.fage2015mini,
                    bibtex.seitz2014mini,
                ]}
            >
                and the Mini-Cog test.
            </CitationCard>
        </div>
    );
};

const Comparision = () => {
    return (
        <div>
            <CitationCard
                citations={[
                    bibtex.hu2013cross,
                    bibtex.freitas2013montreal,
                    bibtex.kaya2014validation,
                ]}
            >
                Studies have demonstrated that the culturally and linguistically
                adapted versions of the MoCA are superior to the MMSE in
                screening for MCI.
            </CitationCard>
        </div>
    );
};

export const CognitiveTests = new MyNode(
    "CognitiveTests",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.van2004bias]}>
                Culture may affect the validity of the cognitive tests used to
                identify MCI through biases related to the test or
                administration. For instance, where the construct an item is
                measuring is ambiguous due to poor translation or lack of
                cultural equivalent, or where there is unfamiliarity with both
                testing and stimuli or the related skill does not exist within a
                cultural repertoire.
            </CitationCard>
            <CitationCard citations={[bibtex.o2017cross]}>
                At least in MoCA the use of universal cut-offs also leads to a
                sampling bias (i.e. sample for which the cut off was established
                does not match with the individual being assessed) which, if
                uncontrolled, leads to false conclusions about an individual’s
                cognitive ability.
            </CitationCard>
            <SectionTitle>Alternatives</SectionTitle>
            <Alternatives />
            <SectionTitle>Comparision</SectionTitle>
            <Comparision />
        </NodeCard>
    )
);

export const Wrapper = () => <>{CognitiveTests.content}</>;

export default CognitiveTests;
