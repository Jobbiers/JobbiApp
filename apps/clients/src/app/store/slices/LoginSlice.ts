import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Estado inicial
const initialState = {
  user: null,
  isLoading: false,
  errorMessage: '',
  userText: '',
  password: ''
};

// Redux Toolkit createSlice
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    addLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    addErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    addUserText: (state, action: PayloadAction<string>) => {
      state.userText = action.payload;
    },
    addUserPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    }
  }
});

// Extraer los creadores de acciones
export const { 
    addUser,
    addLoading, 
    addErrorMessage,
    addUserText,
    addUserPassword
} = loginSlice.actions;

// Reducer
const loginReducer = loginSlice.reducer;

export default loginReducer;
