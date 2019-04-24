const initState = {
  authError: null,
  currentUser: {},
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null
      };
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: action.err
      };
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return {
        ...state,
        currentUser: {},
      };
    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      return {
        ...state,
        authError: null
      };
    case 'SIGNUP_ERROR':
      console.log('signup error');
      return {
        ...state,
        authError: action.err.message
      };
    case 'UPDATE_USER':
      console.log('user update', action.user);
      return {
        ...state,
        authError: null
      };
    case 'UPDATE_USER_ERROR':
      console.log('Error user update', action.err);
      return {
        ...state,
        authError: action.err
      };
    case 'GET_CURRENT_USER':
      const currentUser = action.users.filter((user) => user.id === action.id)[0];
      return {
        ...state,
        authError: null,
        currentUser: currentUser || {},
      };
    default:
      return state;
  }
};

export default authReducer;
