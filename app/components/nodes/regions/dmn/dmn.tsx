import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import NodeCard from "@/app/components/node-card/node-card";
import SectionTitle from "@/app/components/section-title/section-title";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const Introduction = () => {
    return (
        <div>
            <div>
                DMN: Default Mode Network
                <CitationCard citations={[bibtex.mohan2016dmn]}>
                    is involved in memory consolidation tasks. It composed of
                    the precuneus (Prec), posterior cingulate cortex (PCC),
                    retro-splenial cortex, medial parietal cortex (MPC), lateral
                    parietal cortex (LPC), and inferior parietal cortex (IPC),
                    medial prefrontal cortex (mPFC), and the medial temporal
                    gyrus.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.stam2009graph,
                        bibtex.de2012disruption,
                        bibtex.koelewijn2017alzheimer,
                        bibtex.kocagoncu2020tau,
                    ]}
                >
                    In previous studies, restingstate functional networks have
                    indeed been shown to be altered in AD patients.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.brier2012loss,
                        bibtex.gili2011regional,
                        bibtex.griffanti2015effective,
                    ]}
                >
                    There has been consistent evidence of decreased FC in the
                    DMN of AD patients in comparison with HCs, especially
                    between the posterior part of the cerebral cortex (Prec and
                    PCC) and anterior parts, for example, the anterior cingulate
                    cortex (ACC) and mPFC
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.cha2013functional,
                        bibtex.ouchi2012review,
                    ]}
                >
                    The observed decline in FC in areas within the DMN has also
                    been reported among MCI patients
                </CitationCard>
                <CitationCard citations={[bibtex.zhou2012predicting]}>
                    Zhou et al. identified lateral parietal regions of the DMN
                    as vulnerability hubs for pathological spread in AD
                </CitationCard>
                <CitationCard citations={[bibtex.raj2012network]}>
                    Similar coincidences were reported for DMN structural
                    connectivity and atrophy
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.drzezga2011neuronal,
                        bibtex.iturria2014epidemic,
                        bibtex.myers2014within,
                        bibtex.pasquini2017individual,
                        bibtex.scherr2018decoupling,
                    ]}
                >
                    as well as for DMN FC, hypometabolism, and amyloid-β burden
                </CitationCard>
                <CitationCard citations={[bibtex.sepulcre2016vivo]}>
                    Sepulcre et al. found evidence for network based
                    distribution of both Aβ and tau when relating
                    neuropathological accumulation to gray matter tissue loss
                </CitationCard>
            </div>
        </div>
    );
};

const DMN = new MyNode(
    "Default Mode Network (DMN)",
    [],
    (
        <NodeCard>
            <SectionTitle>Introduction</SectionTitle>
            <Introduction />
            <CitationCard citations={[bibtex.lauterborn2021increased]}>
                baseline DMN activity is increased in AD and fails to deactivate
                during cognitive tasks, suggesting that the DMN is abnormally
                and continuously hyperactive in AD
            </CitationCard>
            <CitationCard citations={[bibtex.canuet2015network]}>
                Consistent with our findings AB plaques disrupt resting-state
                connectivity within the default mode network (Sheline et al.,
                2010; Drzezga et al., 2011)
            </CitationCard>
        </NodeCard>
    )
);

export const Wrapper = () => <>{DMN.content}</>;

export default DMN;
