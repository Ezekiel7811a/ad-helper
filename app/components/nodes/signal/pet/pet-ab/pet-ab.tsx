import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";

export const PetAB = new MyNode(
    "PetAB",
    [],
    (
        <NodeCard>
            <div>
                <CitationCard
                    citations={[
                        bibtex.kepe2013amyloid,
                        bibtex.hoilund2022amyloid,
                    ]}
                >
                    Importantly, the substance or pathobiological process that
                    amyloid-PET tracers, with their different chemical profiles
                    and targeting characteristics,
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.surmak2020probing,
                        bibtex.trudler2021soluble,
                    ]}
                >
                    actually engage in vivo is not clear. Thus, amyloid-PET
                    signals are not an accurate reflection of amyloid in the
                    gray matter, where the disease is located, as they target
                    also inflammatory processes
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.zeydan2019investigation,
                        bibtex.graff2019white,
                        bibtex.weaver2019cerebral,
                        bibtex.pietroboni2022amyloid,
                        bibtex.luo2023longitudinal,
                        bibtex.ottoy2023amyloid,
                    ]}
                >
                    and white matter hyperintensities, where there is no
                    amyloid, as well as myelin and myelin damage.
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.hoilund2023fdg]}>
                    he spill-over from the large white matter signal makes
                    correct quantification of uptake in the narrow gray matter
                    very difficult, if not impossible.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.jacobs2018cerebellum,
                        bibtex.segtnan2019diagnostic,
                        bibtex.provost2021crossed,
                    ]}
                >
                    In addition, all these trials use the standardized uptake
                    value ratio (SUVr) as a measure for amyloid burden, where
                    the ‘r’ indicates normalization with cerebellar activity,
                    but pathology also exists in the cerebellum of these
                    patients
                </CitationCard>
                <CitationCard citations={[bibtex.dumba2019clinical]}>
                    meaning that the effect of these antibodies on amyloid
                    removal cannot be judged from SUVr reduction.
                </CitationCard>
            </div>
            <div>
                <CitationCard
                    citations={[
                        bibtex.sevigny2016antibody,
                        bibtex.klein2019gantenerumab,
                    ]}
                >
                    The few PET images that have so far been published on this
                </CitationCard>
                <CitationCard citations={[bibtex.hoilund2023fdg]}>
                    show a large white matter signal that decreases during
                    treatment, which we believe more likely is due to an almost
                    universal, inflammatory cerebral reaction. This is
                    consistent with the fact that these patients have a greatly
                    increased frequency of the edema-type ARIAs (ARIA-E), which
                    occur early and tend to subside during the course of
                    treatment in most patients, as assessed by MRI.
                </CitationCard>
            </div>
            <CitationCard citations={[bibtex.dubois2014advancing]}>
                amyloid PET is a validated pathophysiological marker for
                fibrillar amyloid, particularly neuritic plaques and amyloid
                angiopathy
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{PetAB.content}</>;

export default PetAB;
