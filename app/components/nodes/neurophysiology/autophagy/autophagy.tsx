import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const Autophagy = new MyNode(
    "Autophagy",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                Autophagy, a highly conserved metabolic degradation process,
                maintains cellular homeostasis by delivering intracellular
                protein aggregates and damaged organelles to lysosomes for
                degradation and recycling.220,221
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                It primarily occurs via three types: microautophagy,
                chaperone-mediated autophagy, and macroautophagy (commonly
                referred to as autophagy).222 Microautophagy is the simplest
                pathway in which cytoplasmic substrates enter vesicles formed by
                morphological changes in lysosomal or endosomal membranes, and
                are ultimately degraded within the lysosome.220,223,224
                Chaperone-mediated autophagy involves chaperone proteins
                recognizing and binding to specific protein sequences
                (KFERQ-like motifs), facilitating substrate transfer to
                lysosomes through interactions with lysosomal membrane proteins
                (LAMP2A).224–226 Macroautophagy, the main subtype, is primarily
                regulated by mTORC1 for activating the unc-51-like autophagy
                activating kinase 1 (ULK1) complex and dephosphorylating
                transcription factor EB (TFEB) to induce autophagy. Under the
                regulation of autophagy-related protein complexes, a phagophore
                forms and gradually expands to a sealed autophagosome. The
                autophagosomes then move retrogradely along microtubules to the
                microtubule organizing center, which is rich in lysosomes. They
                fuse with lysosomes to form autolysosomes, where substrate
                degradation occurs. In certain instances, autophagosomes could
                first merge with endosomes to form amphisomes, which then fuse
                with lysosomes.222,224,227–229 However, the abundant
                accumulation of autophagic vacuoles in swollen (malnourished)
                neurons is observed to have a linkage with Aβ/ APP-βCTF,
                suggesting that autophagy clearance is severely disrupted under
                pathological conditions and is closely linked to amyloid
                pathology.115,225,230 This makes autophagy a focal point in
                recent AD pathogenesis research. There is increasing evidence
                indicating that genetic factors, reduced expression of related
                proteins, and defective vesicular transportation are potential
                causes of autophagy pathway disruptions. These disruptions
                interfere with clearance mechanisms involving substrate
                engulfment, autophagosome formation, autophagosome-lysosome
                fusion, and lysosomal structure and function.227,229 In AD,
                autophagy defects mediate the disruption of protein homeostasis
                networks (production and extracellular secretion of Aβ, abnormal
                aggregation of tau protein) and lead to the accumulation of
                damaged organelles, such as dysfunctional mitochondria.231 In
                summary, abnormalities of autophagy are intimately related to
                the onset and progression of AD. There is a growing emphasis on
                the involvement of chaperone-mediated autophagy,232
                contributions of glial cell autophagy,233,234 and the precise
                causes of mitochondrial autophagy disorders.235
                Autophagy-stimulating drugs including small molecule therapies
                and gene therapies, have shown significant neuroprotective
                potential in various AD animal models, suggesting a potential
                intervention option.220,222,231,236,237
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{Autophagy.content}</>;

export default Autophagy;
