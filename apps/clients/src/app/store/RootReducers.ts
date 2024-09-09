import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/AppSlice';
import categoriesReducer from './slices/CategoriesSlice';
import loginReducer from './slices/LoginSlice';

export default combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
    login: loginReducer
});
