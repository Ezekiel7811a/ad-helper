import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { DriveFileRenameOutline } from "@mui/icons-material";
import { ReactNode } from 'react';
import { IconButton } from '@mui/material';
import { Citation } from '@/models/citation';

const Row = ({children, citation}: {children: ReactNode, citation: Citation}) => {
    const handleCopyBibTex = () => {
        const getCitation = async () => {
            const res = await fetch("api/bibtex/tex/by-bibref?bibref=" + citation.bibref);
            if (!res.ok) {
                navigator.clipboard.writeText(res.statusText);
            }

            navigator.clipboard.writeText(await res.text().then(text => text.replace(/^"|"$/g, "")
            .replace(/\\r\\n/g, "\n")
            .replace(/\\"/g, "\"")));
        }
        getCitation();
    }
    const handleCopyRef = () => {
        navigator.clipboard.writeText(citation.bibref ? `\\cite{${citation.bibref}}` : 'pas de bibref');
    }
    return (
        <div className='flex gap-5 p-2'>
            {children}
            <IconButton aria-label="copy" onClick={handleCopyBibTex}>
                <ContentCopyIcon />
            </IconButton>
            <IconButton aria-label="rename" onClick={handleCopyRef}>
                <DriveFileRenameOutline />
            </IconButton>

        </div>
    )
}

export default Row;