import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {styles} from './style';
import Paper from "@material-ui/core/Paper";

SquearChoise.propTypes = {

};

function SquearChoise({classes, isOpen, children}) {


  return (
    <Paper className={isOpen
      ? classes.innerBlock
      : classes.innerBlockClose}
    >
      {children}
    </Paper>
  );
}

export default withStyles(styles)(SquearChoise);
