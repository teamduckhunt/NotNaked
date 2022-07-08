/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/button-has-type */
import React from 'react';
import styles from './Button.module.css';

const Button = (props) => (
  <button
    type={props.type}
    className={styles.button}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;
