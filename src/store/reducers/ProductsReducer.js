const initState = {};

export default (store=initState, action) => {
  switch(action.type) {

    case 'CHANGE_ITEM_LIST':
      return action.payload;

    case 'ADD_ITEM_TO_LIST':
      return [...store];

    default: return store;
  }
}
