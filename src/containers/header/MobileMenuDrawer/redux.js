import {getCurrentCategory} from "../../../store/actions/productsActions";

export const mapStateToProps = state => {
  return {
    categories: state.firestore.ordered.categories,
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentCategory: (category) => 
      dispatch(getCurrentCategory(category)),
  }
};
