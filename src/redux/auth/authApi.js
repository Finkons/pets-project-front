import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/auth",

    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: build => ({
    register: build.mutation({
      query: credentials => ({
        url: "/register",
        method: "POST",
        body: { ...credentials },
      }),
      providesTags: ["User"],
    }),
    login: build.mutation({
      query: credentials => ({
        url: "/login",
        method: "POST",
        body: { ...credentials },
      }),
      providesTags: ["User"],
    }),
    getCurrentUser: build.query({
      query: () => "/current",
      method: "GET",
    }),
    logout: build.mutation({
      query: () => ({
        url: "/user",
        method: "POST",
      }),
      // providesTags: ["User"],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetCurrentUserQuery, useLogoutMutation } = authApi;
