"use client";

import { Citation } from "@/models/citation";
import { ReactNode, useState } from "react";
import "./style.css";
import RippleEffectButton from "./ripple-effect.tsx";
import { Divider, Popover } from "@mui/material";

interface Props {
  children: ReactNode;
  citations: Citation[];
}

const CitationCard = ({ citations, children }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <div>
      <div onClick={handleMouseEnter}>
        <RippleEffectButton>{children}</RippleEffectButton>
      </div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleMouseLeave}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        disableRestoreFocus
      >
        <div>
          <div>
            {citations[0].authors[0].name} et al. (
            {citations[0].publicationDate?.getFullYear()})
            <Divider />
          </div>
          {citations.length > 1 &&
            citations.slice(1).map((citation, index) => (
              <div key={index}>
                {citation.authors[0].name} et al. (
                {citation.publicationDate?.getFullYear()})
              </div>
            ))}
        </div>
      </Popover>
    </div>
  );
};

export default CitationCard;
