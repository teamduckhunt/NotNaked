import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  relatedItems: [],
};

export const relatedItemsSlice = createSlice({
  name: 'relatedItems',
  initialState,
  reducers: {
    addRelatedItems: (state) => {
      state.relatedItems.push('newItem');
    },
  },
});

export const { addRelatedItems } = relatedItemsSlice.actions;
export default relatedItemsSlice.reducer;
