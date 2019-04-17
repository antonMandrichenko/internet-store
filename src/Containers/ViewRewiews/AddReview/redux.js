import {createReview} from "../../../store/actions/reviewActions";

export const mapDispatchToProps = dispatch => {
  return {
    createReview: (review) => dispatch(createReview(review))
  }
};
