import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  outfitList: [],
};

export const outfitListSlice = createSlice({
  name: 'outfitList',
  initialState,
  reducers: {
    addOutfit: (state, { payload }) => {
      state.outfitList.push(payload);
    },
    deleteOutfit: (state, { payload }) => {
      state.outfitList.splice(payload, 1);
    },
  },
});

export const { addOutfit, deleteOutfit } = outfitListSlice.actions;
export default outfitListSlice.reducer;
