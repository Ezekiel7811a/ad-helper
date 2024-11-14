import { MyNode } from "@/models/node";
import CitationCard from "../../citation-card/citation-card";
import Bibtex from "@/public/citations/bibtex.json";

const Prediction = new MyNode(
    "Prediction",
    [],
    (
        <div>
            (S Pusil et al. 2019) have shown that using temporal synchronization
            accross frequency bands can predict MCI progression to AD.
            <CitationCard citations={[Bibtex.brunello2020mechanisms]}>
                It seems that the level of tau deposition in the temporal lobe
                is more closely related to dementia status and can predict
                cognitive performance better than Aβ deposition in any brain
                region [106].
            </CitationCard>
        </div>
    )
);

export const Wrapper = () => <>{Prediction.content}</>;

export default Prediction;
