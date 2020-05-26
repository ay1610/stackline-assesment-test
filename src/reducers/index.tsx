import { combineReducers } from 'redux';
import productReducer from './product_reducer'


const rootReducer = combineReducers({
    product: productReducer
});

export default rootReducer;
