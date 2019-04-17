import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import AddShoppingCart from "../../Icons/AddShoppingCart";
import FavoriteIc from "../../Icons/Favorite";
import {NavLink} from "react-router-dom";
import { styles } from "./style";

Minicart.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  isInCart: PropTypes.bool.isRequired,
};

function Minicart({ classes,
                    product,
                    handleAddToCart,
                    isInCart
}) {
  return (
    <Card className={classes.root}>
      <CardContent>
        <NavLink to={{
          pathname: `/products/${product.name}`,
          state: {
            product:{...product, },
          },
          handleAddToCart: handleAddToCart,
          isInCart: isInCart
        }}>
          <CardMedia
            className={classes.media}
            image={product.img.first}
            title={product.name}
          />
          <Typography variant="h6" component="p">
            {product.name}
          </Typography>
        </NavLink>
        <Typography variant="subtitle1" component="p" className={classes.price}>
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <FavoriteIc/>
        <AddShoppingCart
          handleAddToCart={handleAddToCart}
          product={product}
          isInCart={isInCart}
        />
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(Minicart);
