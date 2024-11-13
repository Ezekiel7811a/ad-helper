import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import NodeCard from "@/app/components/node-card/node-card";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const tauTracers = [
  <span key={0}>
    <sup>18</sup>F-MK-6240
  </span>,
  <span key={1}>
    <sup>18</sup>F-THK-5351
  </span>,
  <span key={2}>
    <sup>18</sup>F-AV-1451
  </span>,
  <span key={3}>
    <sup>11</sup>C-PBB3
  </span>,
  <span key={4}>
    <sup>18</sup>F-PM-PBB3
  </span>,
  <span key={5}>
    <sup>18</sup>F-PI-2620
  </span>,
];

const tauTracersCaracs = [
  "one of the second-generation tracers that has shown promising results not only in vitro and in animals,29,30 but also in human studies featuring healthy controls as well as subjects with mild cognitive impairment and Alzheimer’s disease.31–33",
  "binding was shown to be significantly modulated by MAOB.10",
  "has been suggested to have limited sensitivity and specificity in non-Alzheimer’s tauopathies.11",
  "has limited utility due to technical issues23,24;",
  "has returned favourable results thus far both in terms of eschewing those limitations25 and potential applications in 3R and 4R tauopathies,26",
  "has shown distinct binding in 4R tauopathies.27",
];

export const PetTau = new MyNode(
  "PetTau",
  [],
  (
    <NodeCard>
      <CitationCard citations={[bibtex.levy202218f]}>
        Developing a reliable tracer is proving to be challenging—in part due to
        the inherent heterogeneity of tau. In fact, there are six different
        isoforms of the tau protein.
        <div>Tau tracers:</div>
        <ul>
          {tauTracers.map((tracer, i) => (
            <li key={i}>
              {tracer}: {tauTracersCaracs[i]}
            </li>
          ))}
        </ul>
        <span>
          <sup>18</sup>F-MK-6240 PET. MK-6240 has exhibited strong specificity
          and sensitivity for tau without the influence of monoamine oxidase
          (MAO).34 While off-target binding to melanin and meninges is notable,
          and mild off-target binding to intraparenchymal haemorrhage is
          observed as well, there is no off-target binding to key brain regions
          such as the basal ganglia as exhibited by certain other tracers.34 A
          large body of pre-existing evidence, including the tracer’s previous
          success in Alzheimer’s disease,31,32 confirms MK-6240 binding to tau
          specifically in the NFT conformation. In fact, the only
          autoradiography study conducted thus far with MK-6240 on human
          post-mortem brain tissue concluded by proposing ‘that MK-6240 strongly
          binds to NFTs in Alzheimer disease but does not seem to bind to a
          significant extent to tau aggregates in nonAlzheimer tauopathies’.34
        </span>
      </CitationCard>
      <CitationCard citations={[bibtex.levy202218f]}>
        However, our findings in amyloid-negative subjects with a P301L MAPT
        mutation (Figs 1A, B,2B and C ) are more difficult to explain. P301L is
        a mutation in exon 10 of the MAPT gene which causes accumulation of 4R
        tau, though 3R tau as well as wild-type tau are also present9; P301L
        neuropathological case series have mainly described mini-Pick bodies,
        twisted tau filaments and pretangles.52,53 As such, whether MK-6240 was
        binding to sparse NFTs in these patients, to pretangles or to something
        else entirely remains ambiguous.
      </CitationCard>
      <CitationCard citations={[bibtex.seibyl2023visual]}>
        <span>
          <sup>18</sup>F-MK-6240 demonstrates homogeneous uptake such that some
          structural features such as the ventricles are visualized but without
          evidence of focal uptake in the neocortex. AD patients show a pattern
          of cortical uptake that is more intense, asymmetric, and focal (13),
          consistent with the distribution of the tau pathology reported in
          postmortem studies (9).
        </span>
      </CitationCard>
    </NodeCard>
  )
);

export const Wrapper = () => <>{PetTau.content}</>;

export default PetTau;
