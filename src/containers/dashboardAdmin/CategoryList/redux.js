import { deleteCategory } from "../../../store/actions/productsActions";

export const mapStateToProps = state => {
  return {
    categories: state.firestore.ordered.categories,
    error: state.products.productsError,
  }
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteCategory: (id) =>
      dispatch(deleteCategory(
        ownProps,
        dispatch,
        id)),
  }
};
