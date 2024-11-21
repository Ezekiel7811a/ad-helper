import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const MCI = new MyNode(
    "Mild Cognitive Impairment (MCI)",
    [],
    (
        <div>
            <CitationCard citations={[bibtex.pusil2019hypersynchronization]}>
                we observed an increment of functional connectivity in those
                patients with MCI that progress to Alzheimer’s disease
                [progressive (p)MCI] compared to those that remained stable
                [stable (s)MCI]. We found two networks, one in the theta band
                and the other one in the beta band, where the functional
                connectivity ratio of the pMCI group was lower than that of the
                sMCI group. These networks involved the frontooccipital cortex
                and fronto-temporal regions including the hippocampus.
            </CitationCard>
            <div>
                <CitationCard citations={[bibtex.arevalo2015mini]}>
                    I refers to a heterogeneous condition and currently 16
                    different classifications are used to define it (Matthews
                    2008; Petersen 1999;Petersen 2004; Winblad 2004). Prevalence
                    of MCI varies widely (between 0.1% and 42%) according to the
                    criteria applied, wi
                </CitationCard>
            </div>
        </div>
    )
);

export const Wrapper = () => <>{MCI.content}</>;

export default MCI;
