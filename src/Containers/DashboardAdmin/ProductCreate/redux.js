import {createProduct} from "../../../store/actions/productsActions";

export const mapStateToProps = state => {
  return {
    categories: state.firestore.ordered.categories,
  }
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createProduct: (files, product) => dispatch(createProduct(ownProps, dispatch, files, product))
  }
};
