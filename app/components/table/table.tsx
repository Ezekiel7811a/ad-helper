import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

interface TableProps {
  headers: string[];
  contents: string[][];
}

const MyTable: React.FC<TableProps> = ({ headers, contents }) => {
  return (
    <div className="pl-5 pr-5">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell key={index} className="font-bold bg-zinc-500 ">
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {contents.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                style={{
                  backgroundColor: rowIndex % 2 === 0 ? "#f5f5f5" : "#ffffff",
                }}
              >
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyTable;
