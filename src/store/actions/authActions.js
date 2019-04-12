export const signIn = (props, dispatch, data) => {
  return () => {
    // console.log('signIn action begin', props, dispatch, data)
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
