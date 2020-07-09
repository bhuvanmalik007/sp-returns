import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(() => ({
  table: {
    minWidth: 20,
  },
}));

export default function ReturnsTable({ tableResults, headerArray }) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow hover>
            {headerArray.map((column) => (
              <TableCell key={column.id} align="right">
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableResults.map((row) => {
            return (
              <TableRow key={row.year}>
                <TableCell align="right">{row.year}</TableCell>
                <TableCell align="right">{row.totalReturn}</TableCell>
                <TableCell align="right">{row.cumulative}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
