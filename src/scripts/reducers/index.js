"use strict";
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import errorMessage from './errorMessage';
import productReducer from './productReducer';
import routeReducer from './routeReducer';
import sessionReducer from './sessionReducer';
import transactionReducer from './transactionReducer';
import userReducer from './userReducer';

const combinedReducer = combineReducers({
  cartReducer,
  errorMessage,
  productReducer,
  routeReducer,
  sessionReducer,
  transactionReducer,
  userReducer
});

export default combinedReducer;
