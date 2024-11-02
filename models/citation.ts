import { Author } from "next/dist/lib/metadata/types/metadata-types";

export interface Citation {
  id?: string;
  authors: Author[];
  title?: string;
  publicationDate?: Date;
  publisher?: string;
  url?: string;
  doi?: string;
}
