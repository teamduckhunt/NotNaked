import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
  answers: [],
};

export const questionsAndAnswersSlice = createSlice({
  name: 'questionsAndAnswers',
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    addAnswers: (state, action) => {
      state.answers.push(action.payload);
    },
  },
});

export const { addQuestionAndAnswers } = questionsAndAnswersSlice.actions;
export default questionsAndAnswersSlice.reducer;
