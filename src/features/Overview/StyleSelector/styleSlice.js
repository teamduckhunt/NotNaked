/* eslint-disable no-param-reassign */
// just makes all reducers
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStyle: {},
};

export const productStyleSlice = createSlice({
  name: 'styles',
  initialState,
  reducers: {
    setCurrentStyle: (state, action) => {
      state.currentStyle = action.payload;
    },
  },
});

export const { setCurrentStyle } = productStyleSlice.actions; // ?
export default productStyleSlice.reducer; // ?
