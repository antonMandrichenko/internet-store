import { createReview } from "../../../store/actions/reviewActions";

export const mapStateToProps = state => {
  return {
    currentProduct: state.products.currentProduct
  }
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createReview: (review, product) => dispatch(createReview(ownProps, dispatch, review, product))
  }
};