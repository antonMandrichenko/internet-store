import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {compose} from "redux";
import {connect} from "react-redux";
import {withFirebase} from "react-redux-firebase";
import {withRouter} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import OneProductInCart from "../OneProductInCart";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import {styles} from "./style";
import {mapStateToProps, mapDispatchToProps} from "./redux";

ShopCart.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  deleteFromCart: PropTypes.func.isRequired,
  addAmount: PropTypes.func.isRequired,
  reduceAmount: PropTypes.func.isRequired,
  amountOfProduct: PropTypes.func.isRequired,
  totalAmount: PropTypes.func.isRequired,
  summary: PropTypes.any,
};

function ShopCart({
                    classes,
                    history,
                    cart,
                    deleteFromCart,
                    addAmount,
                    reduceAmount,
                    amountOfProduct,
                    totalAmount,
                    summary,
                    auth,
                  }) {

  const handleRedirect = () => {
    history.goBack();
  };

  const handleCheckout = () => {
    history.push('/checkout');
  };

  const handleDeleteFromCart = (id) => {
    deleteFromCart(id);
    totalAmount()
  };

  const handleLink = () => {
    history.push("/signin")
  };

  return (
    <Fragment>
      {cart.length !== 0
        ? <Fragment>
          <div className={classes.grid}>
            <DialogTitle
              id="responsive-dialog-title">
              {"Shop cart"}
            </DialogTitle>
            <Divider/>
            <Grid container className={classes.title}>
              <Grid item md={2}>
                <Typography
                  variant="subtitle1"
                  component="p"
                  align="center">
                  <strong>Photo</strong>
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography
                  variant="subtitle1"
                  component="p"
                  align="center">
                  <strong>About product</strong>
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography
                  variant="subtitle1"
                  component="p"
                  align="center">
                  <strong>Price</strong>
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography
                  variant="subtitle1"
                  component="p"
                  align="center">
                  <strong>Count</strong>
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography
                  variant="subtitle1"
                  component="p"
                  align="center">
                  <strong>Summary</strong>
                </Typography>
              </Grid>
            </Grid>
            <Divider className={classes.title}/>
            {cart.map((product) =>
              <OneProductInCart
                key={product.id}
                product={product}
                handleDeleteFromCart={handleDeleteFromCart}
                addAmount={addAmount}
                reduceAmount={reduceAmount}
                amountOfProduct={amountOfProduct}
                totalAmount={totalAmount}
              />)}
            <Typography variant="h4" align="right">
              All products cost: ${summary}
            </Typography>
            <DialogActions>
              <Button
                onClick={handleRedirect}
                color="primary">
                To the shop
              </Button>
              {
                auth.uid
                  ? <Button
                    onClick={handleCheckout}
                    variant="contained"
                    color="primary"
                    autoFocus>
                    Checkout
                  </Button>
                  : <Button
                    onClick={handleLink}
                    variant="contained"
                    color="primary"
                    autoFocus>
                    Please, log in
                  </Button>

              }

            </DialogActions>
          </div>
        </Fragment>
        : <Paper className={classes.grid}>
          <Typography
            variant="h5">
            No product in cart
          </Typography>
          <Button
            onClick={handleRedirect}
            variant="contained"
            color="primary">
            To the shop
          </Button>
        </Paper>
      }
    </Fragment>
  );
}

export default compose(
  withRouter,
  withFirebase,
  withMobileDialog({breakpoint: 'sm'}),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(ShopCart);
