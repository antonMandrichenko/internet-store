import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StarRates from "../StarsRate";
import TabsProduct from "./Tabs";

CardProduct.propTypes = {

};

function CardProduct(props) {
  return (
    <Grid container>
      <Grid item md={12}>
        <Typography variant="h2" gutterBottom>
          Name of product
        </Typography>
        <StarRates/>
        <TabsProduct/>
      </Grid>
    </Grid>
  );
}

export default CardProduct;
