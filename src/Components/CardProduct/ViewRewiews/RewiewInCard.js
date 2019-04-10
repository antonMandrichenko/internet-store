import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StarRates from "../../StarsRate";
import Button from "@material-ui/core/Button";
import ReplayIcon from '@material-ui/icons/Replay';
import ReviewForReview from "./ReviewForReview";

RewiewInCard.propTypes = {
  classes: PropTypes.object.isRequired,
  review: PropTypes.object.isRequired,
};

const styles = theme => ({
  typogr: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem'
  },
  dateGrid: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

function RewiewInCard({classes, review}) {
  return (
    <Paper elevation={1} className={classes.typogr}>
      <Grid container>
        <Grid item md={2}>
          <Typography variant="h6" component="h6">
            {review.user}
          </Typography>
        </Grid>
        <Grid item md={2}>
          <StarRates rate={review.rate}/>
        </Grid>
        <Grid item md={8} className={classes.dateGrid}>
          <Typography variant="body2" component="p">
            {review.date}
          </Typography>
        </Grid>
      </Grid>
      <Typography component="p">
        {review.text}
      </Typography>
      <Typography component="p">
        <strong>Positive: </strong> {review.positive}
      </Typography>
      <Typography component="p">
        <strong>Negative: </strong> {review.negative}
      </Typography>
      <Button color="primary" size="medium">
        <ReplayIcon/>
        Replay
      </Button>
      <ReviewForReview/>
    </Paper>
  );
}

export default withStyles(styles)(RewiewInCard);
