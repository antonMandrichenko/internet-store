export const mapStateToProps = state => {
  return {
    categories: state.firestore.ordered.categories,
    subcategories: state.firestore.ordered.subcategories,
  }
};

