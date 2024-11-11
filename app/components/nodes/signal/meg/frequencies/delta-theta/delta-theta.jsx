import CitationCard from "@/app/components/citation-card/citation-card";
import ToCheck from "@/app/components/to-check/to-check";
import { MyNode } from "@/models/node";
import { NeuroChemsOrganizationAd } from "@/public/citations";
const DeltaTheta = new MyNode("Delta-Theta", [], (<div>
      &delta; and &theta; rhythms are considered slow rythms.
      <CitationCard citations={[NeuroChemsOrganizationAd]}>
        &delta; and &theta; rhythms in patients with aMCI, AD are elevated in
        prefrontal and parieto-occipital regions. Disease-related increases in
        slow &delta; and &theta; rhythms were strongest in regions with low
        density of dopaminergic, serotonergic, and mu-opioid receptors,
        indicating that these slower rhythms are more prominent in areas with
        lower densities of these neurotransmitter systems. The noradrenergic
        (NET), serotonergic (5-HT1a, 5-HT6), dopaminergic (D2), and GABAergic
        (GABAa) systems showed alignment with theta alterations.
      </CitationCard>
      <ToCheck string="These frequencies are often associated with inhibitory interneurons and slower, synchronized network activity. They are commonly linked to large-scale, long-range interactions in the brain. Increased delta and theta rhythms, as seen in AD, could indicate compensatory or pathological upregulation of inhibitory processes in affected areas."/>
    </div>));
export default DeltaTheta;
