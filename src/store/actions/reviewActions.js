const changeRateOfProduct = (props, dispatch, product, rateFromReview) => {
  return () => {
    props.firestore.collection('products').doc(product.id).get()
      .then((doc) => {
      if (doc.exists) {
       const oldRate = doc.data().rate;
       let newRate;
       newRate = oldRate !== ""
         ? Math.ceil((+rateFromReview + +oldRate) / 2)
         : rateFromReview;
       return newRate.toString();
      } else {
        console.log("No such document!");
      }
    }).then((newRate) => {
      props.firestore.collection('products').doc(product.id).set({
        ...product,
        rate: newRate
      }).then(() => {
        console.log("Rate is updated!");
        dispatch({
          type: 'CHANGE_RATE',
        });
      }).catch((err) => {
        console.log("Error of add data: ", err)
      })
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
  }
};

export const createReview = (props, dispatch, review, product) => {
  return () => {
    props.firestore.collection('reviews').add({
      ...review,
      createdAt: new Date(),
      reviewForReview: []
    }).then(() => {
      dispatch(changeRateOfProduct(props, dispatch, product, review.rate));
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
  }
};

export const createReviewForReview = (props, dispatch, id, review) => {
  return () => {
   props.firestore.collection('reviews').doc(id).update({
      reviewForReview: props.firestore.FieldValue.arrayUnion(review)
    })
      .then(() => {
        console.log("Review for review is created");
        dispatch({
          type: 'CREATE_REVIEW_FOR_REVIEW',
          review
        });
      })
      .catch(err => {
        console.error("Error creating review: ", err);
        dispatch({
          type: 'CREATE_REVIEW_ERROR',
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
          type: 'REVIEW_IS_DELETED'
        });
    })
      .catch(err => {
      console.error("Error removing document: ", err);
        dispatch({
          type: 'DELETE_REVIEW_ERROR',
          err
        });
    });
  }
};
