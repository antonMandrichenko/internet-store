import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StarRates from "../StarsRate";
import TabsProduct from "../Tabs/Tabs";
import { styles } from "./style";

CardProduct.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

function CardProduct(props) {
  const {classes} = props;
  const product = {...props.location.state.product};
  const handleAddToCart = props.location.handleAddToCart;
  const isInCart = props.location.isInCart;
  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          {product.name}
        </Typography>
        <StarRates/>
        <TabsProduct product={product} handleAddToCart={handleAddToCart} isInCart={isInCart}/>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(CardProduct);
