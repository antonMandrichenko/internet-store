import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import reviewsReducer from './reviewsReducer';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  reviews: reviewsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  cart: cartReducer,
});

export default rootReducer;
