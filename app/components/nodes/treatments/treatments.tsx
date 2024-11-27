import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card";
import CitationCard from "@/app/components/citation-card/citation-card";
import bibtex from "@/public/citations/bibtex.json";
import SectionTitle from "../../section-title/section-title";
import Figure from "../../figure/figure";

const Drugs = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                <Figure
                    src="images/treatments/drugs.png"
                    alt="Drugs"
                    caption="Drugs approved in time"
                    n={1}
                />
            </CitationCard>
            <div>
                <CitationCard citations={[bibtex.galimberti2016old]}>
                    Traditional drugs can be categorized in 2 classes: AChEIs
                    (tacrine (3), donepezil (4), rivastigmine (5), galantamine
                    (6)) and NMDA receptor antagonists (memantine (7)).
                </CitationCard>
                <CitationCard citations={[bibtex.masters2015alzheimer]}>
                    AChEIs boost postsynaptic stimulation by increasing both the
                    level and the action duration of ACh, thereby enhancing
                    cognitive and behavioral functions in patients.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.akinciouglu2020potent,
                        bibtex.simunkova2019management,
                    ]}
                >
                    Tacrine (3) was approved for AD treatment in 1993 and pulled
                    from the market in 2013 due to its liver toxicity.
                    Nevertheless, it has potential in the study of
                    multitarget-directed ligands.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.chen2022role,
                        bibtex.thompson2004benefits,
                    ]}
                >
                    Second-generation AChEIs, including donepezil (4),
                    rivastigmine (5), galantamine (6), are more selective. They
                    exhibited fewer side effects or improved pharmacokinetic
                    profiles, establishing them as first-line drugs for AD.
                </CitationCard>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    Memantine (7) is an FDA-approved NMDA receptor antagonist
                    for the treatment of moderate to severe stages of AD. It
                    modulates glutamate transmission and dopamine receptors,
                    exhibiting certain efficacy in improving patients’ cognitive
                    function, daily living abilities, and behavior.409,410
                    Namzaric (8, fixed-dose combination memantine (7)
                    extended-release/donepezil (4)) also provides another
                    treatment option for patients with moderate to severe AD.51
                    These drugs primarily function by modulating
                    neurotransmitter levels but cannot alter the course of the
                    disease,409,411
                </CitationCard>
                <CitationCard citations={[bibtex.cummings2017defining]}>
                    In 2017, a review proposed “disease modifying therapy for
                    AD”, which aims to intervene in the fundamental biological
                    mechanisms to halt the disease’s progression and provide
                    enduring therapeutic benefits to patients.
                </CitationCard>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    Sodium oligomannate (9, GV-971), an oligosaccharide
                    extracted from marine algae, was conditionally approved in
                    China in 2019 amidst ongoing debates regarding its mechanism
                    of action and therapeutic efficacy.54,413 Sodium
                    oligomannate (9, GV-971) was postulated to counteract AD by
                    inhibiting neuroinflammation triggered by gut dysbiosis and
                    disrupting the formation of Aβ fibrils.56,414
                </CitationCard>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    Aducanumab (1) binds to 3-7 amino acids of Aβ, targeting
                    soluble oligomers and insoluble fibrils.418,419 Lecanemab
                    (2), associated with the E22G Aβ,420 showed stronger binding
                    to soluble Aβ aggregates (oligomers and protofibrils) than
                    aducanumab (1).421 Donanemab (10) targets
                    pyroglutamate-modified Aβ, binding specifically to
                    plaques.419 All three have shown efficacy in clearing Aβ
                    plaque and slowing cognitive decline, but the risks of
                    amyloid-related imaging abnormalities (ARIA) and their
                    treatment costs are noteworthy.422–424
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.davis1995tacrine,
                        bibtex.qizilbash1998cholinesterase,
                        bibtex.jarrott2017tacrine,
                        bibtex.watkins1994hepatotoxic,
                        bibtex.de2019tacrines,
                    ]}
                >
                    Tacrine (3) was withdrawn from the market primarily because
                    of its hepatotoxicity.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.birks2018donepezil,
                        bibtex.cui2019donepezil,
                        bibtex.brewster2018classics,
                    ]}
                >
                    such as donepezil (4),
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.feldman2007rivastigmine,
                        bibtex.burns2004efficacy,
                    ]}
                >
                    rivastigmine (5),
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.coyle2001galantamine,
                        bibtex.scott2000galantamine,
                        bibtex.marco2006synthesis,
                    ]}
                >
                    galantamine (6),
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.robinson2006memantine,
                        bibtex.reisberg2003memantine,
                    ]}
                >
                    memantine (7),
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.greig2015memantine,
                        bibtex.deardorff2016fixed,
                    ]}
                >
                    and namzaric (8).
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.sutphen2014progress,
                        bibtex.benek2020perspective,
                    ]}
                >
                    While these drugs can temporarily alleviate or stabilize
                    symptoms, they are unable to stop the long-term progression
                    of the disease and are associated with various side effects.
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    New drugs, including sodium oligomannate (9, GV-971),54–56
                    aducanumab (1),57–59 lecanemab (2),60–62 and donanemab (10,
                    currently under review for market approval),63 which aim to
                    offer disease-modifying therapies that intervene in the
                    progression of AD.
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.van2023lecanemab]}>
                    Recently a new drug has been accepted by the FDA and EMA for
                    AD showing promising results with a 27% reduction in
                    cognitive decline in 18 months of 2/week infusion based on
                    CDR-SB scores.
                </CitationCard>
                <CitationCard citations={[bibtex.espay2024lecanemab]}>
                    After 18 months, the scores increased (worsened) by 1.66
                    points to 4.86 in the placebo arm and by 1.21 to 4.41 in the
                    lecanemab arm, i.e., 0.45 points less decline with
                    lecanemab. For a start, it should be noted that 0.45 is
                    arguably less than half the change patients will typically
                    be able to perceive (Lansdall et al., 2023).
                </CitationCard>
                <CitationCard citations={[bibtex.espay2024lecanemab]}>
                    lecanemab, and donanemab, after 18 months of biweekly
                    infusions, the difference between the curves of people on
                    antibody and those on placebo differed by only half the
                    difference found in the donepezil trial after 6 months. One
                    way to approach this is to divide [X − Y ] by the value of
                    the full scale [18 for the CDR-SB; 144 for Integrated
                    Alzheimer’s Disease Rating Scale (iADRS)]. This translates
                    to a treatment effect of 2.5% (0.45 / 18) for lecanemab and
                    2.3% (3.4 / 144) for donanemab.
                </CitationCard>
                <CitationCard citations={[bibtex.espay2024lecanemab]}>
                    However, these mAb are not safe. In both trials, adverse
                    events afflicted sizable numbers of participants. With
                    lecanemab, 45% of the participants had treatment-related
                    adverse events, with nearly one in four patients developing
                    brain swelling and/or bleeding, which proved to be severe in
                    some persons. Severe bleeding occurred to a greater extent
                    compared with placebo (five vs one in the lecanemab trial;
                    seven vs two in the donanemab trial), including three fatal
                    cases.
                </CitationCard>
                Bleeding/Swelling can occur because of the increased
                inflammation produced by mAb.
            </div>
        </div>
    );
};

