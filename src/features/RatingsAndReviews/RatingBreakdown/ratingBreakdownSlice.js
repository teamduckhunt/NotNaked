/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterByStar: [],
};

export const RatingBreakdownSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    setFilterByStar: (state, action) => {
      if (action.payload === 'reset') {
        state.filterByStar = [];
      } else if ((!state.filterByStar.includes(action.payload))) {
        state.filterByStar.push(action.payload);
      } else {
        const location = state.filterByStar.indexOf(action.payload);
        state.filterByStar.splice(location, 1);
      }
    },
  },
});

export const { setFilterByStar } = RatingBreakdownSlice.actions;
export default RatingBreakdownSlice.reducer;

// create a new method to reset filterByStar to just an empty array.