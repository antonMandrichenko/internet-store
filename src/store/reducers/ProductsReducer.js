const initState = {
  currentProduct: {},
  createProduct: {},
  editProduct: {},
  currentCategory: null
};

export default (store=initState, action) => {
  switch(action.type) {
    case 'GET_CURRENT_PRODUCT':
      return {
        ...store,
        currentProduct: action.product
      };
    case 'NO_CURRENT_PRODUCT':
      return {
        ...store,
        currentProduct: {}
      };
    case 'CREATE_PRODUCT':
      console.log('product is created', action.productCurr);
      return {
        ...store,
        createProduct: action.productCurr
      };
    case 'CREATE_PRODUCT_ERROR':
      console.log('error of created product', action.err);
      return {
        ...store,
      };
    case 'PRODUCT_IS_DELETED':
      console.log('product is deleted', action.id);
      return {
        ...store,
      };
    case 'DELETE_PRODUCT_ERROR':
      console.log('error of deleted product', action.err);
      return {
        ...store,
      };
    case 'EDIT_PRODUCT':
      console.log('update product', action.productEdit);
      return {
        ...store,
        editProduct: {...action.productEdit}
      };
    case 'UPDATE_PRODUCT':
      console.log('update product', action.product);
      return {
        ...store,
      };
    case 'UPDATE_PRODUCT_ERROR':
      console.log('update product error', action.err);
      return {
        ...store,
      };
    case 'CREATE_CATEGORY':
      console.log('create category', action.category);
      return {
        ...store,
      };
    case 'CREATE_CATEGORY_ERROR':
      console.log('create category error', action.err);
      return {
        ...store,
      };
    case 'CATEGORY_IS_DELETED':
      console.log('deleted category', action.id);
      return {
        ...store,
      };
    case 'CATEGORY_PRODUCT_ERROR':
      console.log('delete category error', action.err);
      return {
        ...store,
      };
    case 'GET_CURRENT_CATEGORY':
      console.log('delete category error', action.err);
      return {
        ...store,
        currentCategory: action.category
      };
    case 'NO_CURRENT_CATEGORY':
      console.log('no current category');
      return {
        ...store,
        currentCategory: null
      };
    default:
      return store;
  }
}
