/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit';
import relatedItemReducer from '../features/RelatedItemsAndComparison/relatedItemsSlice.jsx';

const store = configureStore({
  reducer: {
    relatedItems: relatedItemReducer,
  },
});

export default store;
