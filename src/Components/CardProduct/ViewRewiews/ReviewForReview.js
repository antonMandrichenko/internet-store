import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

ReviewForReview.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  reviewView: {
    // width: '90%',
    // marginLeft: '2rem',
    display: 'flex',
    justifyContent: 'flex-end'
    // marginBottom: '1rem'
  },
  dateGrid: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

function ReviewForReview({classes}) {
  return (
    <Grid container className={classes.reviewView}>
      <Grid item md={11}>
        <Divider />
        <Grid container>
          <Grid item md={4}>
            <Typography variant="h6" component="h6">
           Alibaba
            </Typography>
          </Grid>
          <Grid item md={8} className={classes.dateGrid}>
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
