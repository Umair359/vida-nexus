import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const AppApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'http://localhost:5000/api/v1',
        baseUrl: 'https://vida-nexus.azurewebsites.net/api/v1',
        // baseUrl: 'https://f0ee-39-50-165-45.ngrok-free.app/api/v1',
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
        fotgotPassword: builder.mutation({
            query: (formData) => ({
                url: "auth/forgot",
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

        //GET

        getConfirmEmail: builder.query({
            query: (token) => `auth/confirmemail${token}`
        }),

        getListOfPractitioner: builder.query({
            query: ({ category, rating, page }) => `front-end/practitioners-list?rating=${rating}&category=${category}&page=${page}`,
            invalidatesTags: "list-of-practitioner"
        }),

        getPractitionerDetails: builder.query({
            query: (id) => `front-end/practitioner-details/${id}`,
        }),

        //PUT
        updateResetPassword: builder.mutation({
            query: ({ token, formData }) => ({
                url: `auth/resetpassword/${token}`,
                method: 'PUT',
                body: formData,
            })
        }),

    })

})
export const {
    //POST
    useLoginUserMutation,
    useFotgotPasswordMutation,
    useRegisterUserMutation,
    useCreatePractitionerMutation,
    useCreateCustomerMutation,
    //GET
    useGetConfirmEmailQuery,
    useGetListOfPractitionerQuery,
    useGetPractitionerDetailsQuery,
    //PUT
    useUpdateResetPasswordMutation,

} = AppApi