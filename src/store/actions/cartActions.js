export const addToCart = product => ({
  type: 'ADD_TO_CART',
  product
});

export const deleteFromCart = (id) => ({
  type: 'DELETE_FROM_CART',
  id
});

export const handleToOrFromCart = (dispatch, product, isClick) => {
  return () => {
    isClick
      ? dispatch(deleteFromCart(product.id))
      : dispatch(addToCart(product))
  }
};

export const addAmount = (id) => ({
  type: 'ADD_AMOUNT',
  id
});

export const reduceAmount = (id) => ({
  type: 'REDUCE_AMOUNT',
  id
});

export const amountOfProduct = (id) => ({
  type: 'AMOUNT_OF_PRODUCT',
  id
});

export const totalAmount = () => ({
  type: 'TOTAL_AMOUNT',
});
