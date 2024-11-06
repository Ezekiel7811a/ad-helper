import CitationCard from "@/app/components/citation-card/citation-card";
import { MyNode } from "@/models/node";
import { EITranslationalPerspective } from "@/public/citations";

export const Apoe4 = new MyNode(
  "Apoe4",
  [],
  (
    <div>
      <CitationCard citations={[EITranslationalPerspective]}>
        APOE-ε4 carrier. Carriers of this genotype have a high probability of Aβ
        deposition in regions associated with the default mode network (Buckner
        et al., 2009a ) as shown by Nakamura et al. (Nakamura et al., 2018,
        2017).
      </CitationCard>
      <div>
        Studies indicate that healthy elderly APOE4 carriers show increased
        network synchronization, while MCI APOE4 carriers exhibit lower
        synchronization in the same regions. (Gonzalez-Escamilla et al., 2014).
      </div>
    </div>
  )
);
