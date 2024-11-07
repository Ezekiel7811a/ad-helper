import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Figure = ({ src, alt, caption, n = 0 }) => {
    return (_jsxs("figure", { className: "mt-5 mb-5", children: [_jsx("img", { src: src, alt: alt }), _jsxs("figcaption", { className: "underline", children: ["figure ", n, ": ", caption] })] }));
};
export default Figure;
