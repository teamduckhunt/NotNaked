/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setCurrentStyle } from './styleSlice.js';
import StyleCard from './StyleCard.jsx';
import { useProductStylesQuery } from '../../../services/products.js';
import styles from './StyleSelector.module.css';
import { API_KEY } from '../../../config/config.js';

export default function StyleList({ currentViewItemId }) { // { styles, updateStyles }
  // const { data, error, isLoading } = useProductStylesQuery(currentViewItemId);
  const [style, setStyle] = useState({});
  const [curStyle, setcurStyle] = useState({});
  const selectedStyle = useSelector((state) => state.productStyles.selectedStyle);
  const dispatch = useDispatch();
  useEffect(() => {
    axios(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentViewItemId}/styles`,
      { headers: { Authorization: `${API_KEY}` } },
    )
      .then((res) => {
        // console.log(res.data.results[0]);
        setStyle(res.data);
        setcurStyle(res.data.results[0]);
        dispatch(setCurrentStyle(res.data));
      })
      .catch((err) => console.error(err.message));
  }, []);

  // if (error) {
  //   console.log(error);
  //   return <div>There is an error!</div>;
  // }

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  // console.log('styles data: ', data);

  // const styleWasClicked = function (event, style) {
  //   currentStyle = style;
  // };

  return (
    <div>
      <div>
        STYLE:
        {selectedStyle.name}
      </div>
      {/* {style.results && style.results.map((sty) => {
        <StyleCard key={sty} style={sty} handleStyleChange={setCurrentStyle} />;
      })} */}
      {style.results && style.results.map((sty) => {
        <StyleCard key={sty} style={sty} />;
      })}
      {/* <div className={styles.styleButtons} /> */}
    </div>
  );
}

// disabled prop types for whole file
// prop types just throw an error if wrong data is passed into the prop. literally just defining a type for the prop
