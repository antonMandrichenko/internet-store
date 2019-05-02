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
    success: state.auth.success,
  }
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUser: (user, id) =>
      dispatch(updateUser(
        ownProps,
        dispatch,
        user,
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
