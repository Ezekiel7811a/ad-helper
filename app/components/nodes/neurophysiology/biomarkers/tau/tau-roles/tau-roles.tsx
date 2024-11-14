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
        </NodeCard>
    )
);

export const Wrapper = () => <>{TauRoles.content}</>;

export default TauRoles;
