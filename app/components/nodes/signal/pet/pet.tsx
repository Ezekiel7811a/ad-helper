import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import NodeCard from "@/app/components/node-card/node-card";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const PET = new MyNode(
    "PET",
    [],
    (
        <NodeCard>
            <CitationCard
                citations={[
                    bibtex.hoilund2019global,
                    bibtex.hoilund2020atherosclerosis,
                ]}
            >
                PET can detect disease earlier (weeks, months, years) than CT
                and MRI, i.e., when the disease is hypothesized to be more
                sensitive to therapy. Furthermore, PET is inherently
                quantitative, meaning that it can in principle measure not only
                focal disease activity but also the overall disease burden in an
                organ or in the body and monitor change in this as a measure of
                therapy efficacy.
            </CitationCard>
            <CitationCard citations={[bibtex.basu2014basic]}>
                PET scans do not provide a snapshot, but a quantifiable “movie”
                with high time resolution of the physiological or
                pathophysiological process to which the body exposes the tracer
                in question.
            </CitationCard>
            <CitationCard citations={[bibtex.knopman2018national]}>
                Tau PET: This emerging imaging modality targets PHF tau deposits
                in the brain but faces limitations, such as off-target binding.
                The first-generation ligand, flortaucipir, is a reliable marker
                for 3R/4R PHF tau, correlating with Braak staging and cognitive
                impairment. Newer ligands are in development to improve
                specificity and reduce off-target effects. Tau PET and CSF P-tau
                cannot detect minimal neurofibrillary changes, impacting the
                diagnostic distinction between “Alzheimer’s pathologic change”
                and full AD.
            </CitationCard>
            <CitationCard citations={[bibtex.knopman2018national]}>
                Amyloid PET: Sensitivity thresholds are set by typical cut
                points for PET ligands. For example: 18F Amyloid PET: Labels
                moderate to high neuritic plaque loads as abnormal but may miss
                low plaque levels. 11C Pittsburgh Compound B: Categorizes
                individuals with Thal phase 2–5 as abnormal, potentially missing
                early plaque stages (Thal 0–1). Consequently, a negative amyloid
                PET does not necessarily indicate a complete absence of
                amyloid-beta (Aβ) or neuritic plaques, as subtle pathologic
                changes can still occur below detection thresholds, sometimes
                causing mild cognitive effects.
            </CitationCard>
            <CitationCard
                citations={[
                    bibtex.mormino2014synergistic,
                    bibtex.jack2017age,
                    bibtex.jack2017defining,
                    bibtex.jagust2009relationships,
                    bibtex.landau2013comparing,
                    bibtex.leuzy2016pittsburgh,
                    bibtex.palmqvist2014accuracy,
                    bibtex.zwan2014concordance,
                ]}
            >
                Biomarkers of AD: CSF biomarkers are valid proxies for
                neuropathologic changes of AD. Imaging-to-autopsy comparison
                studies have established that amyloid positron emission
                tomography (PET) is a valid in vivo surrogate for Ab deposits
                (in brain parenchyma/vessel walls).
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{PET.content}</>;

export default PET;
