import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  ADD_AMOUNT,
  REDUCE_AMOUNT,
  AMOUNT_OF_PRODUCT,
  TOTAL_AMOUNT,
  BEGIN_ORDER,
  CREATE_ORDER,
  CLEAR_CART,
  CREATE_ORDER_ERROR,
} from '../actions/types';

const initState = {
  totalAmount: null,
  productsInCart: [],
  isInCart: false,
  isLoading: false,
  cartError: null,
};

export default (store = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...store,
        productsInCart: [
          ...store.productsInCart,
          action.product
        ],
        cartError: null,
      };
    case DELETE_FROM_CART:
      return {
        ...store,
        productsInCart: store.productsInCart.filter((product) =>
          action.id !== product.id
        ),
        cartError: null,
      };
    case ADD_AMOUNT:
      return {
        ...store,
        productsInCart: store.productsInCart.map((product) => {
          if (action.id === product.id) {
            return {
              ...product,
              amount: product.amount + 1
            }
          } else {
            return product
          }
        }),
        cartError: null,
      };
    case REDUCE_AMOUNT:
      return {
        ...store,
        productsInCart: store.productsInCart.map((product) => {
          if (action.id === product.id) {
            return {
              ...product,
              amount: product.amount - 1
            }
          } else {
            return product
          }
        }),
        cartError: null,
      };
    case AMOUNT_OF_PRODUCT:
      return {
        ...store,
        productsInCart: store.productsInCart.map((product) => {
          if (action.id === product.id) {
            return {
              ...product,
              amountCost: (product.amount * product.price)
            }
          } else {
            return product
          }
        }),
        cartError: null,
      };
    case TOTAL_AMOUNT:
      return {
        ...store,
        totalAmount: store.productsInCart.reduce((amount, product) =>
          amount + product.amountCost
          , 0).toFixed(2),
        cartError: null,
      };
    case BEGIN_ORDER:
      return {
        ...store,
        isLoading: true,
        cartError: null,
      };
    case CREATE_ORDER:
      return {
        ...store,
        isLoading: false,
        cartError: null,
      };
    case CREATE_ORDER_ERROR:
      return {
        ...store,
        cartError: action.err,
      };
    case CLEAR_CART:
      return {
        ...initState,
      };
    default:
      return store;
  }
}
