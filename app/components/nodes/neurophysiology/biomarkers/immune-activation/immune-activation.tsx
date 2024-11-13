import { MyNode } from "@/models/node";
import NodeCard from "@/app/components/node-card/node-card.tsx";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import bibtex from "@/public/citations/bibtex.json";

export const ImmuneActivation = new MyNode(
  "ImmuneActivation",
  [],
  (
    <NodeCard>
      <CitationCard citations={[bibtex.frozza2018challenges]}>
        AD pathogenesis appears to include strong interactions with immune
        mechanisms in the brain. AβOs induce aberrant reactivity of astrocytes
        and microglia, in the brains of mice and non-human primates (Bomfim et
        al., 2012; Ledo et al., 2013, 2016; Forny-Germano et al., 2014). Recent
        studies have further unveiled that disturbances in microglia, as well as
        interactions with peripheral immune cells, may play key roles in causing
        synapse loss and neurodegeneration in AD (Browne et al., 2013; Zhang et
        al., 2013; Baruch et al., 2015, 2016; GuillotSestier et al., 2015;
        Zenaro et al., 2015; Hong et al., 2016a,b).
      </CitationCard>
      <CitationCard citations={[bibtex.frozza2018challenges]}>
        markers of inflammation, such as TNF-α, IL-1β, IL-6, and other
        cytokines, have been shown to be increased in the brain, CSF, and plasma
        of AD patients (Perry et al., 2010; Swardfager et al., 2010; Czirr and
        Wyss-Coray, 2012; Alcolea et al., 2014; Heneka et al., 2015a; Hong et
        al., 2016a; Salter and Stevens, 2017).
      </CitationCard>
      <CitationCard citations={[bibtex.frozza2018challenges]}>
        Increased pro-inflammatory signaling resulting from reactive microglial
        reduces Aβ clearance, promotes aberrant synaptic pruning (Lee and
        Landreth, 2010; Mandrekar-Colucci et al., 2012; Heneka et al., 2015a,b;
        Hong et al., 2016b), prompts Aβ and tau pathologies, and contributes to
        impaired synapse function (Wang W. Y. et al., 2015). Importantly,
        TNF-α-dependent mechanisms appear to drive memory defects (Lourenco et
        al., 2013) and depressive-like behavior in AD mice (Ledo et al., 2016),
        thereby indicating a causal role of inflammation in deleterious
        processes linked to AD.
      </CitationCard>
      <CitationCard citations={[bibtex.frozza2018challenges]}>
        TNFα, have been reported to induce neuronal stress (Lourenco et al.,
        2013), likely resulting in defective proteostasis. it has been recently
        demonstrated that AβOs stimulates eIF2α phosphorylation (Devi and Ohno,
        2010, 2013, 2014; Lourenco et al., 2013; Ma et al., 2013; Baleriola et
        al., 2014). In the brain, eIF2α is a hub that controls protein
        synthesis-dependent learning and memory and mantain neuronal integrity
        in health and disease. When phosphorylated, however, eIF2α attenuates
        the initiation of global protein synthesis (Lourenco et al., 2015).
      </CitationCard>
      <CitationCard citations={[bibtex.frozza2018challenges]}>
        In line with this notion, deletion of eIF2α kinases, including PKR,
        PERK, or GCN2 restores memory and synapse function in mouse models of AD
        (Lourenco et al., 2013; Ma et al., 2013).
      </CitationCard>
      <CitationCard citations={[bibtex.frozza2018challenges]}>
        Abnormal accumulation of misfolded proteins in the endoplasmic reticulum
        triggers the unfolded protein response (UPR), a set of signaling
        branches aimed at restore cellular homeostasis (Hetz, 2012; Dufey et
        al., 2014; Hetz and Saxena, 2017). However, when prolonged, UPR
        signaling might compromise neuronal functions, resulting in
        neurodegeneration (Lourenco et al., 2015; Freeman and Mallucci, 2016;
        Hetz and Saxena, 2017). There is now considerable evidence suggesting
        that AD brain display increased markers of UPR (Hoozemans et al., 2009;
        Hetz and Saxena, 2017), and that at least the PERK (Ma et al., 2013) and
        IRE-1a (Lourenco et al., 2013; Duran-Aniotz et al., 2017) branches of
        UPR are involved in memory defects in AD mice.
      </CitationCard>
    </NodeCard>
  )
);

export const Wrapper = () => <>{ImmuneActivation.content}</>;

export default ImmuneActivation;
