import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userPetsApi = createApi({
  reducerPath: "userPetsApi",
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
  tagTypes: ["UserPets"],
  endpoints: build => ({
    addPet: build.mutation({
      query: formData => ({
        url: `/user`,
        method: "POST",
        body: formData,

        providesTags: ["UserPets"],
      }),
    }),
  }),
});

export const { useAddPetMutation } = userPetsApi;
