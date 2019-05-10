import React from 'react';
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

SignUp.propTypes = {
  handleRouter: PropTypes.func.isRequired,
};

function SignUp({handleRouter}) {
  return (
    <Button
      color="inherit"
      onClick={handleRouter}>
      Sign Up
    </Button>
  );
}

export default SignUp;
