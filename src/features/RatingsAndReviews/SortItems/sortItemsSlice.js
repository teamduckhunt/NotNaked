/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortSelection: 'relevant',
};

export const sortItemsSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortSelection: (state, action) => {
      state.sortSelection = action.payload;
    },
  },
});

export const { setSortSelection } = sortItemsSlice.actions;
export default sortItemsSlice.reducer;
