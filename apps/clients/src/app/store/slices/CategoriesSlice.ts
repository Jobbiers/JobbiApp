import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesStoreInit } from "../interfaces/CategoriesTypes";
import { Category } from "../../interfaces/Category.interface";

// Initial state
const initialState: CategoriesStoreInit = {
  categories: null,
  categorySelected: null,
  categoryLoader: true,
  errorMessage: ''
};

// Redux Toolkit createSlice
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setCategorySelected: (state, action: PayloadAction<Category>) => {
      state.categorySelected = action.payload;
    },
    setCategoryLoader: (state, action: PayloadAction<boolean>) => {
      state.categoryLoader = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    }
  }
});

// Extract the action creators
export const { setCategories, setCategorySelected, setCategoryLoader, setMessage } = categoriesSlice.actions;

// Reducer
const authReducer = categoriesSlice.reducer;

export default authReducer;
