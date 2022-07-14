/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentStyle } from './styleSlice.js';
import styles from './StyleSelector.module.css';

export default function StyleCard({ style }) {
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(setCurrentStyle(style))}>
        <img src={style.photos[0].thumbnail_url} alt={style.name} className={styles.stylePic} />
      </button>
    </div>
  );
}
