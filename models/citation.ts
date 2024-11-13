import { Author } from "next/dist/lib/metadata/types/metadata-types";

export interface Citation {
  id?: string;
  bibref?: string;
  type?: string;
  title?: string;
  authorsList: Author[];
  author?: string;
  publicationDate?: Date;
  publisher?: string;
  year?: string;
  url?: string;
  doi?: string;
  volume?: string;
  number?: string;
}
