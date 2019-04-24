export const mapStateToProps = state => {
  return {
    orders: state.firestore.ordered.orders,
  }
};
