import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import Paper from "@material-ui/core/Paper/index";
import Grid from "@material-ui/core/Grid/index";
import Typography from "@material-ui/core/Typography/index";
import StarRates from "../StarsRate";
import Button from "@material-ui/core/Button/index";
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
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      order: -1,
    }
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  }
});

function RewiewInCard({classes, review}) {
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
      <Button color="primary" size="medium">
        <ReplayIcon/>
        Replay
      </Button>
      <ReviewForReview/>
    </Paper>
  );
}

export default withStyles(styles)(RewiewInCard);
