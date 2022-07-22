/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentStyle } from './styleSlice.js';
import styles from './StyleSelector.module.css';

export default function StyleCard({ style }) {
  const dispatch = useDispatch();
  const curStyle = useSelector((state) => state.productStyles.currentStyle);
  return (
    <div>
      <button
        className={styles.styleButton}
        type="button"
        onClick={() => {
          dispatch(setCurrentStyle(style));
        }}
      >
        <img
          src={style.photos[0].thumbnail_url?.replace(/(?<=w=)(.*)/, '50&q=50')}
          alt={style.name}
          className={styles.stylePic}
        />
      </button>
    </div>
  );
}
