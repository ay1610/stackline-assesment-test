import ProductDetails from '../Webdev_data2.json'
import {FETCH_PRODUCT_METADATA, FETCH_SALES_DATA} from  '../actions/types'


const INITIAL_STATE =  ProductDetails[0];

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case FETCH_PRODUCT_METADATA :
        return { ...state, productMetaData: action.payload };
        case FETCH_SALES_DATA :
        return { ...state, salesData: action.payload };
        default:
        return state;
    }

    
}