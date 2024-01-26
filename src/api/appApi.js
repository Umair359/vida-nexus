import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const AppApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'http://localhost:5000/api/v1',
        baseUrl: 'https://vida-nexus.azurewebsites.net/api/v1',
        // baseUrl: 'https://dc68-39-50-165-45.ngrok-free.app/api/v1',
        credentials: "include"
    }),
    endpoints: (builder) => ({

        //POST

        loginUser: builder.mutation({
            query: (formData) => ({
                url: "auth/login",
                method: "POST",
                body: formData
            }),
            invalidatesTags: ['user']
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: "auth/logout",
                method: "POST",
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
        createService: builder.mutation({
            query: (formData) => {
                return {
                    url: `practitioners/add-schedule`,
                    method: 'POST',
                    body: formData,
                };
            },
            options: {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            },
        }),
        createProduct: builder.mutation({
            query: (formData) => {
                return {
                    url: `products/create`,
                    method: 'POST',
                    body: formData,
                };
            },
            options: {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            },
        }),

        //GET

        getConfirmEmail: builder.query({
            query: (token) => `auth/confirmemail${token}`
        }),
        getUser: builder.query({
            query: () => `auth/profile`,
            providesTags: ['user']
        }),
        getPractitioner: builder.query({
            query: () => `practitioners/get/`,
            providesTags: ['practitioner-profile']
        }),
        getPractitionerService: builder.query({
            query: () => `practitioners/get-services`,
        }),

        getListOfPractitioner: builder.query({
            query: ({ category, rating, page }) => `front-end/practitioners-list?rating=${rating}&category=${category}&page=${page}`,
            invalidatesTags: "list-of-practitioner"
        }),
        getPractitionerDetails: builder.query({
            query: (id) => `front-end/practitioner-details/${id}`,
        }),
        getPractitionerProduct: builder.query({
            query: (id) => `front-end/store-all-products/${id}`,
        }),



        //PUT
        updateResetPassword: builder.mutation({
            query: ({ token, formData }) => ({
                url: `auth/resetpassword/${token}`,
                method: 'PUT',
                body: formData,
            })
        }),
        updateProfile: builder.mutation({
            query: (formData) => {
                return {
                    url: `auth/update-profile`,
                    method: 'PUT',
                    body: formData,
                };
            },
            options: {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            },
        }),
        updatePractitioner: builder.mutation({
            query: (formData) => ({
                url: `practitioners/update-practitioner`,
                method: 'PUT',
                body: formData,
            })
        }),
        updatePassword: builder.mutation({
            query: (formData) => ({
                url: `auth/update-password`,
                method: 'PUT',
                body: formData,
            }),
            invalidatesTags: ['practitioner-profile']
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
    useLogoutUserMutation,
    useCreateServiceMutation,
    useCreateProductMutation,
    //GET
    useGetConfirmEmailQuery,
    useGetListOfPractitionerQuery,
    useGetPractitionerDetailsQuery,
    useGetUserQuery,
    useGetPractitionerQuery,
    useGetPractitionerServiceQuery,
    useGetPractitionerProductQuery,
    //PUT
    useUpdateResetPasswordMutation,
    useUpdateProfileMutation,
    useUpdatePractitionerMutation,
    useUpdatePasswordMutation

} = AppApi