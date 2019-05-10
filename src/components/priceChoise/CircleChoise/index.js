import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {styles} from './style';

CircleChoise.propTypes = {
  classes: PropTypes.object.isRequired,
  handleGivePosition: PropTypes.func,
  handleChangePosition: PropTypes.func,
  data: PropTypes.string.isRequired,
};

function CircleChoise({
  classes, 
  left, 
  width, 
  handleGivePosition, 
  data, 
  handleChangePosition
}) {
  return (
    <div
      className={classes.root}
      style={{left: left}}
      onMouseDown={(e) => {handleGivePosition(e, data)}}
      // onMouseMove={handleChangePosition}
    />
  );
}

export default withStyles(styles)(CircleChoise);
