import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { MyNode } from "@/models/node";
const Prediction = new MyNode("Prediction", [], (_jsx("div", { children: "(S Pusil et al. 2019) have shown that using temporal synchronization accross frequency bands can predict MCI progression to AD." })));
export const Wrapper = () => _jsx(_Fragment, { children: Prediction.content });
export default Prediction;
