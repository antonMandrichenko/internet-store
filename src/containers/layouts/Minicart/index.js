import React from 'react';
import PropTypes from "prop-types";
import {compose} from "redux";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {withStyles} from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import AddShoppingCart from "../../../components/icons/AddShoppingCart";
import {styles} from "./style";
import {mapDispatchToProps} from "./redux";
import {Grid} from "@material-ui/core";
import StarRates from "../../../components/StarsRate";

Minicart.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  handleToOrFromCart: PropTypes.func.isRequired,
  isInCart: PropTypes.bool.isRequired,
  getCurrentProduct: PropTypes.func.isRequired,
};

function Minicart({
                    classes,
                    product,
                    handleToOrFromCart,
                    isInCart,
                    getCurrentProduct
                  }) {

  const handleCurrentProduct = () => {
    getCurrentProduct(product);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <NavLink to={{
          pathname: `/products/${product.id}`,
        }} onClick={handleCurrentProduct}>
          <CardMedia
            className={classes.media}
            image={product.img[0]}
            title={product.name}
          />
          <Typography variant="h6" component="p">
            {product.name}
          </Typography>
        </NavLink>
        <Grid container spacing={8}>
          <Grid item xs={5}>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.price}>
              ${product.price}
            </Typography>
          </Grid>
          {
            product.reviews !== 0
              ? <Grid item xs={7}>
                  <StarRates rate={product.rate}/>
                  <Typography
                    variant="caption"
                    component="p">
                    {product.reviews} reviews
                  </Typography>
                </Grid>
              : <Grid item xs={7}>
                <Typography
                  variant="body2"
                  component="p">
                  No reviews
                </Typography>
              </Grid>
          }
        </Grid>

      </CardContent>
      <CardActions>
        <div className={classes.button}>
          <AddShoppingCart
            handleToOrFromCart={handleToOrFromCart}
            product={product}
            isInCart={isInCart}

          />
        </div>

      </CardActions>
    </Card>
  );
}

export default compose(
  withStyles(styles),
  connect(null, mapDispatchToProps)
)(Minicart);
