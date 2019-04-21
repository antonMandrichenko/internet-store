import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {firestoreConnect, withFirebase, withFirestore} from "react-redux-firebase";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "./redux";
import {compose} from "redux";
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import { styles } from './style';
import CircularIndeterminate from "../../Circular";

ReviewDashboard.propTypes = {
  reviews: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  deleteReview: PropTypes.func.isRequired,
};

function ReviewDashboard({ reviews,
                           classes,
                           deleteReview
}) {

  const handleClick = (id) => {
    deleteReview(id)
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID review</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Positive</TableCell>
            <TableCell>Negative</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Rate</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Reviews for reviews</TableCell>
            <TableCell>ID of product</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reviews
            ? reviews.map(review => (
              <TableRow key={review.id}>
                <TableCell component="th" scope="row">
                  {review.id}
                </TableCell>
                <TableCell>
                  {review.description}
                </TableCell>
                <TableCell>
                  {review.positive}
                </TableCell>
                <TableCell>
                  {review.negative}
                </TableCell>
                <TableCell>
                  {review.username}
                  {review.email}
                </TableCell>
                <TableCell>
                  {+review.rate + 1}
                </TableCell>
                <TableCell>
                  {moment(review.createdAt.toDate()).format('DD.MM.YYYY HH:mm')}
                </TableCell>
                <TableCell>
                  {review.reviewForReview.length}
                </TableCell>
                <TableCell>
                  {review.idProduct}
                </TableCell>
                <TableCell>
                  <Button
                    onClick={handleClick.bind(this, review.id)}
                    color="primary">
                    delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
            : <CircularIndeterminate/>}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default compose(
  withFirebase,
  withFirestore,
  firestoreConnect([
    {collection: 'reviews'}
  ]),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewDashboard);

