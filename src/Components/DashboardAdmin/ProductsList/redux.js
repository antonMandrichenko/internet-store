export const mapStateToProps = state => {
  return {
    products: state.firestore.ordered.products,
  }
};

