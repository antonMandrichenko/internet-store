import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ReplayIcon from '@material-ui/icons/Replay';
import ReviewForReview from "../ReviewForReview";
import AddReviewForReview from "../AddReviewForReview";
import StarRates from "../../CardProduct/StarsRate";
import { styles } from "./style";

RewiewInCard.propTypes = {
  classes: PropTypes.object.isRequired,
  review: PropTypes.object.isRequired,
};

function RewiewInCard({classes, review}) {

  const[isOpenDialog, setIsOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setIsOpenDialog(!isOpenDialog)
  };

  return (
    <Paper elevation={1} className={classes.typogr}>
      <Grid container className={classes.title}>
        <Grid item xs={12} sm={12} className={classes.name}>
          <Typography variant="h6" component="h6">
            {review.username || 'Anonim'}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} className={classes.stars}>
          <StarRates rate={review.rate}/>
        </Grid>
        <Grid item xs={12} sm={12} className={classes.dateGrid}>
          <Typography variant="body2" component="p">
            {moment(review.createdAt.toDate()).format('DD.MM.YYYY')}
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body1" component="p">
        {review.description}
      </Typography>
      {review.positive
        ? <Typography component="p">
          <strong>Positive: </strong> {review.positive}
        </Typography>
        : null
      }
      {review.negative
        ? <Typography component="p">
          <strong>Negative: </strong> {review.negative}
        </Typography>
        : null
      }
      <Button
        color="primary"
        size="medium"
        onClick={handleOpenDialog}>
        <ReplayIcon/>
        Replay
      </Button>
      <AddReviewForReview
        isOpenDialog={isOpenDialog}
        handleOpenDialog={handleOpenDialog}
        id={review.id}
      />
      {review.reviewForReview.map((review) =>
        <ReviewForReview
          key={review.createdAt}
          description={review.description}
          username={review.username}
          date={review.createdAt}
        />)}

    </Paper>
  );
}

export default withStyles(styles)(RewiewInCard);
