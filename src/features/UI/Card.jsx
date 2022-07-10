/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent */

import React from 'react';
import styles from './Card.module.css';

export default function Card( {className, onClick, children } ) {
  return (
    <div
      className={`${styles.card} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
