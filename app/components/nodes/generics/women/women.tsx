import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const Women = new MyNode(
    "Women",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.frozza2018challenges]}>
                Nonetheless, it is now accepted that the perimenopause to
                menopause transition disrupts multiple estrogen-regulated
                systems, thereby affecting multiple domains of cognitive
                function (Brinton et al., 2015; Christensen and Pike, 2015).
                Indeed, recent preclinical studies have implicated that a shift
                in the bioenergetics system of the brain during menopause onset
                could serve as an early initiating mechanism for increased AD
                risk in the female brain (Brinton et al., 2015; Mosconi et al.,
                2017a,b). These biological variables may lead to increased fatty
                acid catabolism, Aβ deposition, and impaired synaptic plasticity
                (Liu et al., 2008; Brinton, 2009; Yao and Brinton, 2012), which
                could serve as a mechanism that triggers AD (Brinton et al.,
                2015).
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{Women.content}</>;

export default Women;
