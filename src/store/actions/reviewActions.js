export const createReview = (review) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  firestore.collection('reviews').add({
    ...review,
    createdAt: new Date()
  }).then(() => {
    dispatch({
      type: 'CREATE_REVIEW',
      review
    });
  }).catch((err) => {
    dispatch({
      type: 'CREATE_REVIEW_ERROR',
      err
    });
  })

};
