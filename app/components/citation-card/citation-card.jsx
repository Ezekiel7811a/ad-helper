"use client";
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
    return (<div>
      <div onClick={handleMouseEnter}>
        <RippleEffectButton>{children}</RippleEffectButton>
      </div>
      <Popover open={open} anchorEl={anchorEl} onClose={handleMouseLeave} anchorOrigin={{
            vertical: "top",
            horizontal: "left",
        }} transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
        }} disableRestoreFocus>
        <div>
          <div>
            {citations[0].authors[0].name} et al. (
            {(_a = citations[0].publicationDate) === null || _a === void 0 ? void 0 : _a.getFullYear()})
            <Divider />
          </div>
          {citations.length > 1 &&
            citations.slice(1).map((citation, index) => {
                var _a;
                return (<div key={index}>
                {citation.authors[0].name} et al. (
                {(_a = citation.publicationDate) === null || _a === void 0 ? void 0 : _a.getFullYear()})
              </div>);
            })}
        </div>
      </Popover>
    </div>);
};
export default CitationCard;
