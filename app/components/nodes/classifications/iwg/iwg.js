import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { MyNode } from "@/models/node";
const IWG = new MyNode("IWG", [], _jsx("div", { children: "bonjour" }));
export const Wrapper = () => _jsx(_Fragment, { children: IWG.content });
export default IWG;
