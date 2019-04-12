import {combineReducers} from 'redux';
import ProductsReducer from './ProductReducer';
import ReviewsReducer from './ReviewsReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
 products: ProductsReducer,
 reviews: ReviewsReducer,
 firestore: firestoreReducer,
 firebase: firebaseReducer,
});

export default rootReducer;
