import { handleToOrFromCart } from "../../store/actions/cartActions";
import {
  noSort,
  sortAlthabetic,
  sortPriceHigh,
  sortPriceLow
} from "../../store/actions/productsActions";

export const mapStateToProps = state => {
  return {
    products: state.firestore.ordered.products,
    cart: state.cart.productsInCart,
    currentCategory: state.products.currentCategory,
    sortProducts: state.products.sortProducts,
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    handleToOrFromCart: (product, isClick) =>
      dispatch(handleToOrFromCart(
        dispatch,
        product,
        isClick)),
    sortAlthabetic: (products) =>
      dispatch(sortAlthabetic(products)),
    sortPriceLow: (products) =>
      dispatch(sortPriceLow(products)),
    sortPriceHigh: (products) =>
      dispatch(sortPriceHigh(products)),
    noSort: (products) =>
      dispatch(noSort(products)),
  }
};
