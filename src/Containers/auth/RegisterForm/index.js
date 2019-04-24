import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose } from "redux";
import {firestoreConnect, withFirebase } from "react-redux-firebase";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
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

Registered.propTypes = {
  classes: PropTypes.object.isRequired,
  signUpSubmit: PropTypes.func.isRequired,
  auth: PropTypes.any,
  getCurrentUser: PropTypes.func,
  users: PropTypes.any,
};

function Registered({ classes,
                      signUpSubmit,
                      auth,
                      getCurrentUser,
                      users
}) {

  const initState = {
    firstName: '',
    secondName: '',
    email: '',
    password: ''
  };

  const[signupData, setSignupData] = useState(initState);

  const handleChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpSubmit(signupData);
  };

  if (auth.uid) {
    getCurrentUser(users, auth.uid);
    return <Redirect to='/' />;
  }

  return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="firstName">First name</InputLabel>
              <Input id="firstName" name="firstName" autoFocus onChange={handleChange} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="secondName">Second name</InputLabel>
              <Input id="secondName" name="secondName" onChange={handleChange}/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" onChange={handleChange}/>
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
              Register
            </Button>
          </form>
        </Paper>
      </main>
  );
}

export default compose(
  withFirebase,
  firestoreConnect([
    {collection: 'users'},
  ]),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
) (Registered);
