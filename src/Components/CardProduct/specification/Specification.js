import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Card from "@material-ui/core/Card";

Specification.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = () => ({
  card: {
    marginTop: '1rem',
  },
});

const rows = [
  ['Width', 120],
  ['Height', 700],
  ['Longer', 500],
  ['Material', 'tree'],
];

function Specification({classes}) {
  return (
    <Card className={classes.card}>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Specifications</TableCell>
              <TableCell align="center">Indicators</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row[0]}>
                <TableCell component="th" scope="row">
                  <strong>{row[0]}</strong>
                </TableCell>
                <TableCell align="center">{row[1]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Card>
  );
}

export default withStyles(styles)(Specification);
