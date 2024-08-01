import { createSlice } from "@reduxjs/toolkit";

const user = {
  name: "Gonzalo Delbazi",
  email: "gonzalo.delbazi@gmail.com",
  adress: "Ecuador 258, Alta Gracia, Cordoba"
}

// Initial state
const initialState = {
  user: user,
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
