import {noCurrentCategory, noCurrentProduct} from "../../../store/actions/productsActions";
import {getCurrentUser} from "../../../store/actions/authActions";

export const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
    success: state.auth.success,
  }};

export const mapDispatchToProps = dispatch => {
  return {
    noCurrentProduct: () =>
      dispatch(noCurrentProduct()),
    noCurrentCategory: () =>
      dispatch(noCurrentCategory()),
    getCurrentUser: (users, id) =>
      dispatch(getCurrentUser(users, id))
  }
};
