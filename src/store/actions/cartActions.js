import moment from 'moment';

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

export const createOrder = (props, dispatch, userId, products, totalAmount, number) => {
  return () => {
    props.firestore.collection('orders').add({
      totalAmount: totalAmount,
      products: products,
      userId: userId,
      orderedAt: moment(new Date()).format('DD.MM.YYYY'),
      orderNumber: number,
    }).then(() => {
      dispatch({
        type: 'CREATE_ORDER',
        products
      });
      dispatch({
        type: 'CLEAR_CART',
      });
    }).catch((err) => {
      dispatch({
        type: 'CREATE_ORDER_ERROR',
        err
      });
    })
  }
};


