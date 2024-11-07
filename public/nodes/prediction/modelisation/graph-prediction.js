import { jsx as _jsx } from "react/jsx-runtime";
import CitationCard from "@/app/components/citation-card/citation-card";
import { MyNode } from "@/models/node";
import { EITranslationalPerspective } from "@/public/citations";
const GraphPrediction = new MyNode("GraphPrediction", [], (_jsx("div", { children: _jsx(CitationCard, { citations: [EITranslationalPerspective], children: "Graph theoretical approaches have been particularly successful in characterizing macroscopic functional brain network damage in AD (Pievani et al., 2011; Stam, 2014)." }) })));
export default GraphPrediction;
