import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";


Logout.propTypes = {

};

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  avatar: {
    margin: 10,
    width: 30,
    height: 30,
  },
});

function Logout({signOutSubmit, classes}) {
  return (
    <div className={classes.root}>
      <Button color="inherit" onClick={signOutSubmit}>Logout</Button>
      <Avatar alt="Remy Sharp" src="./products/img/avatar.jpg" className={classes.avatar}/>
    </div>
  );
}

export default withStyles(styles)(Logout);
