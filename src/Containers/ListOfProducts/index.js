import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {firestoreConnect, withFirebase, withFirestore} from "react-redux-firebase";
import Minicart from "../../Components/Layouts/Minicart";
import Grid from "@material-ui/core/Grid";
import { styles } from "./style";
import { mapStateToProps, mapDispatchToProps } from "./redux";

ListOfProducts.propTypes = {
  classes: PropTypes.object.isRequired,
  products: PropTypes.any,
  addToCart: PropTypes.func.isRequired,
  deleteFromCart: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
};

function ListOfProducts({ classes,
                          products,
                          addToCart,
                          deleteFromCart,
                          cart
}) {

  const handleAddToCart = (product, isClick) => {
    isClick
      ? deleteFromCart(product.id)
      : addToCart(product);
  };

  return (
    <Grid container spacing={16}>
      {products
        ? products.map((product) => {
          let isInCart = false;
          cart.forEach((productInCart) => {
            if (productInCart.id === product.id)
              isInCart = true;
          });
          return <Grid key={product.name} item lg={3} md={4} sm={6}>
            <Minicart product={product} handleAddToCart={handleAddToCart} isInCart={isInCart}/>
          </Grid>
        })
        : <div>loading products...</div>}
    </Grid>
  );
}

export default compose(
  withFirebase,
  withFirestore,
  firestoreConnect([
    {collection: 'products'}
  ]),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(ListOfProducts);
