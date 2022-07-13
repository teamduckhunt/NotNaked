// just makes all reducers
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  styles: [],
};

export const productStyleSlice = createSlice({
  name: 'styles',
  initialState,
  reducers: {
    // once you get styles from api for certain product, this changes the state to reflect
    // current styles, in turn re renders
    setStyles: (state, action) => action.payload,
    // ^ listening for this type 'setStyles', basically saying 'if action.type === setStyles'
  },
});

export const { addProductStyles } = productStyleSlice.actions; // ?
export default productStyleSlice.reducer; // ?
