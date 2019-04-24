import { combineReducers } from 'redux';
import ProductsReducer from './ProductsReducer';
import ReviewsReducer from './ReviewsReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";


const rootReducer = combineReducers({
 auth: authReducer,
 products: ProductsReducer,
 reviews: ReviewsReducer,
 firestore: firestoreReducer,
 firebase: firebaseReducer,
 cart: cartReducer,
});

export default rootReducer;
