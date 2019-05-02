import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  GET_CURRENT_USER,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  UPDATE_USER,
  UPDATE_USER_ERROR,
  CLEAR_SUCCESS
} from './types';

export const signIn = (props, dispatch, data) => {
  return () => {
    props.firebase.auth().signInWithEmailAndPassword(
      data.email,
      data.password
    ).then(() => {
      dispatch({type: LOGIN_SUCCESS});
      setTimeout(() => {
        dispatch({type: CLEAR_SUCCESS})
      }, 6000)
    }).catch((err) => {
      dispatch({type: LOGIN_ERROR, err})
    })
  }
};

export const signOut = (dispatch, props) => {
  return () => {
    props.firebase.auth().signOut().then(() => {
      dispatch({type: SIGNOUT_SUCCESS});
      setTimeout(() => {
        dispatch({type: CLEAR_SUCCESS})
      }, 6000)
    })
  }
};

export const getCurrentUser = (users, id) => ({
  type: GET_CURRENT_USER,
  users,
  id
});

export const register = (props, dispatch, newUser) => {
  return () => {
    props.firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((resp) => {
      return props.firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        secondName: newUser.secondName,
        initials: newUser.firstName[0] + newUser.secondName[0],
        email: newUser.email,
        shippingAdress: {},
        payment: {}
      })
    }).then(() => {
      dispatch({type: SIGNUP_SUCCESS});
      setTimeout(() => {
        dispatch({type: CLEAR_SUCCESS})
      }, 6000)
    }).catch((err) => {
      dispatch({type: SIGNUP_ERROR, err});
    })
  }
};

export const updateUser = (
  props,
  dispatch,
  user,
  id
) => {
  return () => {
    props.firestore.collection('users').doc(id).update({
      ...user
    })
      .then(() => {
        dispatch({
          type: UPDATE_USER,
          user
        });
        setTimeout(() => {
          dispatch({type: CLEAR_SUCCESS})
        }, 6000)
      })
      .catch(err => {
        dispatch({
          type: UPDATE_USER_ERROR,
          err
        });
      });
  }
};
