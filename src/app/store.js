/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit';
// import relatedItemReducer from '../features/RelatedItemsAndComparison/relatedItemsSlice.jsx';
import outfitListReducer from '../features/RelatedItemsAndComparison/OutfitList/outfitListSlice.jsx';
import questionsAndAnswersReducer from '../features/QuestionsAndAnswers/questionsAndAnswersSlice.jsx';
import { productsApi } from '../services/products.js';
import { questionsApi } from '../services/questions.js';

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    outfitList: outfitListReducer,
    [questionsApi.reducerPath]: questionsApi.reducer,
    questionsAndAnswers: questionsAndAnswersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(productsApi.middleware, questionsApi.middleware),
});

export default store;
