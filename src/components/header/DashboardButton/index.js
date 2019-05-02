import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {styles} from "./style";

DashboardButton.propTypes = {
  handleLink: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

function DashboardButton({handleLink, classes}) {
  return (<div className={classes.root}>
      <Button
        color="inherit"
        onClick={handleLink}
        className={classes.button}>
        Dashboard
      </Button>
    </div>
  );
}

export default withStyles(styles)(DashboardButton);
