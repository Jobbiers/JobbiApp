import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  user: null,
  errorMessage: ''
};

// Redux Toolkit createSlice
const authSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setMessage: (state, action) => {
      state.errorMessage = action.payload;
    }
  }
});

// Extract the action creators
export const { setUser, setMessage } = authSlice.actions;

// Reducer
const authReducer = authSlice.reducer;

export default authReducer;
