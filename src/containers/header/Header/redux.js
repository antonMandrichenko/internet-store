import {signOut} from "../../../store/actions/authActions";
import {noCurrentCategory} from "../../../store/actions/productsActions";

export const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
    productsInCart: state.cart.productsInCart,
    currentUser: state.auth.currentUser,
  }
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps, dispatch);
  return {
    signOutSubmit: () => dispatch(signOut(dispatch, ownProps)),
    noCurrentCategory: () => dispatch(noCurrentCategory()),
  }
};
