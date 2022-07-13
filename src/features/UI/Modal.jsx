/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import { createPortal } from 'react-dom';
import Card from './Card.jsx';
import styles from './Modal.module.css';

function Backdrop() {
  return <div className={styles.backdrop} />;
}

export default function Modal({ children, className }) {
  return (
    <>
      {createPortal(<Backdrop />, document.getElementById('backdrop'))}
      {createPortal(<Card className={`${styles.modal} ${className}`}>{children}</Card>, document.getElementById('modal'))}
    </>
  );
}
