"use client";

import { Citation } from "@/models/citation";
import { ReactNode, useRef, useState } from "react";
import "./style.css";
import RippleEffectButton from "./ripple-effect.tsx";
import { Button, Divider, Popover } from "@mui/material";
import Row from "./row/row.tsx";
import { DriveFileRenameOutline } from "@mui/icons-material";

interface Props {
    children: ReactNode;
    citations: Citation[];
}

const CitationCard = ({ citations, children }: Props) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const anchorRef = useRef<HTMLSpanElement>(null);

    const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorRef.current);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
    };

    const handleCopyAllRefs = () => {
        const text = citations.map((citation) => citation.bibref).join(", ");
        navigator.clipboard.writeText(`\\cite{${text}}`);
    };
    const open = Boolean(anchorEl);

    const authors = citations.map((citation) =>
        citation.authorsList.length > 0
            ? citation.authorsList.map((author) => author.name ?? "")
            : citation.author
                  ?.split(",")
                  .map((author) => author.trim())
                  .filter((author) => author) ?? []
    );

    return (
        <span>
            <span ref={anchorRef} />
            <span
                onClick={handleMouseEnter}
                className={anchorEl ? "text-blue-600" : ""}
            >
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
                            {authors[0][0]} et al. (
                            {citations[0].publicationDate
                                ? citations[0].publicationDate.getFullYear()
                                : citations[0].year}
                            )
                        </Row>
                        <Divider />
                    </div>
                    {authors.length > 1 &&
                        authors.slice(1).map((author, index) => (
                            <Row key={index} citation={citations[index + 1]}>
                                {author[0]} et al. (
                                {citations[index].publicationDate
                                    ? citations[
                                          index
                                      ].publicationDate.getFullYear()
                                    : citations[index].year}
                                )
                            </Row>
                        ))}
                    <Button
                        style={{
                            minWidth: "50px",
                            minHeight: "50px",
                            overflow: "visible",
                            backgroundColor: "white",
                            color: "black",
                        }}
                        onClick={handleCopyAllRefs}
                    >
                        <DriveFileRenameOutline />
                    </Button>
                </div>
            </Popover>
        </span>
    );
};

export default CitationCard;
