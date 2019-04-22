import {signOut} from "../../../store/actions/authActions";
import {noCurrentCategory} from "../../../store/actions/productsActions";

export const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps, dispatch);
  return {
    signOutSubmit: () => dispatch(signOut(dispatch, ownProps)),
    noCurrentCategory: () => dispatch(noCurrentCategory()),
  }
};
