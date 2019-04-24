export const getCurrentProduct = product => ({
    type: 'GET_CURRENT_PRODUCT',
    product
});


export const noCurrentProduct = () => ({
    type: 'NO_CURRENT_PRODUCT',
});

export const createProduct = (props, dispatch, files, product) => {
  return () => {
    const metadata = {
      contentType: 'image/jpeg'
    };
    let arrOfImg = [];
    let productCurr = {
      ...product,
      img: arrOfImg
    };
    const filesArr = Array.from(files);
    let uploadFiles;
    filesArr.forEach(file => {
      uploadFiles = props.firebase.storage().ref().child(
        `${product.name}/` + file.name)
        .put(file, metadata)
        .then(() => {
          props.firebase.storage().ref(`${product.name}/` + file.name).getDownloadURL()
            .then(function (downloadURL) {
              arrOfImg.push(downloadURL);
              if (arrOfImg.length > 3) {
                props.firestore.collection('products').add({
                  ...product,
                  img: arrOfImg,
                  createdAt: new Date(),
                }).then(() => {
                  dispatch({
                    type: 'CREATE_PRODUCT',
                    productCurr
                  });
                }).catch((err) => {
                  dispatch({
                    type: 'CREATE_PRODUCT_ERROR',
                    err
                  });
                })
              }
            });
        });
    });
  }
};

export const deleteProduct = (props, dispatch, id) => {
  return () => {
    props.firestore.collection("products").doc(id).delete()
      .then(() => {
        console.log("Document successfully deleted!");
        dispatch({
          type: 'PRODUCT_IS_DELETED',
          id
        });
      })
      .catch(err => {
        console.error("Error removing document: ", err);
        dispatch({
          type: 'DELETE_PRODUCT_ERROR',
          err
        });
      });
  }
};

export const editProduct = (dispatch, products, id) => {
  return () => {
   const productEdit = products.filter((product) => product.id === id)[0];
    dispatch({
      type: 'EDIT_PRODUCT',
      productEdit
    });
  }
};

export const updateProduct = (props,dispatch, product, id) => {
  return () => {
    props.firestore.collection('products').doc(id).update({
      ...product
    })
      .then(() => {
        console.log("Product is updated");
        dispatch({
          type: 'UPDATE_PRODUCT',
          product
        });
      })
      .catch(err => {
        console.error("Error updating review: ", err);
        dispatch({
          type: 'UPDATE_PRODUCT_ERROR',
          err
        });
      });
  }
};

export const createCategory = (props, dispatch, category) => {
  return () => {
    props.firestore.collection('categories').add({
      ...category,
      createdAt: new Date(),
    }).then(() => {
      dispatch({
        type: 'CREATE_CATEGORY',
        category
      });
    }).catch((err) => {
      dispatch({
        type: 'CREATE_CATEGORY_ERROR',
        err
      });
    })
  }
};

export const deleteCategory = (props, dispatch, id) => {
  return () => {
    props.firestore.collection("categories").doc(id).delete()
      .then(() => {
        console.log("Document successfully deleted!");
        dispatch({
          type: 'CATEGORY_IS_DELETED',
          id
        });
      })
      .catch(err => {
        console.error("Error removing document: ", err);
        dispatch({
          type: 'CATEGORY_PRODUCT_ERROR',
          err
        });
      });
  }
};

export const getCurrentCategory = category => ({
  type: 'GET_CURRENT_CATEGORY',
  category
});

export const noCurrentCategory = () => ({
  type: 'NO_CURRENT_CATEGORY'
});
