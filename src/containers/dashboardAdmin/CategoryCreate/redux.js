import {createCategory} from "../../../store/actions/productsActions";

export const mapStateToProps = state => {
  return {
    categories: state.firestore.ordered.categories,
    error: state.products.productsError,
  }
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createCategory: (category) => 
      dispatch(createCategory(
        ownProps, 
        dispatch, 
        category))
  }
};
