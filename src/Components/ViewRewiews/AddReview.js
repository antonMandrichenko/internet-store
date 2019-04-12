import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import { compose } from 'redux';
import { connect } from 'react-redux'
import TextField from "@material-ui/core/TextField/index";
import Paper from "@material-ui/core/Paper/index";
import Grid from "@material-ui/core/Grid/index";
import StarRates from "../StarsRate";
import Typography from "@material-ui/core/Typography/index";
import Button from "@material-ui/core/Button/index";
import Dialog from "@material-ui/core/Dialog/index";
// import mapStateToProps from "react-redux/es/connect/mapStateToProps";
// import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps";
import { createReview } from '../../store/actions/reviewActions';
import Drawer from "@material-ui/core/Drawer";



AddReview.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  dialog: {
    padding: '.5rem'
  },
  container: {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  },
  textField: {
    marginBottom: theme.spacing.unit,
  },
  button: {
    margin: '.3rem 0',
  }
});

function AddReview({classes, isOpenDialog, handleOpenDialog, createReview}) {

  const initState = {
    positive: '',
    negative: '',
    description: '',
    username: '',
    email: '',
    rate: ''
  };

  const [rate, useRate] = useState(null);
  const [rateClick, useRateClick] = useState(null);
  const [isClick, useIsClick] = useState(false);
  const [reviewCreate, setReviewCreate] = useState(initState);

  const handleChange = e => {
    console.log(reviewCreate);
    setReviewCreate({
      ...reviewCreate,
      [e.target.id]: e.target.value
    })
  };

  const onOver = (event) => {
    useIsClick(false);
    useRate(event.currentTarget.dataset.count);
  };

  const onLeave = (event) => {
    isClick
      ? event.preventDefault()
      : useRate(null);
    if(!isClick && rate) useRate(rateClick)
  };

  const handleSelectStar = event => {
    useIsClick(true);
    useRate(event.currentTarget.dataset.count);
    useRateClick(event.currentTarget.dataset.count);
    setReviewCreate({
      ...reviewCreate,
      rate: event.currentTarget.dataset.count
    })
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('submit form')
    createReview(reviewCreate);
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
            <Grid container justify="center">
              <StarRates fontSize={"large"}
                         onOver={onOver}
                         onLeave={onLeave}
                         handleSelectStar={handleSelectStar}
                         rate={rate}
              />
            </Grid>
            <form className={classes.container} onSubmit={handleSubmit}>
              <TextField
                label="Positive"
                name="positive"
                id="positive"
                className={classes.textField}
                onChange={handleChange}
                fullWidth
                type="text"
              />
              <TextField
                label="Negative"
                name="negative"
                id="negative"
                className={classes.textField}
                onChange={handleChange}
                fullWidth
                type="text"
              />
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

const mapDispatchToProps = dispatch => {
  return {
    createReview: (review) => dispatch(createReview(review))
  }
}

export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles)
  )(AddReview);
