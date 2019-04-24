import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Card from "@material-ui/core/Card/index";
import CardContent from "@material-ui/core/CardContent/index";
import Divider from "@material-ui/core/Divider/index";
import Price from "./Price";
import Grid from "@material-ui/core/Grid/index";
import AddShoppingCart from "../../../Components/Icons/AddShoppingCart";
import Availability from "./Availability";
import CreditItem from "./CreditItem";
import Specification from "../specification/Specification";
import Delivery from "./Delivery";
import SliderGoodsImg from "./SliderGoodsImg";

AboutProduct.propTypes = {
  product: PropTypes.object.isRequired,
  handleToOrFromCart: PropTypes.func.isRequired,
  isInCart: PropTypes.bool.isRequired,
};

function AboutProduct({product, handleToOrFromCart, isInCart}) {
  return (
    <Fragment>
      <Grid container>
        <Grid item md={8} sm={12}>
          <SliderGoodsImg img={product.img}/>
        </Grid>
        <Grid item md={4} sm={12}>
          <Card>
            <Availability status={product.status}/>
            <CardContent>
              <Grid container justify="flex-start">
                <Grid item md={4}>
                  <Price price={product.price}/>
                </Grid>
                <Grid item md={8}>
                  <AddShoppingCart
                    large={'large'}
                    product={product}
                    handleToOrFromCart={handleToOrFromCart}
                    isInCart={isInCart}
                  />
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
          <Specification product={product}/>
          <Delivery/>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default AboutProduct;
