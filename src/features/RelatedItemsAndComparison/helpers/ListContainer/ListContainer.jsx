/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
// import PropTypes from 'prop-types';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import styles from './ListContainer.module.css';

// TODO: this wrapper should also provide carousel functionality
export default function ListContainer({ children }) {
  return (
    <div className={styles.listContainer}>
      <div className={styles.trackContainer}>
        <div className={styles.track}>{children}</div>
      </div>
      <button type="button" className={`${styles.btn} ${styles.prev}`}>
        <AiFillCaretLeft />
      </button>
      <button type="button" className={`${styles.btn} ${styles.next}`}>
        <AiFillCaretRight />
      </button>
    </div>
  );
}

// ListContainer.propTypes = {
//   children: PropTypes.shape.isRequired,
// };
