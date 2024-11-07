"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Divider, Popover } from "@mui/material";
import "./style.css";
import RippleEffectButton from "./ripple-effect";
const CitationCard = ({ citations, children }) => {
    var _a;
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMouseLeave = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return (_jsxs("div", { children: [_jsx("div", { onClick: handleMouseEnter, children: _jsx(RippleEffectButton, { children: children }) }), _jsx(Popover, { open: open, anchorEl: anchorEl, onClose: handleMouseLeave, anchorOrigin: {
                    vertical: "top",
                    horizontal: "left",
                }, transformOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                }, disableRestoreFocus: true, children: _jsxs("div", { children: [_jsxs("div", { children: [citations[0].authors[0].name, " et al. (", (_a = citations[0].publicationDate) === null || _a === void 0 ? void 0 : _a.getFullYear(), ")", _jsx(Divider, {})] }), citations.length > 1 &&
                            citations.slice(1).map((citation, index) => {
                                var _a;
                                return (_jsxs("div", { children: [citation.authors[0].name, " et al. (", (_a = citation.publicationDate) === null || _a === void 0 ? void 0 : _a.getFullYear(), ")"] }, index));
                            })] }) })] }));
};
export default CitationCard;
