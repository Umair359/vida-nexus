import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminAboutApi = createApi({
    reducerPath: 'adminAbout',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://retu-sukhramani.azurewebsites.net/api/' }),
    prepareHeaders: (headers) => {
        headers.set({ "Content-Type": "multipart/form-data" });
        return headers;
    },
    endpoints: (builder) => ({
        getAdminAbout: builder.query({
            query: () => 'about',
            providesTags: ['about']
        }),
        updateAdminAbout: builder.mutation({
            query: ({ formData }) => ({
                url: "about/update",
                method: 'PUT',
                body: formData,
            }),
            invalidatesTags: ['about']
        }),
    })

})
export const { useGetAdminAboutQuery, useUpdateAdminAboutMutation } = adminAboutApi;