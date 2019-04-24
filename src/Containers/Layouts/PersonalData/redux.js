export const mapStateToProps = state => {
  return {
    users: state.firestore.ordered.users,
    auth: state.firebase.auth,
    currentUser: state.auth.currentUser,
  }
};
