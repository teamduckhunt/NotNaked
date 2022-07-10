import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  outfitList: [],
};

export const outfitListSlice = createSlice({
  name: 'outfitList',
  initialState,
  reducers: {
    addOutfit: (state, action) => {
      state.outfitList.push(action.payload);
    },
    deleteOutfit: (state, action) => {
      const deleteItemIndex = state.outfitList.indexOf((outfitId) => outfitId === action.payload);
      state.outfitList.splice(deleteItemIndex, 1);
    },
  },
});

export const { addOutfit, deleteOutfit } = outfitListSlice.actions;
export default outfitListSlice.reducer;
