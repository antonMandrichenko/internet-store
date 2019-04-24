import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import SignUp from "../SignUp";
import { styles } from "./style";

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

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
