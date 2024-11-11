import { MyNode } from "@/models/node";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { adReview, NIAAA } from "@/public/citations";

const AlzheimerNode = new MyNode(
  "Alzheimer's Disease",
  [],
  (
    <div>
      <CitationCard citations={[adReview]}>
        {`Alzheimer disease (AD) is biologically defined by the presence of
        β-amyloid-containing plaques and tau-containing neurofibrillary tangles.
        AD is a genetic and sporadic neurodegenerative disease that causes an
        amnestic cognitive impairment in its prototypical presentation and
        non-amnestic cognitive impairment in its less common variants. AD is a
        common cause of cognitive impairment acquired in midlife and late-life
        but its clinical impact is modified by other neurodegenerative and
        cerebrovascular conditions. This Primer conceives of AD biology as the
        brain disorder that results from a complex interplay of loss of synaptic
        homeostasis and dysfunction in the highly interrelated
        endosomal/lysosomal clearance pathways in which the precursors,
        aggregated species and post-translationally modified products of Aβ and
        tau play important roles. Therapeutic endeavours are still struggling to
        find targets within this framework that substantially change the
        clinical course in persons with AD.`}
      </CitationCard>
      <CitationCard citations={[NIAAA]}>
        From 10% to 30% of individuals clinically diagnosed as AD dementia by
        experts do not display AD neuropathologic changes at autopsy [50], and a
        similar proportion has normal amyloid PET or CSF Ab42 studies [53–62].
        especially in older persons. Thirty to forty percent of cognitively
        unimpaired (CU) elderly persons have AD neuropathologic changes at
        autopsy [67–69], and a similar proportion has abnormal amyloid
        biomarkers [33,53–55,60,70–73].
      </CitationCard>
    </div>
  )
);

export const Wrapper = () => <>{AlzheimerNode.content}</>;

export default AlzheimerNode;
