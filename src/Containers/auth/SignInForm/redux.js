import {signIn} from "../../../store/actions/authActions";

export const mapStateToProps = state => {
  console.log(state);
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signInSubmit: (data) => dispatch(signIn(ownProps, dispatch, data))
  }
};
