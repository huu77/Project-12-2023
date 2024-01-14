// reducers.ts
import { AnyAction, Reducer, combineReducers } from '@reduxjs/toolkit';
// import AuthSlice from '../database/Auth/AuthSlice';
import ProductsReducser from '../page/Home/Product/Product.slice'
const rootReducer: Reducer<any, AnyAction> = combineReducers({
  products:ProductsReducser
  // Add other slices or reducers as needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
