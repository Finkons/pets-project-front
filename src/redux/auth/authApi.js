import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pets-api-m614.onrender.com/api",

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
      queryFn: async (arg, { getState, abort }, extraOptions, fetchBaseQuery) => {
        const { token } = getState().auth;
        if (!token) abort();
        const { data, error } = await fetchBaseQuery("/user");

        return { data: error?.status === 401 ? null : data?.data[0] };
      },
      method: "GET",
      providesTags: ["User"],
    }),
    logout: build.mutation({
      query: () => ({
        url: "/user/logout",
        method: "POST",
      }),
      providesTags: ["User"],
    }),
    editUserData: build.mutation({
      query: data => ({
        url: "/user",
        method: "PUT",
        body: data,
      }),
      providesTags: ["User"],
    }),
    editUserAvatar: build.mutation({
      query: file => ({
        url: "/user",
        method: "PATCH",
        credentials: "include",
        body: { file },
      }),
      providesTags: ["User"],
    }),
    // editUserAvatar: build.mutation({
    //   query(body) {
    //     console.log(body);
    //     return {
    //       url: "/user",
    //       method: "PATCH",
    //       body,
    //     };
    //   },
    //   providesTags: ["User"],
    // }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetCurrentUserQuery,
  useLogoutMutation,
  useEditUserDataMutation,
  useEditUserAvatarMutation,
} = authApi;
