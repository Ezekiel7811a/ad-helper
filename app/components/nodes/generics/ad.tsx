import { MyNode } from "@/models/node";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import bibtex from "@/public/citations/bibtex.json";
import NodeCard from "../../node-card/node-card.tsx";

const AlzheimerNode = new MyNode(
  "Alzheimer's Disease",
  [],
  (
    <NodeCard>
      <CitationCard citations={[bibtex.knopman2021alzheimer]}>
        Alzheimer disease (AD) is biologically defined by the presence of
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
        clinical course in persons with AD.
      </CitationCard>
      <CitationCard citations={[bibtex.knopman2018national]}>
        From 10% to 30% of individuals clinically diagnosed as AD dementia by
        experts do not display AD neuropathologic changes at autopsy [50], and a
        similar proportion has normal amyloid PET or CSF Ab42 studies [53–62].
        especially in older persons. Thirty to forty percent of cognitively
        unimpaired (CU) elderly persons have AD neuropathologic changes at
        autopsy [67–69], and a similar proportion has abnormal amyloid
        biomarkers [33,53–55,60,70–73].
      </CitationCard>
      <CitationCard citations={[bibtex.dubois2024alzheimer]}>
        Recent studies suggested that the clinical diagnosis of AD can be made
        with the biomarkers alone. the development of emerging biomarkers of
        copatholo- gies, eg, α-synuclein, TDP-43, and others in the future,
        could result in the diagnosis of 2, 3, or more different
        neurodegenerative diseases in a cognitively normal person, as a norm.
        IWG does not support the use of biomarkers alone for the diagnostis. The
        combination of common (amnestic syndrome of the hippo- campal type,
        logopenic aphasia, posterior cortical atrophy) or uncommon (corticobasal
        syndrome, behavioral and dysexecutive variants) clinical phenotypes and
        the positivity of pathophysiologi- cal amyloid and tau biomarkers
        establishes the diagnosis of AD.
      </CitationCard>
      <CitationCard citations={[bibtex.frozza2018challenges]}>
        as disease progresses, other debilitating non-cognitive symptoms arise,
        including impaired sleep and appetite, and neuropsychiatric alterations
        (e.g., depression and apathy) (Ishii and Iadecola, 2015; Lanctôt et al.,
        2017).
      </CitationCard>
      <CitationCard citations={[bibtex.frozza2018challenges]}>
        pathophysiological changes begin to develop decades prior to initial
        cognitive symptoms, in a preclinical or presymptomatic stage (Sperling
        et al., 2011a,b).
      </CitationCard>
      <CitationCard citations={[bibtex.frozza2018challenges]}>
        Although advances in animal and clinical research over the past few
        decades have improved our knowledge on the pathophysiological course of
        AD, even drugs with successful preclinical assessment have not been
        effective in reversing or slowing down AD progression in large clinical
        trials. These constraints may be due to that clinical trials have
        predominantly focused on therapies based on anti-amyloid strategies,
        since the amyloid cascade hypothesis has been placed at the center of
        therapeutic prospection (Karran et al., 2011; Cummings et al., 2014;
        Hendrix et al., 2016).
      </CitationCard>
    </NodeCard>
  )
);

export const Wrapper = () => <>{AlzheimerNode.content}</>;

export default AlzheimerNode;
