import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const noticesApi = createApi({
  reducerPath: "noticesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api",

    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Notices"],
  endpoints: build => ({
    getNoticesByCategory: build.query({
      query: category => ({
        url: `/notices/${category}`,
        method: "GET",
      }),
      providesTags: ["Notices"],
    }),
    getNoticeById: build.query({
      query: id => ({
        url: `/notices/${id}`,
        method: "GET",
      }),
      providesTags: ["Notices"],
    }),
    addNotice: build.mutation({
      query: (file,data) => ({
        url: `/notices`,
        method: "POST",
        body:{file,...data},
      }),
      providesTags: ["Notices"],
    }),
  }),
});

export const { useGetNoticesByCategoryQuery, useAddNoticeMutation } = noticesApi;
