import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { firestoreConnect, withFirebase } from "react-redux-firebase";
import { Redirect, withRouter } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { styles } from "./style";
import { mapStateToProps, mapDispatchToProps } from "./redux";

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  signInSubmit: PropTypes.func.isRequired,
  authError: PropTypes.object,
  auth: PropTypes.any,
  users: PropTypes.any,
  getCurrentUser: PropTypes.func.isRequired,
};

function SignIn({ classes,
                  signInSubmit,
                  authError,
                  auth,
                  getCurrentUser,
                  users,
}) {

  const initState = {
    email: '',
    password: ''
  };

  const[signInObj, setSignInObj] = useState(initState);

  const handleChange = (e) => {
    setSignInObj({
      ...signInObj,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInSubmit(signInObj);
  };

  if (auth.uid) {
    getCurrentUser(users, auth.uid);
    return <Redirect to={'/'}/>
  }

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus onChange={handleChange}/>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" onChange={handleChange}/>
          </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            Sign in
          </Button>
          <div className={classes.error}>{authError ? authError.message : null}</div>
        </form>
      </Paper>
    </main>
  );
}

export default compose(
  withRouter,
  withFirebase,
  firestoreConnect([
    {collection: 'users'},
  ]),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
) (SignIn);
