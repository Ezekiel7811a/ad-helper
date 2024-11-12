import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { MyNode } from "@/models/node";
import { ABInducedHyperAndTau } from "@/public/citations";
const AbTauInteractions = new MyNode("AbTauInteractions", [], (_jsx("div", { children: _jsx(CitationCard, { citations: [ABInducedHyperAndTau], children: "It has been proposed that this Ab then promotes the migration of tau4,5" }) })));
export const Wrapper = () => _jsx(_Fragment, { children: AbTauInteractions.content });
export default AbTauInteractions;
