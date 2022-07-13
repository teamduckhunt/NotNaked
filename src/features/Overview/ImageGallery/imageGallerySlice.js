// just makes all reducers
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  images: [],
};

export const imageGallerySlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    // once you get styles from api for certain product, this changes the state to reflect
    // current styles, in turn re renders
    setStyles: (state, action) => action.payload,
    // ^ listening for this type 'setStyles', basically saying 'if action.type === setStyles'
  },
});

export const { addProductImages } = imageGallerySlice.actions; // ?
export default imageGallerySlice.reducer; // ?
