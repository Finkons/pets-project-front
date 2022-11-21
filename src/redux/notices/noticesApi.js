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
    getFavoriteNotices: build.query({
      query: () => ({
        url: `notices/owner/favorite`,
        method: "GET",
      }),
      providesTags: ["Notices"],
    }),
    getUserNotices: build.query({
      query: userId => ({
        url: `/notices/owner/${userId}`,
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
      query: formData => ({
        url: `/notices`,
        method: "POST",
        body: { ...formData },
        headers: {
          "Content-Type": "multipart/form-data",
        },
        providesTags: ["Notices"],
      }),
    }),
    addNoticeToFavorites: build.mutation({
      query: noticeId => ({
        url: `/notices/${noticeId}`,
        method: "PUT",
      }),
      providesTags: ["Notices"],
    }),
    deleteNotice: build.mutation({
      query: noticeId => ({
        url: `/notices/${noticeId}`,
        method: "DELETE",
      }),
      providesTags: ["Notices"],
    }),
  }),
});

export const {
  useGetNoticesByCategoryQuery,
  useAddNoticeMutation,
  useAddNoticeToFavoritesMutation,
  useGetNoticeByIdQuery,
  useDeleteNoticeMutation,
  useGetFavoriteNoticesQuery,
  useGetUserNoticesQuery,
} = noticesApi;
