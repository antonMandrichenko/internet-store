import {
  CHANGE_RATE,
  CHANGE_RATE_ERROR,
  GET_DATA_ERROR,
  CREATE_REVIEW,
  CREATE_REVIEW_ERROR,
  CREATE_REVIEW_FOR_REVIEW,
  REVIEW_IS_DELETED,
  DELETE_REVIEW_ERROR,
} from './types';

const changeRateOfProduct = (
  props,
  dispatch,
  product,
  rateFromReview
) => {
  return () => {
    props.firestore.collection('products').doc(product.id).get()
      .then((doc) => {
        if (doc.exists) {
          const oldRate = doc.data().rate;
          const oldReviews = doc.data().reviews;
          let newRate, newReviews;
          newRate = oldRate !== ""
            ? Math.ceil((+rateFromReview + +oldRate) / 2)
            : rateFromReview;
          newReviews = oldReviews + 1;
          return {rate: newRate.toString(), reviews: newReviews} ;
        } else {
          console.log("No such document!");
        }
      }).then((obj) => {
      props.firestore.collection('products').doc(product.id).set({
        ...product,
        rate: obj.rate,
        reviews: obj.reviews,
      }).then(() => {
        console.log("Rate is updated!");
        dispatch({
          type: CHANGE_RATE,
        });
      }).catch((err) => {
        dispatch({
          type: CHANGE_RATE_ERROR,
          err
        });
      })
    }).catch(err => {
      dispatch({
        type: GET_DATA_ERROR,
        err
      });
    });
  }
};

export const createReview = (
  props,
  dispatch,
  review,
  product
) => {
  return () => {
    props.firestore.collection('reviews').add({
      ...review,
      createdAt: new Date(),
      reviewForReview: []
    }).then(() => {
      dispatch(changeRateOfProduct(
        props,
        dispatch,
        product,
        review.rate
      ));
      dispatch({
        type: CREATE_REVIEW,
        review
      });
    }).catch((err) => {
      dispatch({
        type: CREATE_REVIEW_ERROR,
        err
      });
    })
  }
};

export const createReviewForReview = (
  props,
  dispatch,
  id,
  review
) => {
  return () => {
    props.firestore.collection('reviews').doc(id).update({
      reviewForReview: props.firestore.FieldValue.arrayUnion(review)
    })
      .then(() => {
        console.log("Review for review is created");
        dispatch({
          type: CREATE_REVIEW_FOR_REVIEW,
          review
        });
      })
      .catch(err => {
        dispatch({
          type: CREATE_REVIEW_ERROR,
          err
        });
      });
  }
};

export const deleteReview = (props, dispatch, id) => {
  return () => {
    props.firestore.collection("reviews").doc(id).delete()
      .then(() => {
        console.log("Document successfully deleted!");
        dispatch({
          type: REVIEW_IS_DELETED
        });
      })
      .catch(err => {
        console.error("Error removing document: ", err);
        dispatch({
          type: DELETE_REVIEW_ERROR,
          err
        });
      });
  }
};
