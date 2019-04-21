import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { styles } from './style';

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

function CircularIndeterminate({classes}) {
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.progress} />
    </div>
  );
}

export default withStyles(styles)(CircularIndeterminate);
