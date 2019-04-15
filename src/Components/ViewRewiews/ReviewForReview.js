import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import Grid from "@material-ui/core/Grid/index";
import Typography from "@material-ui/core/Typography/index";
import Divider from "@material-ui/core/Divider/index";

ReviewForReview.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  reviewView: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  dateGrid: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

function ReviewForReview({classes}) {
  return (
    <Grid container className={classes.reviewView}>
      <Grid item xs={11}>
        <Divider />
        <Grid container>
          <Grid item md={4} xs={5}>
            <Typography variant="h6" component="h6">
           Alibaba
            </Typography>
          </Grid>
          <Grid item md={8} xs={7} className={classes.dateGrid}>
            <Typography variant="body2" component="p">
             22.12.2018
            </Typography>
          </Grid>
        </Grid>
        <Typography component="p">
          Lorem lorem lorem lorem lorem lorem
        </Typography>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(ReviewForReview);
