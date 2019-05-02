import { updateUser } from "../../../store/actions/authActions";
import { createOrder } from "../../../store/actions/cartActions";

export const mapStateToProps = state => {
  return {
    users: state.firestore.ordered.users,
    orders: state.firestore.ordered.orders,
    auth: state.firebase.auth,
    productsInCart: state.cart.productsInCart,
    totalAmount: state.cart.totalAmount,
    isLoading: state.cart.isLoading,
    currentUser: state.auth.currentUser,
    error: state.cart.cartError,
  }
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUser: (product, id) =>
      dispatch(updateUser(
        ownProps,
        dispatch,
        product,
        id
      )),
    createOrder: (id, products, totalAmount, number) =>
      dispatch(createOrder(
        ownProps,
        dispatch,
        id,
        products,
        totalAmount,
        number
      )),
  }
};
