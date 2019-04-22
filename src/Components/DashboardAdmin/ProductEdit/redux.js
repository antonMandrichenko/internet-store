import { updateProduct } from "../../../store/actions/productsActions";

export const mapStateToProps = state => {
  return {
    categories: state.firestore.ordered.categories,
    // subcategories: state.firestore.ordered.subcategories,
    editProduct: state.products.editProduct,
  }
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('ownProps', ownProps)
  return {
    updateProduct: (product, id) => dispatch(updateProduct(ownProps, dispatch, product, id))
  }
};
