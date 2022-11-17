import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";

const initialState = {
  name: null,
  email: null,
  isLoggedIn: false,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: builder => {
    builder.addMatcher(authApi.endpoints.register.matchFulfilled, (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.isLoggedIn = true;
    });
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload: { user, token } }) => {
      state.name = user.name;
      state.email = user.email;
      state.isLoggedIn = true;
      state.token = token;
    });
    builder.addMatcher(authApi.endpoints.getCurrentUser.matchFulfilled, (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.isLoggedIn = true;
    });
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, state => {
      state.email = null;
      state.name = null;
      state.isLoggedIn = false;
      state.token = null;
    });
  },
});
