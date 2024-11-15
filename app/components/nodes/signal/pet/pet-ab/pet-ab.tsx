import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const PetAB = new MyNode(
    "PetAB",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.hoilund2023fdg]}>
                Importantly, the substance or pathobiological process that
                amyloid-PET tracers, with their different chemical profiles and
                targeting characteristics [18,19], actually engage in vivo is
                not clear. Thus, amyloid-PET signals are not an accurate
                reflection of amyloid in the gray matter, where the disease is
                located, as they target also inflammatory processes [52,53] and
                white matter hyperintensities, where there is no amyloid, as
                well as myelin and myelin damage [54–59].
            </CitationCard>
            <CitationCard citations={[bibtex.hoilund2023fdg]}>
                he spill-over from the large white matter signal makes correct
                quantification of uptake in the narrow gray matter very
                difficult, if not impossible (Figure 1). In addition, all these
                trials use the standardized uptake value ratio (SUVr) as a
                measure for amyloid burden, where the ‘r’ indicates
                normalization with cerebellar activity, but pathology also
                exists in the cerebellum of these patients [60–62] meaning that
                the effect of these antibodies on amyloid removal cannot be
                judged from SUVr reduction [63].
            </CitationCard>
            <CitationCard citations={[bibtex.hoilund2023fdg]}>
                The few PET images that have so far been published on this
                [64,65] show a large white matter signal that decreases during
                treatment, which we believe more likely is due to an almost
                universal, inflammatory cerebral reaction. This is consistent
                with the fact that these patients have a greatly increased
                frequency of the edema-type ARIAs (ARIA-E), which occur early
                and tend to subside during the course of treatment in most
                patients, as assessed by MRI.
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{PetAB.content}</>;

export default PetAB;
