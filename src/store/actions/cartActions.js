import moment from 'moment';
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
} from './types';

export const addToCart = product => ({
  type: ADD_TO_CART,
  product
});

export const deleteFromCart = (id) => ({
  type: DELETE_FROM_CART,
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
  type: ADD_AMOUNT,
  id
});

export const reduceAmount = (id) => ({
  type: REDUCE_AMOUNT,
  id
});

export const amountOfProduct = (id) => ({
  type: AMOUNT_OF_PRODUCT,
  id
});

export const totalAmount = () => ({
  type: TOTAL_AMOUNT,
});

export const createOrder = (
  props,
  dispatch,
  userId,
  products,
  totalAmount,
  number
) => {
  return () => {
    dispatch({
      type: BEGIN_ORDER,
    });
    props.firestore.collection('orders').add({
      totalAmount: totalAmount,
      products: products,
      userId: userId,
      orderedAt: moment(new Date()).format('DD.MM.YYYY'),
      orderNumber: number,
    }).then(() => {
      dispatch({
        type: CREATE_ORDER,
        products
      });
      dispatch({
        type: CLEAR_CART,
      });
    }).catch((err) => {
      dispatch({
        type: CREATE_ORDER_ERROR,
        err
      });
    })
  }
};


