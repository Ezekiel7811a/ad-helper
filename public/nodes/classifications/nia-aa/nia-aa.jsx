import CitationCard from "@/app/components/citation-card/citation-card";
import MyTable from "@/app/components/table/table";
import { MyNode } from "@/models/node";
import { NIAAA } from "@/public/citations";
const headers = ["Stage"];
const rows = [
    [
        "Cognitively unimpaired: Cognitive performance within expected range for that individual based on all available information (clinical judgement / cognitive performance).",
    ],
    [
        "Mild cognitive impairment (MCI): Cognitive performance below expected range for that individual based on all available information (clinical judgement / cognitive performance) and compared to baseline. Still independent in daily life.",
    ],
    [
        "Dementia: Substantial progressive cognitive impairment that affects several domains and/or neurobehavioral symptoms. (self / observer reported). Not independent in daily life.",
    ],
];
const headersDementia = ["Stage", "Definition"];
const rowsDementia = [
    [
        "1",
        "Performance within expected range on objective cognitive tests. Cognitive test performance may be compared to normative data of the investigators choice, with or without adjustment (the choice of the investigators) for age, sex, education, etc.* Does not report recent decline in cognition or new onset of neurobehavioral symptoms of concern. No evidence of recent cognitive decline or new neurobehavioral symptoms by report of an observer (e.g., study partner) or by longitudinal cognitive testing if available.",
    ],
    [
        "2",
        "Normal performance within expected range on objective cognitive tests. Transitional cognitive decline: Decline in previous level of cognitive function, which may involve any cognitive domain(s) (i.e., not exclusively memory). May be documented through subjective report of cognitive decline that is of concern to the participant. Represents a change from individual baseline within past 1–3 years, and persistent for at least 6 months. May be corroborated by informant but not required. Or may be documented by evidence of subtle decline on longitudinal cognitive testing but not required. Or may be documented by both subjective report of decline and objective evidence on longitudinal testing. Although cognition is the core feature, mild neurobehavioral changes—for example, changes in mood, anxiety, or motivation—may coexist. In some individuals, the primary compliant may be neurobehavioral rather than cognitive. Neurobehavioral symptoms should have a clearly defined recent onset, which persists and cannot be explained by life events.y No functional impact on daily life activities",
    ],
    [
        "3",
        "Performance in the impaired/abnormal range on objective cognitive tests. Evidence of decline from baseline, documented by the individual’s report or by observer (e.g., study partner) report or by change on longitudinal cognitive testing or neurobehavioral behavioral assessments. May be characterized by cognitive presentations that are not primarily amnestic.z Performs daily life activities independently, but cognitive difficulty may result in detectable but mild functional impact on the more complex activities of daily life, that is, may take more time or be less efficient but still can complete, either self-reported or corroborated by a study partner.",
    ],
    [
        "4",
        "Mild dementia Substantial progressive cognitive impairment affecting several domains, and/or neurobehavioral disturbance. Documented by the individual’s report or by observer (e.g., study partner) report or by change on longitudinal cognitive testing. Clearly evident functional impact on daily life, affecting mainly instrumental activities. No longer fully independent/requires occasional assistance with daily life activities.",
    ],
    [
        "5",
        "Moderate dementia Progressive cognitive impairment or neurobehavioral changes. Extensive functional impact on daily life with impairment in basic activities. No longer independent and requires frequent assistance with daily life activities.",
    ],
    [
        "6",
        "Severe dementia Progressive cognitive impairment or neurobehavioral changes. Clinical interview may not be possible. Complete dependency due to severe functional impact on daily life with impairment in basic activities, including basic self-care.",
    ],
];
const NIAAANode = new MyNode("NIA-AA", [], (<div>
      <CitationCard citations={[NIAAA]}>
        The committee designed a 3-range system: normal (0), intermediate (1),
        and abnormal (2).
        <div>
          Table 1. Syndromal staging of cognitive continuum: Applicable to all
          members of a research cohort independent from biomarker profiles
        </div>
        <MyTable headers={headers} contents={rows}/>
        <div>
          Table 2. Staging of cognitive continuum: Applicable only to
          individuals with AD
        </div>
        <MyTable headers={headersDementia} contents={rowsDementia}/>
      </CitationCard>
    </div>));
export default NIAAANode;
