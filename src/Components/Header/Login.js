import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import SignUp from "./SignUp";

Login.propTypes = {

};
const styles = theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
});

function Login({classes}) {
  return (
    <div className={classes.root}>
      <NavLink to="/signin">
        <Button color="inherit">Login</Button>
      </NavLink>
      <NavLink to="/register">
        <SignUp/>
      </NavLink>
    </div>
  );
}

export default withStyles(styles)(Login);
