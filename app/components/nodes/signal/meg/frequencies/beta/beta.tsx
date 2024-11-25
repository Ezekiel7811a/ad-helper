import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import ToCheck from "@/app/components/to-check/to-check.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";
import exp from "constants";

const Beta = new MyNode(
    "Beta",
    [],
    (
        <div>
            <CitationCard citations={[bibtex.pusil2019hypersynchronization]}>
                Beta band seems to have a special significance in Alzheimer’s
                disease, especially in the early stages of the disease (Stam et
                al., 2003). This band has been classically related to excitatory
                activity, as well as to cognitive processes impaired in
                Alzheimer’s disease, such as memory or executive function
                (Koenig et al., 2005). And has been supported by our results.
            </CitationCard>
            <CitationCard citations={[bibtex.wiesman2024neurochemical]}>
                Interestingly, &beta; rhythms in patients with aMCI, AD are
                increased in parietal and prefrontal regions. This selective
                increase could represent a regionally specific compensatory
                response or an attempt to maintain certain functions in the face
                of neurodegeneration. Beta rhythm increases were aligned with
                the fourth neurochemical gradient, specifically in regions rich
                in serotonin (5-HT4) and acetylcholine (M1).
            </CitationCard>
            <ToCheck string="Higher frequencies, particularly in the beta and gamma ranges, are typically linked with excitatory pyramidal neurons and local, fast synaptic activity. Changes in these frequencies could reflect disruptions in excitatory transmission or altered cortical processing. Decreased alpha and beta power, as observed in AD, might suggest diminished excitatory activity or a decline in excitatory cell populations" />
            <CitationCard citations={[bibtex.byrne2020next]}>
                Recent experimental evidence suggests that -band activity is
                stochastically transient rather than steady and sustained as
                previously thought (Feingold et al. 2015; Lundqvist et al.
                2016). Electrophysiological recordings, such as EEG and MEG, are
                typically trial-averaged to produce clear time-frequency
                spectrograms. Transiently occurring bursts of -activity could
                present as a sustained rhythm in a trial-averaged regime,
                leading experimentalists to search for these -bursts in
                single-trial EEG and MEG data. At a single-trial level,
                spontaneous brain activity in motor areas indeed shows transient
                bursts of -band activity lasting ~150 ms (Sherman et al. 2016).
                When trial-averaged, this same activity appears sustained with a
                relatively constant power level.
            </CitationCard>
        </div>
    )
);

export const Wrapper = () => <>{Beta.content}</>;

export default Beta;
