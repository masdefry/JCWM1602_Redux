import {combineReducers} from 'redux'
import dataCartsReducer from './CartsReducer'

const allReducer = combineReducers(
    {
        totalCarts: dataCartsReducer
    }
)

export default allReducer