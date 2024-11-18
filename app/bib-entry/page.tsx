"use client";

import { Box, CircularProgress, Modal, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const BibEntry = () => {
    const [entry, setEntry] = useState("");
    useEffect(() => {
        const handleEnterPress = async (event: KeyboardEvent) => {
            if (event.key === "Enter" && event.ctrlKey) {
                handleOpen();
                const res = await fetch("/api/bibtex/parser/unique", {
                    method: "POST",
                    body: JSON.stringify({ bibref: entry }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                setEntry("");
                handleClose();
                if (res.ok) {
                    alert("Entry added successfully");
                    return;
                }
                alert("Entry already exists");
            }
        };
        window.addEventListener("keydown", handleEnterPress);
        return () => {
            window.removeEventListener("keydown", handleEnterPress);
        };
    }, [entry]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            Enter the entry below (bibtex format):
            <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={40}
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="loading-modal"
                aria-describedby="modal-displaying-loading-spinner"
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                    }}
                >
                    <CircularProgress />
                </Box>
            </Modal>
        </div>
    );
};

export default BibEntry;
