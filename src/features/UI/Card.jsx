/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent */

import React from 'react';
import styles from './Card.module.css';

export default function Card(props) {
  return (
    <div
      className={`${styles.card} ${props.className}`}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </div>
  );
}
