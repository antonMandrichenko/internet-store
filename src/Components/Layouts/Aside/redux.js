import {getCurrentCategory} from "../../../store/actions/productsActions";

export const mapStateToProps = state => {
  console.log(state)
  return {
    categories: state.firestore.ordered.categories,
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentCategory: (category) => dispatch(getCurrentCategory(category)),
  }
};
