import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Figure from "@/app/components/figure/figure.tsx";
import NodeCard from "@/app/components/node-card/node-card";
import SectionTitle from "@/app/components/section-title/section-title";
import MyTable from "@/app/components/table/table.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const biomarkers = {
    excitatory: ["glutamate"],
    inhibitory: ["GABA", "gamma-aminobutyric acid"],
};

const headers = [
    "Biomarkers",
    "Type",
    "Frequency activity",
    "Amplitude activity (proportion)",
];
const rows = [
    ["Glutamate", "E", "High", "1"],
    ["GABA", "E", "Low", "2-6"],
];

const PredictionBasedOnBiomarkers = () => {
    return (
        <div>
            <span>
                <CitationCard citations={[bibtex.dubois2014advancing]}>
                    Recent studies suggest that CSF markers of Aβ1–42 and tau
                    correlate closely with postmortem Alzheimer’s
                    pathology.55–60 In an autopsy cohort, low CSF Aβ1–42
                    concentrations had a sensitivity of 96·4% for AD detection55
                    and CSF markers significantly increased the diagnostic
                    accuracy in clinically uncertain cases.61 Of CSF markers,
                    P-tau181 concentrations were the most accurate to
                    distinguish AD from non-AD dementias, even in
                    autopsy-confirmed dementia patients.56, 62 A marked
                    reduction in CSF Aβ1–42 and in the Aβ1–42/Aβ1–40 ratio has
                    consistently been noted in patients at different stages of
                    AD.54, 63 However, an isolated low Aβ1–42 is not
                    sufficiently specific to diagnose AD, in view of similar
                    findings in some patients with non-AD dementias (Lewy body
                    disease or vascular dementia), given its presence long
                    before onset of clinical AD, or given AD copathology in
                    patients with Lewy body disease.64 Additionally, Aβ1–42
                    concentrations are particularly sensitive to preanalytical
                    and analytical biases65 and make it difficult to achieve the
                    requisite low coefficient of variation and quality
                    control.66 Numerous studies have shown that a combination of
                    these CSF biomarkers is required because it significantly
                    improves their discriminative accuracy,67–72 but no
                    consensus has been agreed yet as to which specific
                    combination has the greatest utility in AD diagnosis.
                    Individuals with a high ratio of T-tau to Aβ1–42 or of
                    P-tau181 to Aβ1–42 progress to symptomatic cognitive
                    impairment (ie, CDR &gt;0) more quickly than do the
                    remainder of the cohort.67 This result was not observed for
                    Aβ1–42 concentrations alone for the duration of the
                    longitudinal studies (3–5 years) completed to date. The
                    combination of T-tau, Aβ1–42, and P-tau is highly predictive
                    of AD dementia,72–74. In conclusion, Aβ1–42 and tau (T-tau
                    or P-tau) should be used in combination, and the CSF AD
                    signature, which combines low Aβ1–42 and high T-tau or P-tau
                    concentrations, significantly increases the accuracy of AD
                    diagnosis even at a prodromal stage.67,73,77,83,84. of
                    90–95% and a specificity of about 90% in AD.81,85
                </CitationCard>
            </span>
        </div>
    );
};

const Biomarkers = new MyNode(
    "Biomarkers",
    [],
    (
        <NodeCard>
            <ul>
                <li>Excitatory:</li>
                {biomarkers.excitatory.map((excitatory, index) => (
                    <li key={`excitatory-${index}`}>{excitatory}</li>
                ))}
            </ul>
            <ul>
                <li>Inhibitory:</li>
                {biomarkers.inhibitory.map((inhibitory, index) => (
                    <li key={`inhibitory-${index}`}>{inhibitory}</li>
                ))}
            </ul>
            magnetic resonance spectroscopy (MRS) measurements of in vivo
            concentrations of primary excitatory (glutamate) and inhibitory
            (γ-aminobutyric acid, GABA) neurotransmitters.14–17 This approach
            presents several methodological challenges: the relatively low
            signals of glutamate and GABA complicate their interpretation
            because of their overlap with signals from other metabolites, it has
            low temporal and spatial resolution, and their measurements are
            usually restricted to one or few brain regions. For these reasons,
            current MRS approaches have limited utility for tracking variations
            of E/I across cortical regions or behavioral states.
            <CitationCard citations={[bibtex.gao2017inferring]}>
                <MyTable headers={headers} contents={rows} />
            </CitationCard>
            <CitationCard citations={[bibtex.gao2017inferring]}>
                synaptic input fluctuations during the high conductance state
                can be accurately modeled by a summation of two stationary
                stochastic processes representing excitatory and inhibitory
                inputs (Alvarez and Destexhe, 2004).
                <Figure
                    src="images/ei/ei_frequency.png"
                    alt="E:I interaction model"
                    caption="Model schematic: an “LFP population” receives input from two Poisson populations, one excitatory and one inhibitory."
                    n={1}
                />
            </CitationCard>
            <CitationCard citations={[bibtex.maestu2021neuronal]}>
                Tau and Aβ together can have complex effects, with tau further
                silencing neurons even if Aβ is causing hyperactivity,
                suggesting tau can override the excitatory imbalance from Aβ.
            </CitationCard>
            <SectionTitle>Prediction based on biomarkers</SectionTitle>
            <PredictionBasedOnBiomarkers />
        </NodeCard>
    )
);

export const Wrapper = () => <>{Biomarkers.content}</>;

export default Biomarkers;
