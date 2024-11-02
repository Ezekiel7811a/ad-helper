import { Citation } from "@/models/citation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  citation: Citation;
}

const CitationCard = ({ citation, children }: Props) => {
  const { authors } = citation;
  return (
    <div>
      {children}
      {authors && (
        <div>
          {authors[0].name} et al. ({citation.publicationDate?.getFullYear()})
        </div>
      )}
    </div>
  );
};

export default CitationCard;
