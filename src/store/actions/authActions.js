export const signIn = (props, dispatch, data) => {
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

export const signOut = ( dispatch, props) => {
  return () => {
    props.firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS'});
    })
  }
};

export const register = (props, dispatch, newUser) => {
  return () => {
    props.firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((resp) => {
      return props.firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        secondName: newUser.secondName,
        initials: newUser.firstName[0] + newUser.secondName[0]
      })
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS'});
    }).catch((err) => {
      dispatch({ type: 'SIGNOUT_ERROR', err});
    })
  }
};
