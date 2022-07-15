/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit'; // creates a redux store
// import relatedItemReducer from '../features/RelatedItemsAndComparison/relatedItemsSlice.jsx';
import outfitListReducer from '../features/RelatedItemsAndComparison/OutfitList/outfitListSlice.jsx';
import questionsAndAnswersReducer from '../features/QuestionsAndAnswers/questionsAndAnswersSlice.jsx';
import ratingBreakdownReducer from '../features/RatingsAndReviews/RatingBreakdown/ratingBreakdownSlice.js';
import { productsApi } from '../services/products.js';
import { reviewsApi } from '../services/reviews.js';
import { questionsApi } from '../services/questions.js';
import productStylesReducer from '../features/Overview/StyleSelector/styleSlice.js';

const store = configureStore({
  reducer: {
    // uses array to interpolate variable and use as key?
    [productsApi.reducerPath]: productsApi.reducer,
    outfitList: outfitListReducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [questionsApi.reducerPath]: questionsApi.reducer,
    questionsAndAnswers: questionsAndAnswersReducer,
    productStyles: productStylesReducer,
    // productImages: productImagesReducer,
    ratingBreakdown: ratingBreakdownReducer,
    // creates these key value pairs in the state of the redux store
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(productsApi.middleware, questionsApi.middleware, reviewsApi.middleware),
});

export default store;
