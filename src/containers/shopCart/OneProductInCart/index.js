import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import ClearIcon from '@material-ui/icons/Clear';
import Fab from "@material-ui/core/Fab";
import ChangeCount from "../../../components/shopCart/ChangeCount";
import {styles} from "./style";

OneProductInCart.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  handleDeleteFromCart: PropTypes.func.isRequired,
  addAmount: PropTypes.func.isRequired,
  reduceAmount: PropTypes.func.isRequired,
  amountOfProduct: PropTypes.func.isRequired,
  totalAmount: PropTypes.func.isRequired,
};

function OneProductInCart({
                            classes,
                            product,
                            handleDeleteFromCart,
                            addAmount,
                            reduceAmount,
                            amountOfProduct,
                            totalAmount
                          }) {

  useEffect(() => {
    amountOfProduct(product.id);
    totalAmount();
  }, [product.amount]);

  return (
    <Fragment>
      <Grid
        container
        className={classes.dialog}>
        <Grid
          item
          md={2}
          xs={3}
          className={classes.first}>
          <img
            src={product.img[0]}
            className={classes.image}
            alt={product.img[0]}
          />
        </Grid>
        <Grid
          item
          md={3}
          xs={7}
          className={classes.first}>
          <Typography
            variant="subtitle1"
            component="p">
            <strong>{product.name}</strong>
          </Typography>
          <Typography
            variant="body1"
            component="p">
            {product.description.slice(0, 60).concat('...')}
          </Typography>
        </Grid>
        <Grid
          item
          md={2}
          xs={4}
          className={classes.third}>
          <Typography
            variant="subtitle1"
            component="p"
            align="center">
            ${product.price}
          </Typography>
        </Grid>
        <Grid
          item
          md={2}
          xs={5}
          className={classes.third}>
          <ChangeCount
            product={product}
            addAmount={addAmount}
            reduceAmount={reduceAmount}
          />
        </Grid>
        <Grid
          item
          md={2}
          xs={3}
          className={classes.third}>
          <Typography
            variant="subtitle1"
            component="p"
            align="center">
            {product.amountCost
              ? product.amountCost
              : 'Calculation...'
            }
          </Typography>
        </Grid>
        <Grid
          item
          md={1}
          xs={2}
          className={classes.second}>
          <Fab
            color="primary"
            aria-label="Add"
            size="small"
            onClick={handleDeleteFromCart.bind(this, product.id)}>
            <ClearIcon/>
          </Fab>
        </Grid>
      </Grid>
      <Divider/>
    </Fragment>
  );
}

export default withStyles(styles)(OneProductInCart);
