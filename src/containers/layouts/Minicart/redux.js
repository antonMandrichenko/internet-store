import {getCurrentProduct} from "../../../store/actions/productsActions";

export const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentProduct: (product) =>
      dispatch(getCurrentProduct(product)),
  }
};
