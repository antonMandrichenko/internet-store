import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {firestoreConnect, withFirebase, withFirestore} from "react-redux-firebase";
import Minicart from "../../Components/Layouts/Minicart";
import Grid from "@material-ui/core/Grid";
import CircularIndeterminate from '../../Components/Circular'
import { styles } from "./style";
import { mapStateToProps, mapDispatchToProps } from "./redux";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

ListOfProducts.propTypes = {
  products: PropTypes.any,
  handleToOrFromCart: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  currentCategory: PropTypes.string.isRequired,
};

function ListOfProducts({ products,
                          cart,
                          handleToOrFromCart,
                          currentCategory
}) {

  return (
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Typography variant="h6">
          {!currentCategory ? 'All products' : `Products of ${currentCategory}`}
        </Typography>
      </Grid>
      {products
        ? !currentCategory
          ? products.map((product) => {
            let isInCart = false;
            cart.forEach((productInCart) => {
              if (productInCart.id === product.id)
                isInCart = true;
            });
            return <Grid key={product.name} item lg={3} md={4} sm={6}>
              <Minicart product={product} handleToOrFromCart={handleToOrFromCart} isInCart={isInCart}/>
            </Grid>
          })
          : <Fragment>
            { products.filter((product) =>
              product.category === currentCategory).length !== 0
              ? products.filter((product) =>
              product.category === currentCategory).map((product) => {
                let isInCart = false;
                cart.forEach((productInCart) => {
                  if (productInCart.id === product.id)
                    isInCart = true;
                });
                return <Grid key={product.name} item lg={3} md={4} sm={6}>
                  <Minicart product={product} handleToOrFromCart={handleToOrFromCart} isInCart={isInCart}/>
                </Grid>
              })
              : <Paper> Sorry, no products of this category</Paper>
            }
          </Fragment>
        : <CircularIndeterminate/>}
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
