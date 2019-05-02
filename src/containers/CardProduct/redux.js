import {handleToOrFromCart} from "../../store/actions/cartActions";

export const mapStateToProps = state => {
  return {
    currentProduct: state.products.currentProduct,
    cart: state.cart.productsInCart
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    handleToOrFromCart: (product, isClick) =>
      dispatch(handleToOrFromCart(
        dispatch,
        product,
        isClick
      )),
  }
};

