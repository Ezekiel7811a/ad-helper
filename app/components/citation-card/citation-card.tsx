"use client";

import { Citation } from "@/models/citation";
import { ReactNode, useState } from "react";
import "./style.css";
import RippleEffectButton from "./ripple-effect.tsx";
import { Divider, Popover } from "@mui/material";
import Row from "./row/row.tsx";

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

    const authors = citations.map((citation) =>
        citation.authorsList.length > 0
            ? citation.authorsList.map((author) => author.name)
            : citation.author
                  ?.split(",")
                  .map((author) => author.trim())
                  .filter((author) => author)
    ); // Remove any empty entries, just in case);
    return (
        <span>
            <span onClick={handleMouseEnter}>
                <RippleEffectButton>{children}</RippleEffectButton>
            </span>
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
                        <Row citation={citations[0]}>
                            {authors[0]} et al. (
                            {citations[0].publicationDate
                                ? citations[0].publicationDate.getFullYear()
                                : citations[0].year}
                            )
                        </Row>
                        <Divider />
                    </div>
                    {authors.length > 1 &&
                        authors.slice(1).map((author, index) => (
                            <Row key={index} citation={citations[index]}>
                                {author} et al. (
                                {citations[index].publicationDate
                                    ? citations[
                                          index
                                      ].publicationDate.getFullYear()
                                    : citations[index].year}
                                )
                            </Row>
                        ))}
                </div>
            </Popover>
        </span>
    );
};

export default CitationCard;
