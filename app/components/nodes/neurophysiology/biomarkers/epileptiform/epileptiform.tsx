import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const Epileptiform = new MyNode(
  "Epileptiform",
  [],
  (
    <div>
      <CitationCard citations={[bibtex.maestu2021neuronal]}>
        subclinical epileptogenic activity has been found in about 42 % of AD
        patients, leading to a faster decline of cognitive abilities (Vossel et
        al., 2016). epileptic activity is more common in AD than other
        dementias, indicating that the link to hyperexcitability may be
        relatively specific to AD pathophysiology rather than just an unspecific
        consequence of neurodegeneration. Therefore, hypersynchronization could
        be a result of cortical hyperexcitability
      </CitationCard>
    </div>
  )
);

export const Wrapper = () => <>{Epileptiform.content}</>;

export default Epileptiform;
