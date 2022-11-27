import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userPetsApi = createApi({
  reducerPath: "userPetsApi",
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
  tagTypes: ["UserPets"],
  endpoints: build => ({
    addPet: build.mutation({
      query: formData => ({
        url: `/user `,
        method: "POST",
        body: formData,

        invalidatesTags: ["UserPets"],
      }),
    }),
    deletePet: build.mutation({
      query: petId => ({
        url: `/${petId} `,
        method: "POST",

        invalidatesTags: ["UserPets"],
      }),
    }),
  }),
});

export const { useAddPetMutation, useDeletePetMutation } = userPetsApi;
