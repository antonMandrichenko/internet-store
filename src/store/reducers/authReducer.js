import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  GET_CURRENT_USER,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  UPDATE_USER,
  UPDATE_USER_ERROR,
  CLEAR_SUCCESS,
} from '../actions/types';

const initState = {
  authError: null,
  success: null,
  currentUser: {
    firstName: '',
    secondName: '',
    initials: '',
    email: '',
    shippingAdress: {
      address: '',
      city: '',
      country: '',
      state: '',
      zip: '',
    },
    payment: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      expDate: '',
    },
  },
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
        success: {
          status: true,
          message: 'Login success'
        }
      };
    case LOGIN_ERROR:
      return {
        ...state,
        authError: action.err,
        success: null,
      };
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: {},
        authError: null,
        success: {
          status: true,
          message: 'Signout success'
        }
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null,
        success: {
          status: true,
          message: 'Signup success'
        }
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        authError: action.err,
        success: null,
      };
    case UPDATE_USER:
      return {
        ...state,
        authError: null,
        success: {
          status: true,
          message: 'User data is updated'
        }
      };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        authError: action.err,
        success: null,
      };
    case CLEAR_SUCCESS:
      return {
        ...state,
        success: null,
      };
    case GET_CURRENT_USER:
      const currentUser = action.users.filter((user) =>
        user.id === action.id)[0];
      return {
        ...state,
        authError: null,
        currentUser: currentUser || initState.currentUser,
      };
    default:
      return state;
  }
};

export default authReducer;
