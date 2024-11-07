import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from "@mui/material";
const MyTable = ({ headers, contents }) => {
    return (_jsx("div", { className: "pl-5 pr-5", children: _jsx(TableContainer, { component: Paper, children: _jsxs(Table, { children: [_jsx(TableHead, { children: _jsx(TableRow, { children: headers.map((header, index) => (_jsx(TableCell, { className: "font-bold bg-zinc-500 ", children: header }, index))) }) }), _jsx(TableBody, { children: contents.map((row, rowIndex) => (_jsx(TableRow, { style: {
                                backgroundColor: rowIndex % 2 === 0 ? "#f5f5f5" : "#ffffff",
                            }, children: row.map((cell, cellIndex) => (_jsx(TableCell, { children: cell }, cellIndex))) }, rowIndex))) })] }) }) }));
};
export default MyTable;
