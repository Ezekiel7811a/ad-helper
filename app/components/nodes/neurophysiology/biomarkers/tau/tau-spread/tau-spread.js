import { jsx as _jsx } from "react/jsx-runtime";
import CitationCard from "@/app/components/citation-card/citation-card";
import { MyNode } from "@/models/node";
import { VisualInterpretationPetTau } from "@/public/citations";
export const TauSpread = new MyNode("TauSpread", [], (_jsx("div", { children: _jsx(CitationCard, { citations: [VisualInterpretationPetTau], children: "Temporal lobe structures, especially the mesial temporal gyri and hippocampus, are the earliest neocortical regions to manifest neurofibrillary tangles (9)" }) })));
