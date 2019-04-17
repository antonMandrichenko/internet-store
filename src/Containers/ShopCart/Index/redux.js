import {
  addAmount,
  amountOfProduct,
  deleteFromCart,
  reduceAmount,
  totalAmount
} from "../../../store/actions/cartActions";

export const mapStateToProps = state => {
  return {
    cart: state.cart.productsInCart,
    summary: state.cart.totalAmount
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (id) => dispatch(deleteFromCart(id)),
    addAmount: (id) => dispatch(addAmount(id)),
    reduceAmount: (id) => dispatch(reduceAmount(id)),
    amountOfProduct: (id) => dispatch(amountOfProduct(id)),
    totalAmount: () => dispatch(totalAmount()),
  }
};
