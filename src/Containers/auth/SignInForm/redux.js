import {getCurrentUser, signIn} from "../../../store/actions/authActions";

export const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
  }};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signInSubmit: (data) => dispatch(signIn(ownProps, dispatch, data)),
    getCurrentUser: (users, id) => dispatch(getCurrentUser(users, id))
  }
};
