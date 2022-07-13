import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY } from '../config/config';

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions',
    prepareHeaders(headers) {
      headers.set('Authorization', `${API_KEY}`);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    allQuestions: builder.query({
      query: (productId) => `?product_id=${productId}`,
    }),
    answerList: builder.query({
      query: (questionId, page = 1, count = 5) => `/${questionId}/answers?page=${page}&count=${count}`,
    }),
  }),
});

export const {
  useAllQuestionsQuery,
  useAnswerListQuery,
} = questionsApi;
