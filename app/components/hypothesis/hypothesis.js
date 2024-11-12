import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Hypothesis = ({ children, title, }) => {
    return (_jsxs("div", { className: "text-lg", style: {
            color: "var(--color-hypothesis)",
        }, children: [title && _jsx("h3", { children: title }), children] }));
};
export default Hypothesis;
