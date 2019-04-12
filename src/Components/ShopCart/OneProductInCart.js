import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DialogContent from "@material-ui/core/DialogContent";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from '@material-ui/icons/Clear';
import Fab from "@material-ui/core/Fab";
import ChangeCount from "./ChangeCount";

OneProductInCart.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  subtitle1: {
    fontSize: '.7rem'
  },
  image: {
    width: '80%',
  },
  dialog: {
    padding: '1rem'
  },
  first: {
    [theme.breakpoints.down('sm')]: {
      order: 1,

    },
  },
  second: {
    [theme.breakpoints.down('sm')]: {
      order: 2,
      display: 'flex',
      justifyContent: 'center',
      width: 10
    },
  },
  third: {
    [theme.breakpoints.down('sm')]: {
      order: 3,
      display: 'flex',
      justifyContent: 'center',
      marginTop: '1rem'
    },
  }
});

function OneProductInCart({classes, id}) {
  return (
    <Fragment>
      <Grid container className={classes.dialog}>
        <Grid
          item
          md={2}
          xs={3}
          className={classes.first}>
          <img
            src={'./img/avatar.jpg'}
            className={classes.image}
          />
        </Grid>
        <Grid
          item
          md={3}
          xs={7}
          className={classes.first}>
          <Typography
            variant="subtitle1"
            component="p">
            <strong>Name of product Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit.
          </Typography>
        </Grid>
        <Grid
          item
          md={2}
          xs={4}
          className={classes.third}>
          <Typography
            variant="subtitle1"
            component="p"
            align="center">
            $2200
          </Typography>
        </Grid>
        <Grid
          item
          md={2}
          xs={4}
          className={classes.third}>
            <ChangeCount id={id}/>
        </Grid>
        <Grid
          item
          md={2}
          xs={4}
          className={classes.third}>
          <Typography
            variant="subtitle1"
            component="p"
            align="center" >
            2200
          </Typography>
        </Grid>
        <Grid
          item
          md={1}
          xs={2}
          className={classes.second}>
          <Fab
            color="primary"
            aria-label="Add"
            size="small">
            <ClearIcon />
          </Fab>
        </Grid>
      </Grid>
      <Divider/>
    </Fragment>

  );
}

export default withStyles(styles)(OneProductInCart);
