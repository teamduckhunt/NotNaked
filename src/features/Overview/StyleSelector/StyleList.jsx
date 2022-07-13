/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import StyleCard from './StyleCard';

function StyleList({ styles, updateStyles }) {
  return (
    <div>
      <StyleCard styles={styles} updateStyles={updateStyles} />
    </div>
  );
}

// disabled prop types for whole file
// prop types just throw an error if wrong data is passed into the prop. literally just defining a type for the prop

// subscribing
const StyleListContainer = connect(
  // takes in state, outputs a copy with only one slice of what we need (styles)
  (state) => ({
    styles: state.productStyles,
  }),
  (dispatch) => ({
    updateStyles: (styles) => (
      dispatch({ type: 'setStyles', payload: styles })
    ),
  }),
)(StyleList); // connect returns a function which we have to call with the component

export default StyleListContainer;
// no longer need to export component, the container takes its place
