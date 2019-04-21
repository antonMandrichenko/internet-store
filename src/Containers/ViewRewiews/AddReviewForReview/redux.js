import { createReviewForReview } from "../../../store/actions/reviewActions";

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createReviewForReview: (id, review) => dispatch(createReviewForReview(ownProps, dispatch, id, review))
  }
};
