/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/button-has-type */
import React from 'react';
import styles from './Card.module.css';

export default function Card(props) {
  return (
    <div
      className={`${styles.card} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}
