/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
};

export const questionsAndAnswersSlice = createSlice({
  name: 'questionsAndAnswers',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = questionsAndAnswersSlice.actions;
export default questionsAndAnswersSlice.reducer;
