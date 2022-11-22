import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { authSlice } from "redux/auth/authSlice";
import { authApi } from "redux/auth/authApi";
import { noticesApi } from "redux/notices/noticesApi";
import { userPetsApi } from "redux/userPets/userPetsApi";
import { errorHandler } from "./errorHandler";

const authPersistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [authSlice.name]: persistedAuthReducer,
    [noticesApi.reducerPath]: noticesApi.reducer,
    [userPetsApi.reducerPath]: userPetsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware, noticesApi.middleware, errorHandler),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
