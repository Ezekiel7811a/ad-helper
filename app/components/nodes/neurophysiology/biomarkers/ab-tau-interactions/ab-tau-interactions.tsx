import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { MyNode } from "@/models/node";
import bibtex from "@/public/citations/bibtex.json";

const AbTauInteractions = new MyNode(
    "AbTauInteractions",
    [],
    (
        <div>
            <CitationCard citations={[bibtex.giorgio2024amyloid]}>
                It has been proposed that this Ab then promotes the migration of
                tau4,5
            </CitationCard>
            <CitationCard citations={[bibtex.vogels2020propagation]}>
                Tau isolated from AD cases with Ab plaque pathology was more
                seed competent than tau from a case without plaques; this could
                be experimentally explained by an increased proportion of
                highmolecular-weight tau in the presence of plaque pathology
                (80).
            </CitationCard>
            <CitationCard citations={[bibtex.vogels2020propagation]}>
                Ab deposition accelerates the propagation of tau (89)
            </CitationCard>
        </div>
    )
);

export const Wrapper = () => <>{AbTauInteractions.content}</>;

export default AbTauInteractions;
