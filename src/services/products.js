import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
    prepareHeaders(headers) {
      headers.set('Authorization', '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');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: () => '?page=*&count=*',
    }),
    productsByPageNCount: builder.query({
      query: (page = 1, count = 10) => `?page=${page}&count=${count}`,
    }),
    productInformationById: builder.query({
      query: (productId) => `/${productId}`,
    }),
    relatedProductsId: builder.query({
      query: (productId) => `/${productId}/related`,
    }),
    productStyles: builder.query({
      query: (productId) => `/${productId}/styles`,
    }),
  }),
});

export const {
  useAllProductsQuery,
  useProductsByPageNCountQuery,
  useProductInformationByIdQuery,
  useRelatedProductsIdQuery,
  useProductStylesQuery,
} = productsApi;
