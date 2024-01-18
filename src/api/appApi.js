import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const AppApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'http://localhost:5000/api/v1',
        baseUrl: 'https://vida-nexus.azurewebsites.net/api/v1',
        credentials: "include"
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (formData) => ({
                url: "auth/login",
                method: "POST",
                body: formData
            }),
            invalidatesTags: ['user']
        }),

        registerUser: builder.mutation({
            query: (formData) => ({
                url: "auth/signup",
                method: "POST",
                body: formData
            })
        }),
        createPractitioner: builder.mutation({
            query: (formData) => ({
                url: "practitioners/create",
                method: "POST",
                body: formData
            })
        }),
        createCustomer: builder.mutation({
            query: (formData) => ({
                url: "customers/create",
                method: "POST",
                body: formData
            })
        }),
    })

})
export const {
    //POST
    useLoginUserMutation,
    useRegisterUserMutation,
    useCreatePractitionerMutation,
    useCreateCustomerMutation,
} = AppApi