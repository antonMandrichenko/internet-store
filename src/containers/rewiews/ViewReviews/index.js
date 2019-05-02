import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {withStyles} from '@material-ui/core/styles';
import {withFirestore, firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import RewiewInCard from "../../../components/reviews/ReviewInCard";
import AddReview from "../AddReview";
import {styles} from "./style";
import {mapStateToProps} from "./redux";
import CircularIndeterminate from "../../../components/Circular";

ViewRewiews.propTypes = {
  classes: PropTypes.object.isRequired,
  reviews: PropTypes.any,
  product: PropTypes.object,
};

function ViewRewiews({reviews, classes, product}) {

  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setIsOpenDialog(!isOpenDialog)
  };

  const reviewForProduct = (reviews) => {
    const arrForProduct = reviews.filter((review) =>
      review.idProduct === product.id);
    if (arrForProduct.length === 0) {
      return <Typography variant="h6">
        No reviews for this product
      </Typography>
    }

    return arrForProduct.map((review) =>
      <RewiewInCard
        key={review.id}
        review={review}
      />
    )
  };

  return (
    <Fragment>
      <Grid container justify="space-between">
        <Grid item>
          <Typography
            variant="h5"
            gutterBottom
            className={classes.title}>
            Reviews of {product.name}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenDialog}>
            Write review
          </Button>
          <AddReview
            handleOpenDialog={handleOpenDialog}
            isOpenDialog={isOpenDialog}
            product={product}
          />
        </Grid>
      </Grid>
      {reviews
        ? reviewForProduct(reviews)
        : <CircularIndeterminate/>}
    </Fragment>
  );
}

export default compose(
  withFirestore,
  firestoreConnect([
    {collection: 'reviews'}
  ]),
  connect(mapStateToProps),
  withStyles(styles)
)(ViewRewiews);
