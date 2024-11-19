import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const DnaProtection = new MyNode(
    "DnaProtection",
    [],
    (
        <NodeCard>
            <span>
                <CitationCard citations={[bibtex.kimura2014microtubule]}>
                    as tau knockout mice display impaired long-term depression
                    in the hippocampus.
                </CitationCard>
                <CitationCard citations={[bibtex.camero2014thermodynamics]}>
                    Tau also interacts with nucleic acids and can localize to
                    the nucleus, and upon binding to DNA it promotes DNA
                    stability,
                </CitationCard>
                <CitationCard citations={[bibtex.sultan2011nuclear]}>
                    suggesting that tau may have a role in DNA protection.
                </CitationCard>
            </span>
        </NodeCard>
    )
);

export const Wrapper = () => <>{DnaProtection.content}</>;

export default DnaProtection;
