import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing.unit,
    width: 140,
    textAlign: 'center',
    fontSize: '1.5rem'
  },
});

function Price({classes}) {
  return <div className={classes.root}>${2536}</div>;
}

Price.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Price);
