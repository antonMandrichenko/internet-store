import { updateProduct } from "../../../store/actions/productsActions";

export const mapStateToProps = state => {
  return {
    categories: state.firestore.ordered.categories,
    editProduct: state.products.editProduct,
  }
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateProduct: (product, id) => dispatch(updateProduct(ownProps, dispatch, product, id))
  }
};
