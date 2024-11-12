import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import CitationCard from "@/app/components/citation-card/citation-card.tsx";
import { MyNode } from "@/models/node";
import { EIIncreasedParietal } from "@/public/citations";
const DMN = new MyNode("Default Mode Network (DMN)", [], (_jsx("div", { children: _jsx(CitationCard, { citations: [EIIncreasedParietal], children: "baseline DMN activity is increased in AD and fails to deactivate during cognitive tasks, suggesting that the DMN is abnormally and continuously hyperactive in AD" }) })));
export const Wrapper = () => _jsx(_Fragment, { children: DMN.content });
export default DMN;
