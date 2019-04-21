const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_REVIEW':
      console.log('created review', action.review);
      return state;
    case 'CREATE_REVIEW_ERROR':
      console.log('error', action.err);
      return state;
    case 'CREATE_REVIEW_FOR_REVIEW':
      console.log('created review for review', action.review);
      return state;
    case 'REVIEW_IS_DELETED':
      return state;
    case 'DELETE_REVIEW_ERROR':
      return state;
    case 'CHANGE_RATE':
      console.log('error', action.err);
      return state;
    default:
      return state;
  }
};
