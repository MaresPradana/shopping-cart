import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import cartReducer from './reducers/cartSlice';
import discountReducer from './reducers/discountReducer';

const reducer = combineReducers({
  cart: cartReducer,
  discount: discountReducer,
})
const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'development'
})
export default store;