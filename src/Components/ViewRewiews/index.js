import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withFirestore, firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Typography from "@material-ui/core/Typography/index";
import RewiewInCard from "./RewiewInCard";
import AddReview from "./AddReview";
import Grid from "@material-ui/core/Grid/index";
import Button from "@material-ui/core/Button/index";
import { connect } from "react-redux";

ViewRewiews.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    }
  },
});

function ViewRewiews({reviews, classes}) {

  const[isOpenDialog, setIsOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setIsOpenDialog(!isOpenDialog)
  };

  return (
    <Fragment>
      <Grid container justify="space-between">
      <Grid item>
        <Typography variant="h5" gutterBottom className={classes.title}>
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
  withStyles(styles)

)(ViewRewiews);
