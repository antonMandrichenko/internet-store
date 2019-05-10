import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import SignUp from "../SignUp";
import { styles } from "./style";

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

function Login({ classes, history }) {

  const handleRouter = (e) => {
    if (e.target.innerHTML === 'Login')
      history.push('/signin');
    if (e.target.innerHTML === 'Sign Up')
      history.push('/register');
  };

  return (
    <div className={classes.root}>
      <Button
        onClick={handleRouter}
        color="inherit">
        Login
        </Button>
      <SignUp
        handleRouter={handleRouter}
      />
    </div>
  );
}

export default withStyles(styles)(withRouter(Login));