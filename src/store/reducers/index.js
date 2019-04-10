import {combineReducers} from 'redux';
import ProductsReducer from './ProductReducer';


const rootReducer = combineReducers({
 products: ProductsReducer
});

export default rootReducer;
