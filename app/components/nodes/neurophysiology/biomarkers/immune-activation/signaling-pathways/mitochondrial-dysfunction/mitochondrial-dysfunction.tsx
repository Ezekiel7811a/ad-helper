import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import Figure from "@/app/components/figure/figure";

export const MitochondrialDysfunction = new MyNode(
    "MitochondrialDysfunction",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                Mitochondria in AD are damaged in various ways, including
                impairments in oxidative phosphorylation, calcium homeostasis,
                mtDNA, mitochondrial fusion and fission, axonal transport, and
                mitophagy. These dysfunctions lead to impaired energy production
                and increased oxidative stress.283
                <Figure
                    src="images/immune/mitochondrial_dysfunction.png"
                    alt="Mitochondrial dysfunction"
                    caption="Mitochondrial dysfunction"
                    n={1}
                />
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{MitochondrialDysfunction.content}</>;

export default MitochondrialDysfunction;
