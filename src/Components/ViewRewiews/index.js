import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import { withFirestore, firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Typography from "@material-ui/core/Typography/index";
import RewiewInCard from "./RewiewInCard";
import AddReview from "./AddReview";
import Grid from "@material-ui/core/Grid/index";
import Button from "@material-ui/core/Button/index";
import { connect } from "react-redux";

ViewRewiews.propTypes = {
  // classes: PropTypes.object.isRequired,
};

// const rewiews = [
//   {
//     id: 1, user: 'Alibaba', text: 'Lorem lorem lorel lorem Lorem lorem lorel loremLorem lorem lorel loremLorem lorem' +
// ' lorel' +
//       ' lorem Lorem lorem lorel lorem', rate: 2, positive: 'cool product', negative: 'no negative', date: '22.12.2018'
//   },
//   {
//     id: 2, user: 'Lolay', text: 'Lorem lorem lorel lorem Lorem lorem lorel loremLorem lorem lorel loremLorem lorem' +
//       ' lorel' +
//       ' lorem Lorem lorem lorel lorem 2', rate: 3, positive: 'cool product 2', negative: 'no negative 2',  date: '22.12.2018'
//   },
//   {
//     id: 3, user: 'Kattt', text: 'Lorem lorem lorel lorem Lorem lorem lorel loremLorem lorem lorel loremLorem lorem' +
//       ' lorel' +
//       ' lorem Lorem lorem lorel lorem 3', rate: null, positive: 'cool product 3', negative: 'no negative 3',  date: '22.12.2018'
//   },
// ];

function ViewRewiews({reviews}) {

  const[isOpenDialog, setIsOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setIsOpenDialog(!isOpenDialog)
  };

  return (
    <Fragment>
      <Grid container justify="space-between">
      <Grid item>
        <Typography variant="h4" gutterBottom>
          Reviews of name of product
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleOpenDialog}>
          Write review
        </Button>
        <AddReview handleOpenDialog={handleOpenDialog} isOpenDialog={isOpenDialog}/>
      </Grid>
    </Grid>
      {reviews
        ? reviews.map((review) =>
          <RewiewInCard key={review.id} review={review}/>
        )
        : <div>loading review...</div>}
    </Fragment>
  );
}

const mapStateToProps = state => {
  console.log(state)
  return {
    reviews: state.firestore.ordered.reviews
  }
};

export default compose(
  withFirestore,
  firestoreConnect([
    {collection: 'reviews'}
  ]),
  connect(mapStateToProps),

)(ViewRewiews);
