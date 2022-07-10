/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit';
import relatedItemReducer from '../features/RelatedItemsAndComparison/relatedItemsSlice.jsx';
import { productsApi } from '../services/products.js';

const store = configureStore({
  reducer: {
    relatedItems: relatedItemReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
