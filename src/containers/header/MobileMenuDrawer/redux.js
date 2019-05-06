import {getCurrentCategory} from "../../../store/actions/productsActions";

export const mapStateToProps = state => {
  return {
    categories: state.firestore.ordered.categories,
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentCategory: (category) => 
      dispatch(getCurrentCategory(category)),
  }
};
