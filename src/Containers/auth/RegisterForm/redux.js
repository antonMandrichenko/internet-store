import {getCurrentUser, register} from "../../../store/actions/authActions";

export const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
  }};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signUpSubmit: (data) => dispatch(register(ownProps, dispatch, data)),
    getCurrentUser: (users, id) => dispatch(getCurrentUser(users, id))
  }
};
