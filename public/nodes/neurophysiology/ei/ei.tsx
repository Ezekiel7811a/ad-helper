import CitationCard from "@/app/components/citation-card/citation-card";
import Figure from "@/app/components/figure/figure";
import { MyNode } from "@/models/node";
import { CombiningBrainSimAndMeg } from "@/public/citations";

export const EI = new MyNode(
  "E/I balance",
  [],
  (
    <div>
      <CitationCard citations={[CombiningBrainSimAndMeg]}>
        Accumulation and interaction of amyloid-beta (Aβ) and tau proteins
        during progression of Alzheimer's disease (AD) are shown to tilt
        neuronal circuits away from balanced excitation/inhibition (E/I).
        Moreover, Aβ and tau may not act independently; recent evidence suggests
        that both pathologies have synergistic effects. Observations on AD
        patients revealed an interesting pattern in AD with opposing effects
        suggesting a coexistence of excitation and inhibitiondominated regions.
        <Figure
          src="images/ei/ei_balance.png"
          alt="ei_balance"
          caption="Spectral changes and E/I shifts in MCI. (A) Normalized power spectrum across all individuals from the control (Ctrl), MCIn,and MCIcv groups and over all ROIs."
          n={1}
        />
      </CitationCard>
      E:I balance has been verified as follows:
      <ul>
        <li>
          <CitationCard citations={[CombiningBrainSimAndMeg]}>
            Comparision between a model of E:I that passes through a leadfield
            matrix and 1/f spectral power law observed at the sensor space.
            Showing that based on this assumption the E:I balance can be
            inferred from the sensor space with 1/f slope. (using FOOOF
            algorithm)
          </CitationCard>
        </li>
      </ul>
    </div>
  )
);
