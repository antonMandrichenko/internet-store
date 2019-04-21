import React, {useState} from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from "@material-ui/core/IconButton";

function AddShoppingCart({large, handleToOrFromCart, product, isInCart}) {

  const [isClickAble, setIsClick] = useState(isInCart);

  const changeHandle = () => {
    handleToOrFromCart(product, isClickAble);
    setIsClick(!isClickAble);
  };

  return (
    <IconButton aria-label="Add to cart" onClick={changeHandle}>
      {isClickAble
        ? <AddShoppingCartIcon color="primary" fontSize={large}/>
        : <AddShoppingCartIcon fontSize={large}/>
      }
    </IconButton>
  );
}

export default AddShoppingCart;
