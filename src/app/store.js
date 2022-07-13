/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit';
import outfitListReducer from '../features/RelatedItemsAndComparison/OutfitList/outfitListSlice.jsx';
import { productsApi } from '../services/products.js';

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    outfitList: outfitListReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
