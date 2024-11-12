import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card.tsx";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { ChallengesInAD } from "@/public/citations";

export const AbCascade = new MyNode(
  "AbCascade",
  [],
  (
    <NodeCard>
      <CitationCard citations={[ChallengesInAD]}>
        The amyloid cascade hypothesis suggests that brain accumulation of the
        amyloid-β peptide (Aβ), produced by sequential cleavage of the amyloid
        precursor protein (APP) by the β- and γ-secretase enzymes, is a central
        event in AD (Karran et al., 2011; Selkoe and Hardy, 2016). Soluble Aβ
        undergoes conformational changes to high β-sheet content, rendering it
        prone to aggregation into polymeric forms, including soluble oligomers
        and larger insoluble fibrils. These fibrils ultimately deposit into
        extracellular amyloid plaques in the AD brains (Stine et al., 2003;
        Blennow et al., 2006; Finder and Glockshuber, 2007; Lee et al., 2007).
        Aβ is physiologically degraded by the peptidases insulindegrading
        enzyme, neprilysin, and by endothelin-converting enzyme (Qiu et al.,
        1998; Iwata et al., 2001; Farris et al., 2003; Leissring et al., 2003).
        In addition, Aβ can be cleared out by transportation to peripheral
        circulation across multiple pathways, including the blood-brain barrier,
        interstitial fluid bulk flow, arachnoid villi, and glymphatic-lymphatic
        pathways (Tarasoff-Conway et al., 2015). Additionally, Aβ aggregates can
        be phagocited and degraded by microglia, perivascular macrophages, and
        astrocytes. Defective clearing systems could thus lead to an imbalance
        between production and clearance of Aβ in the brain, thereby resulting
        in subsequent neuronal dysfunction and neurodegeneration (Hardy, 2002).
        A growing body of evidence indicates, however, that plaque deposition is
        not the sole responsible for the impairments observed in AD. On the
        other hand, the notion that Aβ oligomers (AβOs) are the main toxins
        responsible for synapse dysfunction and cognitive deficits in AD has
        attracted considerable attention to improve our understanding of the
        mechanisms of the disease (Walsh and Selkoe, 2007; Selkoe, 2008;
        Ferreira and Klein, 2011; Ferreira et al., 2015; Yang et al., 2017). In
        this context, plaques have been thought to comprise a reservoir from
        which AβOs diffuse, or may even act sequestering soluble oligomers until
        they reach a physiological plateau (Selkoe and Hardy, 2016). A
        considerable number of studies has reported that AβOs accumulate in the
        brain and CSF of AD patients (Georganopoulou et al., 2005; Haes et al.,
        2005; Anker et al., 2009; Xia et al., 2009; Herskovits et al., 2013;
        Viola et al., 2014; Murakami et al., 2016), and are found in association
        with synapses in the brains of patients presenting clinical signals of
        dementia (Koffie et al., 2009; Bjorklund et al., 2012; Perez-Nievas et
        al., 2013; Bilousova et al., 2016), adding clinical relevance to their
        role in AD. These studies suggest that synapse-associated AβOs promote
        detrimental modifications in synapse structure and composition, thereby
        leading to memory loss. This growing body of evidence props up an early
        notion that cognitive decline is not only a result of the extracellular
        accumulation of Aβ and intracellular accumulation of tau but also as a
        consequence of synapse failure and loss in AD (Terry et al., 1991;
        Masliah et al., 1992; Selkoe, 2002). Despite intense research, the exact
        mechanisms of how AβOs exert their toxicity remains to be fully
        unveiled. Binding of Aβ aggregates to various receptors may disrupt key
        neuronal functions. However, the complete identity of receptors to which
        they bind and the underlying signaling pathways still remain to be fully
        elucidated (Ferreira et al., 2015). We now know that AβOs bind to cell
        surface receptors and trigger multiple aberrant signaling pathways,
        including calcium signaling (Mattson, 2010; Ferreira et al., 2015),
        oxidative stress (Smith et al., 1998; Perry et al., 2002; De Felice et
        al., 2007), derangements in plasticity-related receptors and increased
        glutamate release from pre-synaptic terminals (Roselli et al., 2005;
        Shankar et al., 2007; Decker et al., 2010a; Ferreira et al., 2015). In
        addition, they promote tau hyperphosphorylation (De Felice et al., 2008;
        Jin et al., 2011), impaired axonal transport (Snyder et al., 2005;
        Decker et al., 2010b; Miñano-Molina et al., 2011; Bomfim et al., 2012),
        and drive inhibition of long-term potentiation (LTP) and memory
        impairment (Rowan et al., 2005; Shankar et al., 2008; Ferreira and
        Klein, 2011; Ferreira et al., 2015; Yang et al., 2017).
      </CitationCard>
    </NodeCard>
  )
);

export const Wrapper = () => AbCascade.content;
