import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  relatedItems: [],
};

export const relatedItemsSlice = createSlice({
  name: 'relatedItems',
  initialState,
  reducers: {
    addRelatedItems: (state, action) => {
      state.relatedItems.push(action.payload);
    },
  },
});

export const { addRelatedItems } = relatedItemsSlice.actions;
export default relatedItemsSlice.reducer;
