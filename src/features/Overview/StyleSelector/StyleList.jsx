/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setCurrentStyle } from './styleSlice.js';
import StyleCard from './StyleCard.jsx';
import { useProductStylesQuery } from '../../../services/products.js';
import classes from './StyleSelector.module.css';

export default function StyleList({ currentViewItemId }) {
  const { data: styles, error, isLoading } = useProductStylesQuery(currentViewItemId);
  // const [style, setStyle] = useState({});
  // const [curStyle, setcurStyle] = useState({});
  const curStyle = useSelector((state) => state.productStyles.selectedStyle);

  if (error) {
    console.log(error);
    return <div>There is an error!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  // console.log('styles data: ', data);

  if (styles) {
    // console.log('price ', curStyle.original_price);
    // console.log('style ', curStyle);
    return (
      <div>
        <div>
          $
          {' '}
          {curStyle.original_price ? curStyle.original_price : styles.results[0].original_price}
        </div>
        <div>
          STYLE:
          {curStyle.name ? curStyle.name : styles.results[0].name}
        </div>
        {styles.results.map((style) => <StyleCard key={style.style_id} style={style} />)}
      </div>
    );
  }
  return <>Loading...</>;
}

// if (curStyle.original_price) {
//   const originalPrice = curStyle.original_price;
// } else {
//   const originalPrice2 = styles.results[0].original_price;
// }
// if (curStyle.sale_price) {
//   const saleExistsOriginalPrice = <p><s>{curStyle.original_price}</s></p>;
//   const salePrice = curStyle.sale_price;
// }
// {saleExistsOriginalPrice || ''}
// {originalPrice2 || originalPrice}
// {salePrice || ''}

// {curStyle.original_price ? curStyle.original_price : styles.results[0].original_price}
// {curStyle.sale_price ? curStyle.sale_price : curStyle.original_price}

// disabled prop types for whole file
// prop types just throw an error if wrong data is passed into the prop. literally just defining a type for the prop
