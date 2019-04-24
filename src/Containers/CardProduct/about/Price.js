import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing.unit,
    width: 'auto',
    textAlign: 'center',
    fontSize: '1.5rem'
  },
});

function Price({classes, price}) {
  return <div className={classes.root}>${price}</div>;
}

Price.propTypes = {
  classes: PropTypes.object.isRequired,
  price: PropTypes.string.isRequired,
};

export default withStyles(styles)(Price);
