/* eslint-disable no-param-reassign */
// just makes all reducers
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedStyle: {},
};

export const productStyleSlice = createSlice({
  name: 'style',
  initialState,
  reducers: {
    setCurrentStyle: (state, action) => {
      state.selectedStyle = action.payload;
    },
  },
});

export const { setCurrentStyle } = productStyleSlice.actions;
export default productStyleSlice.reducer;
