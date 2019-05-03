import React, {useState} from 'react';
import PropTypes from "prop-types";
import {withStyles} from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from "@material-ui/core/Button";
import {styles} from './style';

AddShoppingCart.propTypes = {
  large: PropTypes.string,
  handleToOrFromCart: PropTypes.func,
  product: PropTypes.object,
  isInCart: PropTypes.bool,
  classes: PropTypes.object.isRequired,
};

function AddShoppingCart({
                           large,
                           handleToOrFromCart,
                           product,
                           isInCart,
                           classes
                         }) {

  const [isClickAble, setIsClick] = useState(isInCart);

  const changeHandle = () => {
    handleToOrFromCart(product, isClickAble);
    setIsClick(!isClickAble);
  };

  return (
    <div
      aria-label="Add to cart"
      onClick={changeHandle}
      className={classes.root}>
      {
        isClickAble
          ? <Button variant="outlined"
                    color="primary">
            <AddShoppingCartIcon
              color="primary"
              fontSize={large}
            />
            Remove from cart
          </Button>
          : <Button variant="outlined">
            <AddShoppingCartIcon fontSize={large}/>
            Add to cart
          </Button>
      }
    </div>
  );
}

export default withStyles(styles)(AddShoppingCart);
