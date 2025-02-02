import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  table: {
    minWidth: 20,
  },
  container: {
    maxHeight: "calc(100vh - 100px)",
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  body: {
    fontSize: 16,
    fontWeight: 500,
  },
}))(TableCell);

const StyledTableDataCell = withStyles((theme) => ({
  body: {
    color: ({ children }) =>
      !Number.isNaN(children) && Math.sign(children) > 0
        ? theme.palette.success.main
        : theme.palette.error.main,
  },
}))(StyledTableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function ReturnsTable({ tableResults, headerArray }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="simple table" stickyHeader>
        <TableHead>
          <StyledTableRow hover>
            {headerArray.map((column) => (
              <StyledTableCell key={column.id} align="left">
                {column.label}
              </StyledTableCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {tableResults.map((row) => (
            <StyledTableRow key={row.year}>
              <StyledTableCell align="left">{row.year}</StyledTableCell>
              <StyledTableDataCell align="left">
                {row.totalReturn}
              </StyledTableDataCell>
              <StyledTableDataCell align="left">
                {row.cumulative}
              </StyledTableDataCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

ReturnsTable.propTypes = {
  tableResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};