const Mechanisms = () => {
    return (
        <div>
            <CitationCard
                citations={[
                    bibtex.cummings2023alzheimer,
                    bibtex.van2021alzheimer,
                    bibtex.elmaleh2019developing,
                    bibtex.zhang2021new,
                ]}
            >
                The major mechanisms of action center around: 1)
                neurotransmitter receptors, including AChE, NMDA receptor,
                5-hydroxytryptamine receptor, nicotinic α7 receptor, and
                adrenoceptor; 2) Aβ, including the reduction of Aβ production
                (such as γ-secretase inhibitors and modulators, BACE1
                inhibitors, and α-secretase activators), prevention of Aβ
                aggregation, and enhancing Aβ clearance (vaccines and
                antibodies); 3) tau proteins (phosphorylation modulators,
                aggregation inhibitors, microtubule stabilizers, antibodies, and
                vaccines); and 4) inflammation (NSAIDs, microglia modulators).
            </CitationCard>
            <CitationCard citations={[bibtex.yang2021structural]}>
                (13, BMS-708163) is an orally administered γ-secretase inhibitor
                that exhibited greater selectivity for APP-C99 compared to
                semagacestat (12, LY450139).
            </CitationCard>
            <CitationCard citations={[bibtex.coric2015targeting]}>
                Phase I studies indicated its effectiveness in reducing Aβ
                levels. However, during a phase II study assessing its safety
                and tolerability in patients with prodromal AD (NCT00890890),
                adverse events including gastrointestinal issues and skin cancer
                were observed in the high-dose treatment group.
            </CitationCard>
            <CitationCard citations={[bibtex.gravitz2011drugs]}>
                Researchers have explored inhibiting β-secretase (BACE1) as an
                alternative to γ-secretase inhibitors due to its higher
                selectivity for APP, aiming to reduce Aβ production.
            </CitationCard>
            <CitationCard
                citations={[
                    bibtex.hrabinova2021twilight,
                    bibtex.neumann2018bace,
                ]}
            >
                Umibecestat (14, CNP520), a fourth-generation BACE1 inhibitor,
                initially showed good safety and tolerability in early clinical
                studies.
            </CitationCard>
            <CitationCard
                citations={[bibtex.jeremic2021past, bibtex.walsh2023outreach]}
            >
                However, two phase II/III trials (NCT02565511 and NCT03131453),
                conducted on older individuals with high risk of AD (carriers of
                the APOE4 allele) but without cognitive impairment, were
                terminated prematurely. This decision was made due to
                observations of mild cognitive decline and brain atrophy in
                participants.
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                Elenbecestat (15, E2609), a fourth-generation BACE1 inhibitors,
                was among the last BACE1 inhibitors to reach phase III clinical
                trials.448 A phase III trial (NCT02956486) assessing
                effectiveness and safety in earlystage AD patients was
                terminated due to an unfavorable
                riskbenefitratio.Morespecifically, literature446,449 indicates
                that the termination was due to the lack of help in cognition
                and the emergence of side effects such as nightmares, weight
                loss, rash, and liver damage.
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                ALZ-801 (16), an orally administered small molecule drug with
                tramiprosate as its active ingredient, exhibited effective
                anti-Aβ oligomer activity without binding to plaques,
                potentially reducing the risk of ARIA associated with plaque
                clearance.450,451 In interim results from its phase II trial
                (NCT04693520), the drug lowered biomarker levels and showed the
                potential to slow the decline in memory and learning abilities
                in early AD patients carrying the APOE4 gene (either APOE4/4 or
                APOE3/4).425
            </CitationCard>
            <CitationCard citations={[bibtex.zhang2024recent]}>
                Varoglutamstat (17, formerly PQ912), the first small molecule
                glutaminyl cyclase inhibitor to enter phase II clinical trials,
                targets an enzyme that catalyzes the conversion of glutamate to
                pyroglutamate at the N-terminus of Aβ.Thismodification results
                in Aβ forms that are more prone to form toxic aggregates.452,453
                In its phase IIa study (NCT03919162), varoglutamstat (17,
                formerly PQ912) demonstrated acceptable safety and tolerability,
                as well as a reduction in working memory decline.454
            </CitationCard>
        </div>
    );
};

