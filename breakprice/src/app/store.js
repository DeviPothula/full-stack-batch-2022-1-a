import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import priceReducer from '../features/priceSlice'
export const store = configureStore({
  reducer: combineReducers({
    priceReducer
  }),
});
export default store;
