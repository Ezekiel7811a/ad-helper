import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { MyNode } from "@/models/node";
const AlphaSynuclein = new MyNode("AlphaSynuclein", [], _jsx("div", { children: "bonjour" }));
export const Wrapper = () => _jsx(_Fragment, { children: AlphaSynuclein.content });
export default AlphaSynuclein;
