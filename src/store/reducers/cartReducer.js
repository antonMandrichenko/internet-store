const initState = {totalAmount: null, productsInCart: []};

export default (store=initState, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return {
        ...store,
        productsInCart: [
          ...store.productsInCart,
          action.product
        ]
      };
    case 'DELETE_FROM_CART':
      return {
        ...store,
        productsInCart: store.productsInCart.filter((product) =>
          action.id !== product.id
        )
      };
    case 'ADD_AMOUNT':
      return {
        ...store,
        productsInCart: store.productsInCart.map((product) => {
          if(action.id === product.id) {
            return {
              ...product,
              amount: product.amount+1
            }
          } else {
            return product
          }
        })
      };
    case 'REDUCE_AMOUNT':
      return {
        ...store,
        productsInCart: store.productsInCart.map((product) => {
          if(action.id === product.id) {
            return {
              ...product,
              amount: product.amount-1
            }
          } else {
            return product
          }
        })
      };
    case 'AMOUNT_OF_PRODUCT':
      return {
        ...store,
        productsInCart: store.productsInCart.map((product) => {
          if(action.id === product.id) {
            return {
              ...product,
              amountCost: product.amount * product.price
            }
          } else {
            return product
          }
        })
      };
    case 'TOTAL_AMOUNT':
      return {
        ...store,
        totalAmount: store.productsInCart.reduce((amount, product) =>
          amount + product.amountCost
        , 0)
      };
    default:
      return store;
  }
}
