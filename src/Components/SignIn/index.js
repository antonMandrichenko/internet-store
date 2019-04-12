import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Dialog from "@material-ui/core/Dialog";
import { signIn } from '../../store/actions/authActions'
import { withFirebase } from "react-redux-firebase";
import SnackbarContent from "@material-ui/core/SnackbarContent";


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  error: {
    background: '#ef9a9a',
    marginTop: '.5rem'
  }
});

function SignIn({ classes,
                  handleOpenDialog,
                  isOpenDialog,
                  signInSubmit,
                  authError
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
    console.log(signInObj)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInSubmit(signInObj);
  };

  return (
    <Dialog
      open={isOpenDialog}
      onClose={handleOpenDialog}>
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
              // onClick={handleOpenDialog}
            >
              Sign in
            </Button>
            <div className={classes.error}>{authError ? authError.message : null}</div>
          </form>
        </Paper>
      </main>
    </Dialog>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  authError: state.auth.authError
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signInSubmit: (data) => dispatch(signIn(ownProps, dispatch, data))
  }
};

export default compose(
  withFirebase,
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
) (SignIn);
