import { jsx as _jsx } from "react/jsx-runtime";
import CitationCard from "@/app/components/citation-card/citation-card";
import { MyNode } from "@/models/node";
import { EITranslationalPerspective } from "@/public/citations";
export const Excitotoxicity = new MyNode("Excitotoxicity", [], (_jsx("div", { children: _jsx(CitationCard, { citations: [EITranslationalPerspective], children: "Long-term neuronal hyperexcitability leads to neuronal death caused by excitotoxicity (Canter et al., 2016)" }) })));
