/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setCurrentStyle } from './styleSlice';
import { useProductStylesQuery } from '../../../services/products';
import StyleCard from './StyleCard.jsx';
import classes from './StyleSelector.module.css';

export default function StyleList({ currentViewItemId }) {
  const { data: styles, error, isLoading: stylesLoading } = useProductStylesQuery(currentViewItemId);
  const curStyle = useSelector((state) => state.productStyles.currentStyle);
  if (error) {
    return <>Oh no, there was an error</>;
  }

  if (stylesLoading) {
    return <>Loading...</>;
  }

  return (
    <div>
      Style: {curStyle.name ? curStyle.name : styles.results[0].name}
      {styles.results.map((style) => <StyleCard key={style.style_id} style={style} />)}
    </div>
  );
}
