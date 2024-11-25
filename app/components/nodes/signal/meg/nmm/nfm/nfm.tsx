import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import SectionTitle from "@/app/components/section-title/section-title";

const Introduction = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.byrne2020next]}>
                NFM: neural field model that extends basic neural mass models by
                incorporating spatial interactions across a cortical surface and
                axonal transmission delays.
            </CitationCard>
        </div>
    );
};

const Maths = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.byrne2020next]}>
                Spatial Extent: The model describes activity ( 𝑍 Z and 𝑔 g) not
                at a single point but across a cortical surface ( 𝑟 r), where 𝑟
                r could represent a 1D or 2D position on the cortical sheet.
            </CitationCard>
        </div>
    );
};

export const NFM = new MyNode(
    "NFM",
    [],
    (
        <NodeCard>
            <SectionTitle>Introduction</SectionTitle>
            <Introduction />
            <SectionTitle>Maths</SectionTitle>
            <Maths />
        </NodeCard>
    )
);

export const Wrapper = () => <>{NFM.content}</>;

export default NFM;
