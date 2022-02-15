import { combineReducers } from 'redux';
import authReducer from './authReducer';
import streamReducer from './streamReducer';
import unsplashReducer from './unsplashReducer';

export default combineReducers({
  auth: authReducer,
  people: streamReducer,
  images: unsplashReducer
});