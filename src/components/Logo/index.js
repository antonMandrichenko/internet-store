import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from '@material-ui/core/styles';
import {NavLink} from "react-router-dom";
import {compose} from "redux";
import {styles} from "./style";
import Link from "@material-ui/core/Link";

Logo.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func,
};

function Logo({
                classes,
                handleChange,
              }) {
  return (
    <Link
      color="textPrimary"
      underline="none"
      component={NavLink}
      to="/"
      onClick={handleChange}>
      <div
        className={classes.root}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/internet-store-62659.appspot.com/o/logo.png?alt=media&token=9b26b5d0-5e51-4cca-addf-0f81ecba4462"
          alt="logo" className={classes.image}/>
      </div>
    </Link>
  );
}

export default compose(
  withStyles(styles),
)(Logo);
