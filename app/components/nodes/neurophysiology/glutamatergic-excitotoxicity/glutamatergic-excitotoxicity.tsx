import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const GlutamatergicExcitotoxicity = new MyNode(
    "GlutamatergicExcitotoxicity",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                lutamate is the main excitatory neurotransmitter of
                glutamatergic neurotransmission in the CNS.206 Their receptors
                comprise ionotropic glutamate receptors, including NMDA
                receptors, αamino-3-hydroxy-5-methyl-4-isoxazole propionic acid
                (AMPA) receptors, and kainate receptors, as well as metabotropic
                glutamate (mGlu) receptors.207
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                Glutamate mainly interacts with NMDA receptors to control the
                influx of sodium and calcium to neurons. Magnesium ions act to
                shut the NMDA receptor’s cationic channel and block the entry of
                ions into neurons under physiological conditions. However, in
                AD, there is an overstimulation of NMDA receptors, which results
                in the dislodgement of magnesium and permits an excessive entry
                of sodium and calcium ions.208,209
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                The entry of sodium into neurons causes their temporary
                swelling, while an increase in calcium levels initiates various
                Ca2+-dependent processes. These processes include the creation
                of ROS, disruption of mitochondrial function, and the activation
                of necrotic/apoptotic pathways, ultimately resulting in
                permanent excitotoxic damage to the neurons.210,211
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{GlutamatergicExcitotoxicity.content}</>;

export default GlutamatergicExcitotoxicity;
