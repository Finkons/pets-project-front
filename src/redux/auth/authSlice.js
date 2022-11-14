import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    name: null,
    email: null,
    isLoggedIn: false,
    token: null,
  },
  extraReducers: builder => {
    builder.addMatcher(authApi.endpoints.register.matchFulfilled, (state, { payload: { user, token } }) => {
      state.userId = user._id;
      state.name = user.name;
      state.email = user.email;
      state.isLoggedIn = true;
      state.token = token;
    });
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload: { user, token } }) => {
      state.name = user.name;
      state.email = user.email;
      state.token = token;
    });
    builder.addMatcher(authApi.endpoints.getCurrentUser.matchFulfilled, (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
    });
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, state => {
      state.email = null;
      state.name = null;
      state.token = null;
    });
  },
});
