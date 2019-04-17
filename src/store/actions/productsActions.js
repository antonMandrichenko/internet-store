export const getProducts = (props, dispatch, data) => {
  return () => {
    props.firebase.auth().signInWithEmailAndPassword(
      data.email,
      data.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS'})
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err})
    })
  }
};
