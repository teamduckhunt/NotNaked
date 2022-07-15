/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentStyle } from './styleSlice';
import styles from './StyleSelector.module.css';

export default function StyleCard({ style }) {
  const dispatch = useDispatch();
  const curStyle = useSelector((state) => state.productStyles.currentStyle);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch(setCurrentStyle(style));
          console.log(curStyle);
        }}
      >
        <img
          src={style.photos[0].thumbnail_url}
          alt={style.name}
          className={styles.stylePic}
        />
      </button>
    </div>
  );
}
