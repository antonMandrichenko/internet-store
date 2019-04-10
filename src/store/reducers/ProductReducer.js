import {CHANGE_ITEM_LIST} from "../actions/types";
import {ADD_ITEM_TO_LIST} from "../actions/types";

export default (store=[], {type, payload}) => {
  switch(type) {

    case CHANGE_ITEM_LIST:
      return payload;

    case ADD_ITEM_TO_LIST:
      store.push(payload);
      return [...store];

    default: return store;
  }
}
