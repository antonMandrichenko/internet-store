import {
  GET_CURRENT_PRODUCT,
  NO_CURRENT_PRODUCT,
  CREATE_PRODUCT,
  CREATE_PRODUCT_ERROR,
  PRODUCT_IS_DELETED,
  DELETE_PRODUCT_ERROR,
  EDIT_PRODUCT,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_ERROR,
  CREATE_CATEGORY,
  CREATE_CATEGORY_ERROR,
  CATEGORY_IS_DELETED,
  CATEGORY_PRODUCT_ERROR,
  GET_CURRENT_CATEGORY,
  NO_CURRENT_CATEGORY,
} from '../actions/types';

const initState = {
  currentProduct: {},
  createProduct: {},
  editProduct: {},
  currentCategory: null,
  productsError: null,
};

export default (store = initState, action) => {
  switch (action.type) {
    case GET_CURRENT_PRODUCT:
      return {
        ...store,
        currentProduct: action.product,
        productsError: null,
      };
    case NO_CURRENT_PRODUCT:
      return {
        ...store,
        currentProduct: {},
        productsError: null,
      };
    case CREATE_PRODUCT:
      return {
        ...store,
        createProduct: action.productCurr,
        productsError: null,
      };
    case CREATE_PRODUCT_ERROR:
      return {
        ...store,
        productsError: action.err,
      };
    case PRODUCT_IS_DELETED:
      return {
        ...store,
        productsError: null,
      };
    case DELETE_PRODUCT_ERROR:
      return {
        ...store,
        productsError: action.err,
      };
    case EDIT_PRODUCT:
      return {
        ...store,
        editProduct: {...action.productEdit},
        productsError: null,
      };
    case UPDATE_PRODUCT:
      return {
        ...store,
        productsError: null,
      };
    case UPDATE_PRODUCT_ERROR:
      return {
        ...store,
        productsError: action.err,
      };
    case CREATE_CATEGORY:
      return {
        ...store,
        productsError: null,
      };
    case CREATE_CATEGORY_ERROR:
      return {
        ...store,
        productsError: action.err,
      };
    case CATEGORY_IS_DELETED:
      return {
        ...store,
        productsError: null,
      };
    case CATEGORY_PRODUCT_ERROR:
      return {
        ...store,
        productsError: action.err,
      };
    case GET_CURRENT_CATEGORY:
      return {
        ...store,
        currentCategory: action.category,
        productsError: null,
      };
    case NO_CURRENT_CATEGORY:
      return {
        ...store,
        currentCategory: null,
        productsError: null,
      };
    default:
      return store;
  }
}
