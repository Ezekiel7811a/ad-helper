import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const AbTauInteractions = new MyNode(
    "AbTauInteractions",
    [],
    (
        <div>
            <CitationCard
                citations={[
                    bibtex.bennett2017enhanced,
                    bibtex.pontecorvo2017relationships,
                ]}
            >
                It has been proposed that this Ab then promotes the migration of
                tau
            </CitationCard>
            <CitationCard citations={[bibtex.bennett2017enhanced]}>
                Tau isolated from AD cases with Ab plaque pathology was more
                seed competent than tau from a case without plaques; this could
                be experimentally explained by an increased proportion of
                highmolecular-weight tau in the presence of plaque pathology.
            </CitationCard>
            <CitationCard citations={[bibtex.pooler2015amyloid]}>
                Ab deposition accelerates the propagation of tau
            </CitationCard>
        </div>
    )
);

export const Wrapper = () => <>{AbTauInteractions.content}</>;

export default AbTauInteractions;
