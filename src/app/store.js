/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit';
// import relatedItemReducer from '../features/RelatedItemsAndComparison/relatedItemsSlice.jsx';
import outfitListReducer from '../features/RelatedItemsAndComparison/OutfitList/outfitListSlice.jsx';
import { productsApi } from '../services/products.js';
import { reviewsApi } from '../services/reviews.js';

const store = configureStore({
  reducer: {
    // relatedItems: relatedItemReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    outfitList: outfitListReducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(productsApi.middleware, reviewsApi.middleware),
});

export default store;
