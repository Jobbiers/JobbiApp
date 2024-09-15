import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserStoreInit } from '../interfaces';

// Initial state
const initialState: UserStoreInit = {
  user: null,
  loading: false,
  errorMessage: '',
};

// Redux Toolkit createSlice
const authSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
    setMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

// Extract the action creators
export const { setUserInfo, setMessage, setLoading } = authSlice.actions;

// Reducer
const authReducer = authSlice.reducer;

export default authReducer;
