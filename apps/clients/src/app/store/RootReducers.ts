import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/AppSlice';

export default combineReducers({
    auth: authReducer
});
