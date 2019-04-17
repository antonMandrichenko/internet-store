import {addToCart, deleteFromCart} from "../../store/actions/cartActions";

export const mapStateToProps = state => {
  return {
    products: state.firestore.ordered.products,
    cart: state.cart.productsInCart
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    deleteFromCart: (id) => dispatch(deleteFromCart(id)),

  }
};
