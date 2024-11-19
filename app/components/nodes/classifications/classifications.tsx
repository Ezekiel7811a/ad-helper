import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Figure from "@/app/components/figure/figure.tsx";
import Hypothesis from "@/app/components/hypothesis/hypothesis.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";
import NodeCard from "../../node-card/node-card";

const Classifications = new MyNode(
    "Classifications",
    [],
    (
        <NodeCard>
            <CitationCard citations={[bibtex.sperling2011toward]}>
                individuals without overt symptoms, called “preclinical AD”.
            </CitationCard>
            <span>
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
                    tomography (PET) is a valid in vivo surrogate for Ab
                    deposits (in brain parenchyma/vessel walls).
                </CitationCard>
                <CitationCard citations={[bibtex.ossenkoppele2012longitudinal]}>
                    Itis also now widely accepted that CSF Aß42 (or the Ab42/
                    Aß40 ratio) is a valid indicator of the abnormal pathologic
                    state associated with cerebral Aß.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.clark2012cerebral,
                        bibtex.ikonomovic2016post,
                        bibtex.murray2015clinicopathologic,
                    ]}
                >
                    An additional development has been the introduction of PET
                    ligands for pathologic tau.
                </CitationCard>
                <CitationCard citations={[bibtex.chhatwal2016temporal]}>
                    MRI, FDG-PET, and CSF total tau (T-tau)—are not specific for
                    AD but rather are nonspecific indicators of damage that may
                    derive from a variety of etiologies, for example,
                    cerebrovascular injury.
                </CitationCard>
            </span>
            <CitationCard citations={[bibtex.knopman2018national]}>
                <Figure
                    src="images/classifcation/classification.png"
                    alt="Classification problem"
                    caption="Interaction of ATN features"
                    n={1}
                />
                <Figure
                    src="images/classifcation/atn_niaaa.png"
                    alt="ATN X NIA-AA"
                    caption="Biomarkers interactions with NIA-AA"
                    n={2}
                />
            </CitationCard>
            <CitationCard citations={[bibtex.knopman2018national]}>
                Comparision NIA-AA with IWG: The International Working Group
                (IWG) also incorporates biomarkers in AD diagnosis but requires
                cognitive symptoms alongside biomarkers for diagnosis (except
                for genetic AD). Unlike NIA-AA’s purely biological model, IWG
                initially required clinical symptoms to define AD. However,
                IWG’s 2016 update included asymptomatic individuals with both
                abnormal Aβ and tau biomarkers in the AD category, aligning more
                closely with NIA-AA’s biologic definition.
            </CitationCard>
            <CitationCard citations={[bibtex.knopman2018national]}>
                Alzheimer’s clinical syndrome rather than probable AD when
                describing syndromes without biomarker evidence
            </CitationCard>
            <Hypothesis>
                <Figure
                    src="images/causality/causal_hypothesis.png"
                    alt="Hypothesis"
                    caption="The possible causalities of the biomarkers"
                    n={1}
                />
            </Hypothesis>
            <span>
                <CitationCard citations={[bibtex.plassman2008prevalence]}>
                    he prevalence of cognitive impairment without dementia as
                    22% in people aged 71 years or older.
                </CitationCard>
                <CitationCard citations={[bibtex.arevalo2015mini]}>
                    10% to 15% of individuals with MCI may progress to dementia,
                </CitationCard>
            </span>
        </NodeCard>
    )
);

export const Wrapper = () => <>{Classifications.content}</>;

export default Classifications;
