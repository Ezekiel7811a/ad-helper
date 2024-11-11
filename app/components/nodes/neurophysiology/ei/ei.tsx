import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import Figure from "@/app/components/figure/figure.tsx";
import { MyNode } from "@/models/node";
import {
  CombiningBrainSimAndMeg,
  InferringEIFromFieldPotentials,
} from "@/public/citations";
import { MathJax } from "better-react-mathjax";

const EI = new MyNode(
  "E/I balance",
  [],
  (
    <div>
      <CitationCard citations={[InferringEIFromFieldPotentials]}>
        Neurons are constantly bombarded with spontaneous synaptic inputs. This
        state of fluctuating activity is referred to as the high-conductance
        state (Destexhe et al., 2003), and gives rise to the asynchronous,
        irregular (Poisson-like) firing observed in vivo (Destexhe et al.,
        2001). As the inhibitory LFP power is 2-6 times the excitatory LFP
        power, it has been inferred that the slope would be at most horizontal
        and getting steeper with inhibitory activation. Consistent with the
        results.
      </CitationCard>
      <CitationCard citations={[CombiningBrainSimAndMeg]}>
        Accumulation and interaction of Aβ and tau proteins during progression
        of AD are shown to tilt neuronal circuits away from balanced E:I.
        Moreover, Aβ and tau may not act independently. Recent evidence suggests
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
        <li>
          <CitationCard citations={[InferringEIFromFieldPotentials]}>
            First normalize LFP power. then we get the PSC in time domain:
            <MathJax>
              {
                "\\( \\text{PSC}(t) = C\\left(-e^{\\frac{-t}{\\tau_{\\text{rise}}}} + e^{\\frac{-t}{\\tau_{\\text{decay}}}}\\right) \\)"
              }
            </MathJax>
            Then we can get the power spectrum of the PSC with Welch method.
            Finally we extract the 1/f slope thanks to non linear fitting. Then
            we change the E:I balance and observe the change in the slope, we do
            that for all the empirically known E:I balance accross the stratum
            depth and look at E:I and 1/f slope correlation. This observation
            was further confirmed by the observation of macaques with an evoked
            inhibitory response.
          </CitationCard>
        </li>
      </ul>
    </div>
  )
);

export const Wrapper = () => <>{EI.content}</>;

export default EI;
