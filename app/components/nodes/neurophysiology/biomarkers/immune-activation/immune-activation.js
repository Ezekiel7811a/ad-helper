import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { MyNode } from "@/models/node";
const ImmuneActivation = new MyNode("ImmuneActivation", [], _jsx("div", { children: "bonjour" }));
export const Wrapper = () => _jsx(_Fragment, { children: ImmuneActivation.content });
export default ImmuneActivation;
