import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

require('dot-env').config();

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
    prepareHeaders(headers) {
      headers.set('Authorization', process.env.GITHUB_API_KEY);
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
  }),
});

export const { useAllProductsQuery, useProductsByPageNCountQuery } = productsApi;
