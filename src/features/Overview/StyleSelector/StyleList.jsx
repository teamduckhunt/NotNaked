/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import StyleCard from './StyleCard.jsx';
import { useProductStylesQuery } from '../../../services/products.js';

function StyleList({ currentViewItemId }) { // { styles, updateStyles }
  const { data, error, isLoading } = useProductStylesQuery(currentViewItemId);

  if (error) {
    console.log(error);
    return <div>There is an error!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data) {
    console.log(data);
    return (
      <div>
        {data.results.map((style) => (
          <StyleCard style={style} />
        ))}
        {/* styles={styles} updateStyles={updateStyles} */}
      </div>
    );
  }
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
