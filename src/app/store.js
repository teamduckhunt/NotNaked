/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit';
// import relatedItemReducer from '../features/RelatedItemsAndComparison/relatedItemsSlice.jsx';
import outfitListReducer from '../features/RelatedItemsAndComparison/OutfitList/outfitListSlice.jsx';
import questionsAndAnswersReducer from '../features/QuestionsAndAnswers/questionsAndAnswersSlice.jsx';
import { productsApi } from '../services/products.js';
import { reviewsApi } from '../services/reviews.js';
import { questionsApi } from '../services/questions.js';

const store = configureStore({
  reducer: {
    // relatedItems: relatedItemReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    outfitList: outfitListReducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [questionsApi.reducerPath]: questionsApi.reducer,
    questionsAndAnswers: questionsAndAnswersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(productsApi.middleware, questionsApi.middleware, reviewsApi.middleware),
});

export default store;
