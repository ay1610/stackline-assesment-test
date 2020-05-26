import ProductDetails from '../Webdev_data2.json'
import { FETCH_PRODUCT_METADATA , FETCH_SALES_DATA } from './types'
import _ from "lodash";

export function getProductMetaData() {
    return {
        type: FETCH_PRODUCT_METADATA,
        payload: _.pick(ProductDetails[0],['id','title','subtitle','image','tags'])
    }
}

export function getSalesData() {
    return {
        type: FETCH_SALES_DATA,
        payload: _.pick(ProductDetails[0],['sales'])
    }
}