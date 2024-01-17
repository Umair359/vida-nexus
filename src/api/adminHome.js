import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const adminHomeApi = createApi({
    reducerPath: 'adminHome',
    baseQuery: fetchBaseQuery({
        //baseUrl: 'http://localhost:5000/api',
        baseUrl: 'https://reetusukhramani.com/api',
        // baseUrl: 'https://retusukhramani.azurewebsites.net/api',

        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            console.log(token);
            headers.set('Authorization', `Bearer ${token}`)
            return headers;
        },
    }),
    endpoints: (builder) => ({

        //GET

        getAdminHome: builder.query({
            query: () => 'home',
            providesTags: ['home']
        }),

        getAdminAbout: builder.query({
            query: () => 'about',
            providesTags: ['about']
        }),

        getAdminTestimonial: builder.query({
            query: () => 'testimonials',
            providesTags: ['testimonials']
        }),

        getAdminServices: builder.query({
            query: () => 'services',
            providesTags: ['services']
        }),

        getAdminBlog: builder.query({
            query: () => 'blogs',
            providesTags: ['blog']
        }),

        getAdminBlogPage: builder.query({
            query: () => 'blog-page',
            providesTags: ['blog-page']
        }),

        getUser: builder.query({
            query: () => `/user`,
            providesTags: ['user']
        }),

        getSingleBlog: builder.query({
            query: ({ id }) => `blog/${id}`,
        }),
        getSingleService: builder.query({
            query: ({ id }) => `service/${id}`,
        }),


        getTredendingBlog: builder.query({
            query: () => `blog/?trending=true`,
        }),


        //PUT


        updateAdminHome: builder.mutation({
            query: ({ formData }) => ({
                url: "home/update",
                method: 'PUT',
                body: formData,
            }),
            invalidatesTags: ['home']
        }),

        updateAdminAbout: builder.mutation({
            query: ({ formData }) => ({
                url: "about/update",
                method: 'PUT',
                body: formData,
            }),
            invalidatesTags: ['about']
        }),

        deleteAdminAbout: builder.mutation({
            query: ({ formData }) => ({
                url: "about/delete",
                method: 'DELETE',
                body: formData,
            }),
            invalidatesTags: ['about']
        }),

        updateAdminBlog: builder.mutation({
            query: ({ id, formData }) => ({
                url: `blog/update/${id}`,
                method: 'PUT',
                body: formData,
            })
        }),
        updateAdminTestimonial: builder.mutation({
            query: ({ id, formData }) => ({
                url: `testimonial/${id}`,
                method: 'PUT',
                body: formData,
            }),
            invalidatesTags: ['testimonials']
        }),

        updateAdminService: builder.mutation({
            query: ({ id, formData }) => ({
                url: `service/update/${id}`,
                method: 'PUT',
                body: formData,
            }),
            invalidatesTags: ['services']
        }),
        updateAdminServiceFAQ: builder.mutation({
            query: ({ id, faqId, formData }) => ({
                url: `service/${id}/faq/${faqId}`,
                method: 'PUT',
                body: formData,
            }),
            invalidatesTags: ['services']
        }),

        updateAdminBlogPage: builder.mutation({
            query: ({ formData }) => ({
                url: `blog-page/update`,
                method: 'PUT',
                body: formData,
            }),
            invalidatesTags: ['blog-page']

        }),

        updateAdminMainBlog: builder.mutation({
            query: ({ id }) => ({
                url: `blog/main/${id}`,
                method: 'PUT',
                body: {},
            }),
            invalidatesTags: ['blog']

        }),

        deleteAdminBlog: builder.mutation({
            query: ({ id }) => ({
                url: `blog/delete/${id}`,
                method: 'DELETE',
                body: {},
            }),
            invalidatesTags: ['about']
        }),
        deleteAdminTestimonial: builder.mutation({
            query: ({ id }) => ({
                url: `testimonial/${id}`,
                method: 'DELETE',
                body: {},
            }),
            invalidatesTags: ['testimonials']
        }),
        deleteAdminFAQ: builder.mutation({
            query: ({ id, faqId }) => ({
                url: `service/${id}/faq/${faqId}`,
                method: 'DELETE',
                body: {},
            }),
            invalidatesTags: ['services']
        }),


        //POST


        loginUser: builder.mutation({
            query: (formData) => ({
                url: "user/login",
                method: "POST",
                body: formData
            }),
            invalidatesTags: ['user']
        }),

        registerUser: builder.mutation({
            query: (formData) => ({
                url: "user/register",
                method: "POST",
                body: formData
            })
        }),

        createAdminBlog: builder.mutation({
            query: (formData) => ({
                url: "blog/create",
                method: "POST",
                body: formData
            })
        }),
        createAdminTestimonial: builder.mutation({
            query: (formData) => ({
                url: "testimonial/create",
                method: "POST",
                body: formData
            }),
            invalidatesTags: ['testimonials']
        }),
        createAdminFAQ: builder.mutation({
            query: ({ id, formData }) => ({
                url: `service/${id}/faq/create`,
                method: "POST",
                body: formData
            }),
            invalidatesTags: ['services']
        }),


    })

})
export const {
    //GET
    useGetAdminHomeQuery,
    useGetAdminAboutQuery,
    useGetAdminTestimonialQuery,
    useGetAdminServicesQuery,
    useGetAdminBlogQuery,
    useGetAdminBlogPageQuery,
    useGetUserQuery,
    useGetSingleBlogQuery,
    useGetSingleServiceQuery,
    useGetTredendingBlogQuery,
    //PUT
    useUpdateAdminHomeMutation,
    useUpdateAdminAboutMutation,
    useDeleteAdminAboutMutation,
    useUpdateAdminBlogMutation,
    useUpdateAdminTestimonialMutation,
    useUpdateAdminServiceMutation,
    useUpdateAdminServiceFAQMutation,
    useUpdateAdminBlogPageMutation,
    useDeleteAdminBlogMutation,
    useUpdateAdminMainBlogMutation,

    //POST
    useLoginUserMutation,
    useRegisterUserMutation,
    useCreateAdminBlogMutation,
    useCreateAdminTestimonialMutation,
    useCreateAdminFAQMutation,
    //DELETE
    useDeleteAdminTestimonialMutation,
    useDeleteAdminFAQMutation,
} = adminHomeApi