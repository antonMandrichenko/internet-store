import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {withFirestore} from "react-redux-firebase";
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux'
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { styles } from "./style";
import { mapDispatchToProps } from "./redux";


AddReviewForReview.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpenDialog: PropTypes.bool.isRequired,
  handleOpenDialog: PropTypes.func.isRequired,
  createReviewForReview: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

function AddReviewForReview({ classes,
                              isOpenDialog,
                              handleOpenDialog,
                              createReviewForReview,
                              id
}) {

  const initState = {
    description: '',
    username: '',
    email: '',
    createdAt: new Date()
  };

  const [reviewCreate, setReviewCreate] = useState(initState);

  const handleChange = e => {
    setReviewCreate({
      ...reviewCreate,
      [e.target.id]: e.target.value
    })
  };

  const handleSubmit = event => {
    event.preventDefault();
    createReviewForReview(id, reviewCreate);
    setReviewCreate(initState);
  };

  return (
    <Dialog
      open={isOpenDialog}
      onClose={handleOpenDialog}
    >
      <Grid
        container justify="center"
        className={classes.dialog}>
        <Grid item md={11}>
          <Paper>
            <Typography variant="h5" component="h5" align="center">
              Add review
            </Typography>
            <form className={classes.container} onSubmit={handleSubmit}>
              <TextField
                label="Description"
                name="description"
                id="description"
                multiline
                rows="4"
                className={classes.textField}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Your name"
                name="username"
                id="username"
                className={classes.textField}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                id="email"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                fullWidth
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                fullWidth
                type="submit"
                onClick={handleOpenDialog}>
                Send review
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default compose(
  withFirestore,
  connect(null, mapDispatchToProps),
  withStyles(styles)
  )(AddReviewForReview);
