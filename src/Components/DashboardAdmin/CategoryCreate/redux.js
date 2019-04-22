import {createCategory} from "../../../store/actions/productsActions";

export const mapStateToProps = state => {
  return {
    categories: state.firestore.ordered.categories,
    // subcategories: state.firestore.ordered.subcategories,
  }
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('ownProps', ownProps)
  return {
    createCategory: (category) => dispatch(createCategory(ownProps, dispatch, category))
  }
};
