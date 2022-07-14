import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedStyle: {},
};

export const productStyleSlice = createSlice({
  name: 'style',
  initialState,
  reducers: {
    setCurrentStyle: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setCurrentStyle } = productStyleSlice.actions;
export default productStyleSlice.reducer;

// // just makes all reducers
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   currentStyle: {},
// };

// export const productStyleSlice = createSlice({
//   name: 'styles',
//   initialState,
//   reducers: {
//     // once you get styles from api for certain product, this changes the state to reflect
//     // current styles, in turn re renders
//     setCurrentStyles: (state, action) => {
//       state = action.payload;
//     },
//     // ^ listening for this type 'setStyles', basically saying 'if action.type === setStyles'
//   },
// });

// export const { setCurrentStyles } = productStyleSlice.actions;
// export default productStyleSlice.reducer;
