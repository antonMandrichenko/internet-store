import {register} from "../../../store/actions/authActions";

export const mapStateToProps = state => {
  console.log(state);
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signUpSubmit: (data) => dispatch(register(ownProps, dispatch, data))
  }
};
