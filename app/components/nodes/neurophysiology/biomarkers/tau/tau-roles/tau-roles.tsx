import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const TauRoles = new MyNode(
    "TauRoles",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                The proline-rich domain occupies the central portion of tau from
                residue 151–243. It represents the most disordered part of the
                protein and serves as an interaction site for Src homology-3
                (SH3) proteins, in particular the Fyn kinase [26], as well as an
                interaction site for DNA and RNA [27, 28].
            </CitationCard>
            <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                It is also possible that tau localized at the PM occupies a role
                as a signaling regulator, via its interaction with membrane
                receptors [19, 20].
            </CitationCard>
            <CitationCard citations={[bibtex.brunello2020mechanisms]}>
                Synaptic tau has been reported to be involved in synaptic
                development of newborn hippocampal neurons [14].
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{TauRoles.content}</>;

export default TauRoles;
