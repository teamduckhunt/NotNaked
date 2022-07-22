import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews',
    prepareHeaders(headers) {
      headers.set('Authorization', process.env.API_KEY);
      return headers;
    },
  }),
  tagTypes: ['Reviews'],
  endpoints: (builder) => ({
    getAllReviewsByProductId: builder.query({
      query: ({ reviewCount, productId, curSortSelected }) => `?count=${reviewCount}&product_id=${productId}&sort=${curSortSelected}`,
      providesTags: ['Reviews'],
    }),
    getReviewMetadata: builder.query({
      query: (productId) => `/meta?product_id=${productId}`,
    }),
    addAReview: builder.mutation({
      // create object for both queries, then destructure.
      query: (formInput) => ({
        url: '',
        method: 'POST',
        body: formInput,
      }),
      invalidatesTags: ['Reviews'],
    }),
    addHelpfulCount: builder.mutation({
      query: (reviewId) => ({
        url: `/${reviewId}/helpful`,
        method: 'PUT',
      }),
      invalidatesTags: ['Reviews'],
    }),
    reportReview: builder.mutation({
      query: (reviewId) => ({
        url: `/${reviewId}/report`,
        method: 'PUT',
      }),
    }),
  }),
});

export const {
  useGetAllReviewsByProductIdQuery,
  useGetReviewMetadataQuery,
  useAddAReviewMutation,
  useAddHelpfulCountMutation,
  useReportReviewMutation,
} = reviewsApi;
