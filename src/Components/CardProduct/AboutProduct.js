import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Price from "./Price";
import Grid from "@material-ui/core/Grid";
import AddShoppingCart from "../Icons/AddShoppingCart";
import FavoriteIc from "../Icons/Favorite";
import Availability from "./Availability";
import CreditItem from "./CreditItem";
import Specification from "./Specification";
import Delivery from "./Delivery";
import SliderGoodsImg from "../SliderGoodsImg";

AboutProduct.propTypes = {};

function AboutProduct({classes}) {
  return (
    <Fragment>
      <Grid container>
        <Grid item md={8}>
          <SliderGoodsImg/>
        </Grid>
        <Grid item md={4}>
          <Card>
            <Availability/>
            <CardContent>
              <Grid container>
                <Grid item md={4}>
                  <Price/>
                </Grid>
                <Grid item md={2}>
                  <FavoriteIc large={'large'}/>
                </Grid>
                <Grid item md={2}>
                  <AddShoppingCart large={'large'}/>
                </Grid>
              </Grid>
            </CardContent>
            <Divider variant="middle"/>
            <Grid container spacing={8}>
              <Grid item md={6}>
                <CreditItem title={'Credit for product'}/>
              </Grid>
              <Grid item md={6}>
                <CreditItem title={'Installment purchase'}/>
              </Grid>
            </Grid>
            <Divider variant="middle"/>
          </Card>
          <Specification/>
          <Delivery/>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default AboutProduct;
