import { Table as MuiTable, TableContainer } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";

interface Props {
  header: JSX.Element;
  body: JSX.Element;
  className?: string;
}

const Table: React.FC<Props> = ({ header, body, className }) => {
  return (
    <TableContainer>
      <MuiTable stickyHeader className={className}>
        <TableHead>
          <TableRow>{header}</TableRow>
        </TableHead>
        <TableBody>{body}</TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
