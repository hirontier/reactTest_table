import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import DatePicker from "./datePicker.js";
import { theme } from "./theme.js";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.primary.record
    },
    flexGrow: 1
  }
}))(TableRow);

function createData(time, value, mark) {
  return { time, value, mark };
}

const rows = [
  createData("00:00", 100, 0),
  createData("00:01", 101, 1),
  createData("00:02", 102, 1),
  createData("00:03", 103, 1),
  createData("00:04", 104, 1),
  createData("00:05", 105, 1),
  createData("00:06", 106, 1),
  createData("00:07", 106, 0),
  createData("00:08", 105, 2),
  createData("00:09", 106, 0),
  createData("00:10", 106, 0),
  createData("00:11", 101, 2),
  createData("00:12", 102, 1),
  createData("00:13", 103, 1),
  createData("00:14", 104, 1),
  createData("00:15", 105, 1),
  createData("00:16", 106, 1),
  createData("00:17", 106, 0),
  createData("00:18", 105, 2),
  createData("00:19", 106, 0),
  createData("00:20", 106, 0)
];

const useStyles = makeStyles({
  tableWrapper: {
    maxHeight: 400,
    overflow: "auto"
  },
  table: {
    minWidth: 250
  },
  title: {
    minWidth: 215,
    padding: "0.5em 0.5em",
    margin: 0,
    background: "#ffffff",
    border: "solid 3px",
    "border-radius": "10px",
    "text-align": "center"
  },
  arrowDownWard: {
    color: "#ff0000",
    fontSize: 16
  },
  arrowUpWard: {
    color: "#005500",
    fontSize: 16
  }
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <div style={{ fontSize: 25 }}>
          表示日：
          <DatePicker />
        </div>
        <Grid container spacing={5}>
          <Grid container item xs={12} sm={6} md={4} lg={3} spacing={2}>
            <Grid container item zeroMinWidth>
              <div className={classes.title}>センサー１</div>
            </Grid>
            <Grid container item zeroMinWidth>
              <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                  <Table
                    className={classes.table}
                    size="small"
                    aria-label="customized table"
                    stickyHeader
                  >
                    <TableHead>
                      <TableRow>
                        <StyledTableCell align="center">時刻</StyledTableCell>
                        <StyledTableCell align="center">計測値</StyledTableCell>
                        <StyledTableCell align="center" />
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => (
                        <StyledTableRow key={row.time}>
                          <StyledTableCell
                            align="center"
                            component="th"
                            scope="row"
                          >
                            {row.time}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.value}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.mark === 0 ? (
                              "　"
                            ) : row.mark === 2 ? (
                              <ArrowDownwardRoundedIcon
                                className={classes.arrowDownWard}
                              />
                            ) : (
                              <ArrowUpwardRoundedIcon
                                className={classes.arrowUpWard}
                              />
                            )}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={6} md={4} lg={3} spacing={2}>
            <Grid container item zeroMinWidth>
              <div className={classes.title}>センサー２</div>
            </Grid>
            <Grid container item zeroMinWidth>
              <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                  <Table
                    className={classes.table}
                    size="small"
                    aria-label="customized table"
                    stickyHeader
                  >
                    <TableHead>
                      <TableRow>
                        <StyledTableCell align="center">時刻</StyledTableCell>
                        <StyledTableCell align="center">計測値</StyledTableCell>
                        <StyledTableCell align="center" />
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => (
                        <StyledTableRow key={row.time}>
                          <StyledTableCell
                            align="center"
                            component="th"
                            scope="row"
                          >
                            {row.time}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.value}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.mark === 0 ? (
                              "　"
                            ) : row.mark === 2 ? (
                              <ArrowDownwardRoundedIcon
                                className={classes.arrowDownWard}
                              />
                            ) : (
                              <ArrowUpwardRoundedIcon
                                className={classes.arrowUpWard}
                              />
                            )}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}
