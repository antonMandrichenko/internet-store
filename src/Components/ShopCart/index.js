import React, {useState, useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";
import withMobileDialog from '@material-ui/core/withMobileDialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import OneProductInCart from "./OneProductInCart";
import Divider from "@material-ui/core/Divider";
import {compose} from "redux";

ShopCart.propTypes = {

};

const styles = theme => ({
  title: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
});

function ShopCart({fullScreen, isOpenCart, handleOpenCart, classes}) {

  return (
    <Fragment>
      {isOpenCart
        ?  <div>
            <Dialog
              fullScreen={fullScreen}
              open={isOpenCart}
              maxWidth={'lg'}
              onClose={handleOpenCart}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">{"Shop cart"}</DialogTitle>
              <Divider/>

              <DialogContent>
                <Grid container className={classes.title}>
                  <Grid item md={2}>
                    <Typography variant="subtitle1" component="p" align="center">
                      <strong>Photo</strong>
                    </Typography>
                  </Grid>
                  <Grid item md={3}>
                    <Typography variant="subtitle1" component="p" align="center">
                      <strong>About product</strong>
                    </Typography>
                  </Grid>
                  <Grid item md={2}>
                    <Typography variant="subtitle1" component="p" align="center">
                      <strong>Price</strong>
                    </Typography>
                  </Grid>
                  <Grid item md={2}>
                    <Typography variant="subtitle1" component="p" align="center">
                      <strong>Count</strong>
                    </Typography>
                  </Grid>
                  <Grid item md={2}>
                    <Typography variant="subtitle1" component="p" align="center">
                      <strong>Summary</strong>
                    </Typography>
                  </Grid>
                </Grid>
                <Divider className={classes.title}/>
                {[0,1,2].map((item) =>
                  <OneProductInCart
                    key={item}
                    id={item}
                  />)}
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleOpenCart}
                  color="primary">
                  To the shop
                </Button>
                <Button
                  onClick={handleOpenCart}
                  variant="contained"
                  color="primary"
                  autoFocus>
                  Checkout
                </Button>
              </DialogActions>
            </Dialog>
          </div>
      : null
      }
    </Fragment>
  );
}

export default compose(
  withMobileDialog({breakpoint: 'sm'}),
  withStyles(styles)
)(ShopCart);
