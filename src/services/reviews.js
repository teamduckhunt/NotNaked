import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews',
    prepareHeaders(headers) {
      headers.set('Authorization', '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');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllReviewsByProductId: builder.query({
      query: (productId /* sort = 'relevant' */) => `?product_id=${productId}`,
    }),
  }),
});

export const {
  useGetAllReviewsByProductIdQuery,
} = reviewsApi;
