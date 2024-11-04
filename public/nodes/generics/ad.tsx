import { MyNode } from "@/models/node";
import { ClassificationNode } from "./classification";
import CitationCard from "@/app/components/citation-card/citation-card";
import { adReview } from "@/public/citations";

export const AlzheimerNode = new MyNode(
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
    </div>
  )
);
