export const mapStateToProps = state => {
  return {
    reviews: state.firestore.ordered.reviews
  }
};
