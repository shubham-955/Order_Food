import { combineReducers } from 'redux'
import { cartItemReducer } from './cartItem/cartItem.reducer'

export default combineReducers({
    cartItem: cartItemReducer
});