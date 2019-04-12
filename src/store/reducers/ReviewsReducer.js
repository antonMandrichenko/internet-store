const initialState = {

};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_REVIEW':
      console.log('created review', action.review);
      return state;
    case 'CREATE_REVIEW_ERROR':
      console.log('error', action.err);
      return state;
    default:
      return state;
  }
};
