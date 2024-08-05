import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/AppSlice';
import categoriesReducer from './reducers/CategoriesSlice';

export default combineReducers({
    auth: authReducer,
    categories: categoriesReducer
});
