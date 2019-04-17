import {signOut} from "../../../store/actions/authActions";

export const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps, dispatch);
  return {
    signOutSubmit: () => dispatch(signOut(dispatch, ownProps))
  }
};
