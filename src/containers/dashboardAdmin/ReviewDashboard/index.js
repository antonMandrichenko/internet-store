import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {firestoreConnect} from "react-redux-firebase";
import {connect} from "react-redux";
import {compose} from "redux";
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {styles} from './style';
import {mapDispatchToProps, mapStateToProps} from "./redux";
import CircularIndeterminate from "../../../components/Circular";
import withError from "../../../hoc/withError";

ReviewDashboard.propTypes = {
  reviews: PropTypes.any,
  classes: PropTypes.object.isRequired,
  deleteReview: PropTypes.func.isRequired,
  error: PropTypes.object,
};

function ReviewDashboard({
                           reviews,
                           classes,
                           deleteReview
                         }) {

  const handleClick = (id) => {
    deleteReview(id)
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h6" gutterBottom>
        List of reviews
      </Typography>
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
            <TableCell/>
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
                  {`${review.username} ${review.email}`}
                </TableCell>
                <TableCell>
                  {+review.rate + 1}
                </TableCell>
                <TableCell>
                  {moment(
                    review.createdAt.toDate())
                    .format('DD.MM.YYYY HH:mm')}
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

const WithErrorReviewDashboard = withError(ReviewDashboard);

export default compose(
  firestoreConnect([
    {collection: 'reviews'}
  ]),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(WithErrorReviewDashboard);

