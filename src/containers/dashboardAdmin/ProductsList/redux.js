import {deleteProduct, editProduct} from "../../../store/actions/productsActions";

export const mapStateToProps = state => {
  return {
    products: state.firestore.ordered.products,
    error: state.products.productsError,
  }
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteProduct: (id) =>
      dispatch(deleteProduct(
        ownProps,
        dispatch,
        id)),
    editProduct: (products, id) =>
      dispatch(editProduct(
        dispatch,
        products,
        id)),
  }
};