const Limits = () => {
    return (
        <div>
            <CitationCard citations={[bibtex.chen2022targeting]}>
                The need to improve the safety and efficacy of drugs through
                innovative drug development techniques, such as selective
                inhibitors,
            </CitationCard>
            <CitationCard
                citations={[bibtex.feng2022dual, bibtex.tan2022development]}
            >
                dual-target inhibitors,
            </CitationCard>
            <CitationCard
                citations={[
                    bibtex.silva2019allosteric,
                    bibtex.wu2015allosteric,
                ]}
            >
                allosteric modulators,
            </CitationCard>
            <CitationCard citations={[bibtex.boike2022advances]}>
                covalent inhibitors,
            </CitationCard>
            <CitationCard citations={[bibtex.he2022protacs]}>
                proteolysis-targeting chimeras (PROTACs)
            </CitationCard>
            <CitationCard
                citations={[bibtex.scott2016small, bibtex.blazer2009small]}
            >
                and protein-protein interaction (PPI) modulators.
            </CitationCard>
        </div>
    );
};

const Feedback = () => {
    return (
        <div>
            <div>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    AChE inhibitors (AChEIs), like donepezil (4), rivastigmine
                    (5), and galantamine (6), which are approved over two
                    decades ago,
                </CitationCard>
                <CitationCard citations={[bibtex.chen2019exploring]}>
                    the limited efficacy and side effects of such drugs, coupled
                    with the presence of noncholinergic groups in AD,
                </CitationCard>

                <CitationCard citations={[bibtex.perry1988acetylcholine]}>
                    and non-specificity in these pathological features,
                </CitationCard>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    challenge the cholinergic hypothesis to fully explain the
                    complex of AD pathology.
                </CitationCard>
            </div>
            <div>
                <CitationCard
                    citations={[
                        bibtex.ayton2021beta,
                        bibtex.makin2018amyloid,
                        bibtex.frisoni2022probabilistic,
                        bibtex.granzotto2023once,
                        bibtex.morris2018questions,
                    ]}
                >
                    Of note, the amyloid cascade hypothesis remains
                    controversial. This theory faces challenges in explaining
                    the diverse pathological features, shows a weak correlation
                    between Aβ and cognitive decline, and has failed to
                    demonstrate efficacy in numerous clinical drugs to target
                    Aβ.
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.ossenkoppele2022tau]}>
                    Despite initial investigations into drugs based on the tau
                    hypothesis not yielding promising results,
                </CitationCard>
                <CitationCard
                    citations={[bibtex.ray2021novel, bibtex.sala2016alzheimer]}
                >
                    numerous treatments are still actively being developed.
                    These include kinase inhibitors, tau aggregation inhibitors,
                    tau immunotherapies, antisense oligonucleotides that inhibit
                    tau production, agents that promote autophagy-mediated
                    degradation, and tau-targeted PROTACs.
                </CitationCard>
            </div>
            <div>
                <CitationCard
                    citations={[
                        bibtex.wong2023revisiting,
                        bibtex.calsolaro2016neuroinflammation,
                    ]}
                >
                    Regarding anti-inflammatory therapies, the effectiveness of
                    nonsteroidal anti-inflammatory drugs (NSAIDs) remains
                    inconclusive.
                </CitationCard>
                <CitationCard
                    citations={[
                        bibtex.leng2021neuroinflammation,
                        bibtex.lecca2022role,
                    ]}
                >
                    Despite this, the primary focuses in the development of
                    anti-inflammatory drugs are appropriate intervention timing
                    and enhancing target specificity.
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.ferreira2015oxidative]}>
                    Antioxidants have emerged as promising agents in AD
                    treatment with positive outcomes observed in animal models.
                </CitationCard>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    Several studies have indicated that standalone treatments or
                    treatments in combination with cholinesterase inhibitors did
                    not confer significant cognitive benefits to patients with
                    AD.
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.chen2023metal]}>
                    metal ion chelators, developed based on this hypothesis,
                    need to overcome challenges such as adverse events and poor
                    blood-brain barrier (BBB) permeability to demonstrate their
                    potential therapeutic value.
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    pharmaceutical validation of the glutamatergic
                    excitotoxicity hypothesis demonstrates the effectiveness of
                    neurotransmitter regulation in improving cognitive symptoms.
                    However, the limitations of neurotransmitter-based
                    medications and the focus on other hypotheses appear to
                    hinder further investigation into the mechanisms of
                    excitotoxicity.
                </CitationCard>
                <CitationCard citations={[bibtex.bi2020gabaergic]}>
                    The observed changes in the inhibitory neurotransmitter
                    system, exemplified by γ-aminobutyric acid,
                </CitationCard>
                <CitationCard citations={[bibtex.zhong2022pathogenesis]}>
                    and the potential for excitotoxicity to alter cognitive
                    levels earlier than Aβ and tau pathologies,209 suggest that
                    excitotoxicity might hold greater potential in AD treatment.
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.ferreiro2023gut]}>
                    Moreover, drugs and biomarkers related to the gut microbiome
                </CitationCard>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    are potentially considered. However, the investigation of
                    this mechanism is still in an early stage.
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    However, the challenges posed by the broad targets of
                    autophagy modulators, and lack of appropriate in vivo
                    autophagic flux detection methods, hinder further clinical
                    applications of these drugs.222,227
                </CitationCard>
            </div>
            <div>
                <CitationCard citations={[bibtex.zhang2024recent]}>
                    Inactivated NF-κB pathways in microglia may reduce the
                    seeding and amplification of tau proteins in microglia, thus
                    rescuing cognitive deficits in young PS19 mouse models, yet
                    the accumulation of tau inclusions in neurons of aged PS19
                    mice warrants further investigation.250
                </CitationCard>
            </div>
        </div>
    );
};

export const Treatments = new MyNode(
    "Treatments",
    [],
    (
        <NodeCard>
            <SectionTitle>Drugs</SectionTitle>
            <Drugs />
            <SectionTitle>Mechanisms</SectionTitle>
            <Mechanisms />
            <SectionTitle>Feedback</SectionTitle>
            <Feedback />
            <SectionTitle>Limits</SectionTitle>
            <Limits />
        </NodeCard>
    )
);

export const Wrapper = () => <>{Treatments.content}</>;

export default Treatments;
