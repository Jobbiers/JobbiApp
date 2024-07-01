import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./RootReducers";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import { whiteListPersist } from "./utils/WhiteListPersist";
import { blackListPersist } from "./utils/BlackListPersist";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: whiteListPersist,
  blacklist: blackListPersist
}

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch