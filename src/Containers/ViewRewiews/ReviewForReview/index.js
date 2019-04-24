import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { styles } from "./style";

ReviewForReview.propTypes = {
  classes: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  date: PropTypes.any,
};

function ReviewForReview({classes, description, username, date}) {
  return (
    <Grid container className={classes.reviewView}>
      <Grid item xs={11}>
        <Divider />
        <Grid container>
          <Grid item md={4} xs={5}>
            <Typography variant="h6" component="h6">
              {username}
            </Typography>
          </Grid>
          <Grid item md={8} xs={7} className={classes.dateGrid}>
            <Typography variant="body2" component="p">
              {moment(date.toDate()).format('DD.MM.YYYY')}
            </Typography>
          </Grid>
        </Grid>
        <Typography component="p">
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(ReviewForReview);
