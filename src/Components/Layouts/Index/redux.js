import {noCurrentCategory, noCurrentProduct} from "../../../store/actions/productsActions";

export const mapDispatchToProps = dispatch => {
  return {
    noCurrentProduct: () => dispatch(noCurrentProduct()),
    noCurrentCategory: () => dispatch(noCurrentCategory()),
  }
};
