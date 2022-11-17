import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/",

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
        url: "/auth/register",
        method: "POST",
        body: { ...credentials },
      }),
      providesTags: ["User"],
    }),
    login: build.mutation({
      query: credentials => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
      providesTags: ["User"],
    }),
    getCurrentUser: build.query({
      queryFn: (arg, { getState, abort }) => {
        const { token } = getState().auth;
        if (!token) abort();

        return "/user/current";
      },
      method: "GET",
      providesTags: ["User"],
    }),
    logout: build.mutation({
      query: () => ({
        url: "/auth/user",
        method: "POST",
      }),
      // providesTags: ["User"],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetCurrentUserQuery, useLogoutMutation } = authApi;
