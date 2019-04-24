import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { styles } from './style';

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

function CircularIndeterminate({classes, size, color}) {
  return (
    <div className={classes.root}>
      <CircularProgress
        color={!size && !color ? 'primary' : 'secondary'}
        className={!size && !color ? classes.progress : classes.progressSmall} />
    </div>
  );
}

export default withStyles(styles)(CircularIndeterminate);
