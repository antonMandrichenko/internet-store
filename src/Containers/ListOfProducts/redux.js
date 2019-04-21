import {addToCart, deleteFromCart, handleToOrFromCart } from "../../store/actions/cartActions";

export const mapStateToProps = state => {
  return {
    products: state.firestore.ordered.products,
    cart: state.cart.productsInCart,
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    handleToOrFromCart: (product, isClick) => dispatch(handleToOrFromCart(dispatch, product, isClick)),
  }
};
