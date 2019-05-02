import {
  CHANGE_RATE,
  CHANGE_RATE_ERROR,
  GET_DATA_ERROR,
  CREATE_REVIEW,
  CREATE_REVIEW_ERROR,
  CREATE_REVIEW_FOR_REVIEW,
  REVIEW_IS_DELETED,
  DELETE_REVIEW_ERROR,
} from '../actions/types';

const initialState = {
  reviewsError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
      return {
        ...state,
        reviewsError: null,
      };
    case CREATE_REVIEW_ERROR:
      return {
        ...state,
        reviewsError: action.err,
      };
    case CREATE_REVIEW_FOR_REVIEW:
      return {
        ...state,
        reviewsError: null,
      };
    case REVIEW_IS_DELETED:
      return {
        ...state,
        reviewsError: null,
      };
    case DELETE_REVIEW_ERROR:
      return {
        ...state,
        reviewsError: action.err,
      };
    case CHANGE_RATE:
      return {
        ...state,
        reviewsError: null,
      };
    case CHANGE_RATE_ERROR:
      return {
        ...state,
        reviewsError: action.err,
      };
    case GET_DATA_ERROR:
      return {
        ...state,
        reviewsError: action.err,
      };
    default:
      return state;
  }
};
