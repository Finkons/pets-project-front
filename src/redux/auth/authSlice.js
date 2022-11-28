import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";

const initialState = {
  userId: null,
  name: null,
  email: null,
  isLoggedIn: false,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: builder => {
    builder.addMatcher(authApi.endpoints.register.matchFulfilled, (state, { payload: { user, token } }) => {
      state.name = user.name;
      state.email = user.email;
      state.isLoggedIn = true;
      state.token = token;
    });
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload: { user, token } }) => {
      state.name = user.name;
      state.email = user.email;
      state.isLoggedIn = true;
      state.token = token;
    });
    builder.addMatcher(authApi.endpoints.getCurrentUser.matchFulfilled, (state, { payload }) => {
      state.userId = payload ? payload._id : state.userId;
      state.name = payload ? payload.name : state.name;
      state.email = payload ? payload.email : state.email;
      state.userPets = payload ? payload.pets : state.userPets;
      state.isLoggedIn = payload ? true : false;
    });
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, state => {
      state.userId = null;
      state.email = null;
      state.name = null;
      state.isLoggedIn = false;
      state.token = null;
    });
  },
});
