import {deleteReview} from "../../../store/actions/reviewActions";

export const mapStateToProps = state => {
  return {
    reviews: state.firestore.ordered.reviews,
  }
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteReview: (id) => dispatch(deleteReview(ownProps, dispatch, id)),
  }
};
