import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import StarRates from "../../StarsRate";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


AddReview.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  container: {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  },
  textField: {
    marginBottom: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  }
});

function AddReview({classes}) {

  const [rate, useRate] = useState(null);
  const [rateClick, useRateClick] = useState(null);
  const [isClick, useIsClick] = useState(false);

  const handleChange = event => {
    console.log(event.target.value);
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
    useRateClick(event.currentTarget.dataset.count)
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.positive.value);
    console.log(event.target.negative.value);
    console.log(event.target.description.value);
    console.log(event.target.username.value);
    console.log(event.target.email.value);

    // console.log(this.inputNode.value)
  };

  return (
    <Grid container justify="center">
      <Grid item md={8}>
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
          <form  className={classes.container} onSubmit={handleSubmit}>
            <TextField
              label="Positive"
              name="positive"
              className={classes.textField}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Negative"
              name="negative"
              className={classes.textField}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              id="standard-multiline-static"
              label="Description"
              name="description"
              multiline
              rows="4"
              className={classes.textField}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              id="standard-name"
              label="Your name"
              name="username"
              className={classes.textField}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              id="standard-name"
              label="Email"
              className={classes.textField}
              type="email"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              fullWidth
            />
            {/*<Grid container justify="center">*/}
              <Button variant="contained" color="primary" className={classes.button} type="submit">
                Send review
              </Button>
            {/*</Grid>*/}
          </form>

        </Paper>
      </Grid>
    </Grid>

  );
}

export default withStyles(styles)(AddReview);
