import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StarRates from "../StarsRate";
import TabsProduct from "../Tabs/Tabs";
import { styles } from "./style";
import {compose} from "redux";
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps } from "./redux";

CardProduct.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  currentProduct: PropTypes.object.isRequired,
};

function CardProduct(props) {
  const {classes, cart, handleToOrFromCart} = props;

  // localStorage.setItem('props', JSON.stringify(props));
  let product;
   if(props.currentProduct.id){
     product = {...props.currentProduct};
     localStorage.setItem(product.id, JSON.stringify(product));
  } else {
    product = JSON.parse(localStorage.getItem(props.match.params.id))
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
        <TabsProduct product={product} handleToOrFromCart={handleToOrFromCart} isInCart={isInCart}/>
      </Grid>
    </Grid>
  );
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(CardProduct);
