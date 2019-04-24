import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { styles } from "./style";

Logout.propTypes = {
  signOutSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

function Logout({signOutSubmit, classes, user}) {
  return (
    <div className={classes.root}>
      <Button color="inherit" onClick={signOutSubmit}>Logout</Button>
      <Avatar alt="Remy Sharp" children={user.initials.toUpperCase()}  className={classes.avatar} size={40}/>
    </div>
  );
}

export default withStyles(styles)(Logout);
