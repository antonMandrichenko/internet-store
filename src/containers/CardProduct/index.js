import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {compose} from "redux";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StarRates from "../../components/cardProduct/StarsRate";
import TabsProduct from "../../components/cardProduct/Tabs";
import {styles} from "./style";
import {mapStateToProps, mapDispatchToProps} from "./redux";

CardProduct.propTypes = {
  classes: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  handleToOrFromCart: PropTypes.func.isRequired,
  currentProduct: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

function CardProduct({
                       classes,
                       cart,
                       handleToOrFromCart,
                       currentProduct,
                       match
                     }) {
  let product;
  if (currentProduct.id) {
    product = {...currentProduct};
    localStorage.setItem(product.id, JSON.stringify(product));
  } else {
    product = JSON.parse(localStorage.getItem(match.params.id))
  }
  let isInCart = false;
  cart.forEach((productInCart) => {
    if (productInCart.id === product.id)
      isInCart = true;
  });
  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          {product.name}
        </Typography>
        <StarRates rate={product.rate}/>
        <TabsProduct
          product={product}
          handleToOrFromCart={handleToOrFromCart}
          isInCart={isInCart}
        />
      </Grid>
    </Grid>
  );
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(CardProduct);
