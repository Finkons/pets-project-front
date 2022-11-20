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
  }),
});

export const { useGetNoticesByCategoryQuery } = noticesApi;
