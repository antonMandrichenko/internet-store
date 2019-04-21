const initState = {currentProduct: {}};

export default (store=initState, action) => {
  switch(action.type) {
    case 'GET_CURRENT_PRODUCT':
      return {currentProduct: action.product};
    case 'NO_CURRENT_PRODUCT':
      return {currentProduct: {}};
    default:
      return store;
  }
}
