import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { MyNode } from "@/models/node";
const TDP43 = new MyNode("TDP43", [], _jsx("div", { children: "bonjour" }));
export const Wrapper = () => _jsx(_Fragment, { children: TDP43.content });
export default TDP43;
