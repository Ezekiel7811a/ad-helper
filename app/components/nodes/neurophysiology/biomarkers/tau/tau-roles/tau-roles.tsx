import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const TauRoles = new MyNode(
    "TauRoles",
    [],
    (
        <NodeCard>
            <span>
                <CitationCard citations={[bibtex.morris2011many]}>
                    The proline-rich domain occupies the central portion of tau
                    from residue 151–243. It represents the most disordered part
                    of the protein and serves as an interaction site for Src
                    homology-3 (SH3) proteins, in particular the Fyn kinase,
                </CitationCard>
            </span>
            <CitationCard
                citations={[
                    bibtex.quintanilla2009caspase,
                    bibtex.wang2006proline,
                ]}
            >
                as well as an interaction site for DNA and RNA.
            </CitationCard>
            <CitationCard
                citations={[
                    bibtex.gomez2008extracellular,
                    bibtex.cardona2006estrogen,
                ]}
            >
                It is also possible that tau localized at the PM occupies a role
                as a signaling regulator, via its interaction with membrane
                receptors.
            </CitationCard>
            <CitationCard citations={[bibtex.pallas2016novel]}>
                Synaptic tau has been reported to be involved in synaptic
                development of newborn hippocampal neurons.
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{TauRoles.content}</>;

export default TauRoles;
