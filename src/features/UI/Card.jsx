/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/button-has-type */
import React from 'react';
import styles from './Cards.module.css';

const Card = (props) => (
  <div className={`${styles.card} ${props.className}`}>{props.children}</div>
);

export default Card;
