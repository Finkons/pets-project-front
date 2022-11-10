import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    unsetToken: state => {
      state.token = null;
    },
  },
});

export const { setToken, unsetToken } = slice.actions;
