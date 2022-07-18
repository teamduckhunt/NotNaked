/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../services/products.js';
import { reviewsApi } from '../services/reviews.js';
import { questionsApi } from '../services/questions.js';
import outfitListReducer from '../features/RelatedItemsAndComparison/OutfitList/outfitListSlice.jsx';
import questionsAndAnswersReducer from '../features/QuestionsAndAnswers/questionsAndAnswersSlice.jsx';
import ratingBreakdownReducer from '../features/RatingsAndReviews/RatingBreakdown/ratingBreakdownSlice.js';
import sortItemsReducer from '../features/RatingsAndReviews/SortItems/sortItemsSlice.js';

function reducer(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [reviewsApi.reducerPath]: reviewsApi.reducer,
        outfitList: outfitListReducer,
        [questionsApi.reducerPath]: questionsApi.reducer,
      },
      preloadedState,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(productsApi.middleware, questionsApi.middleware, reviewsApi.middleware),
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { reducer };
