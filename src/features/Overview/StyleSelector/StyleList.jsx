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
import SalePrice from '../../RelatedItemsAndComparison/helpers/SalePrice/SalePrice.jsx';
import styleCheck from '../pics/stylecheck.png';

export default function StyleList({ currentViewItemId }) {
  const { data: styles, error, isLoading } = useProductStylesQuery(currentViewItemId);
  const curStyle = useSelector((state) => state.productStyles.selectedStyle);

  if (error) {
    return <div>There is an error!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (styles) {
    const price = curStyle.original_price ? curStyle.original_price : styles.results[0].original_price;
    const salesPrice = curStyle.sale_price === undefined ? styles.results[0].sale_price : curStyle.sale_price;

    return (
      <div>
        <div className={classes.priceDiv}>
          <SalePrice originalPrice={price} salePrice={salesPrice} />
        </div>
        <div className={classes.styleName}>
          STYLE:
          {' '}
          {curStyle.name ? curStyle.name.toUpperCase() : styles.results[0].name.toUpperCase()}
        </div>
        <div className={classes.styleButtonList}>
          {styles.results.map((style, index) => {
            if (curStyle.style_id === undefined && index === 0) {
              return (
                <div className={classes.styleAndCheckmarkHolder} key={0}>
                  <StyleCard key={style.style_id} style={style} />
                  <img src={styleCheck} className={classes.checkDot} alt="checkmark indicating current style selected" />
                </div>
              );
            }
            if (curStyle.style_id === style.style_id) {
              return (
                <div className={classes.styleAndCheckmarkHolder}>
                  <StyleCard key={style.style_id} style={style} />
                  <img src={styleCheck} className={classes.checkDot} alt="checkmark indicating current style selected" />
                </div>
              );
            }
            return <StyleCard key={style.style_id} style={style} />;
          })}
        </div>
      </div>
    );
  }
  return <>Loading...</>;
}
