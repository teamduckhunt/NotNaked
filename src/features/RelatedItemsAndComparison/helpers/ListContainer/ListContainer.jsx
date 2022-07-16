/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
// import PropTypes from 'prop-types';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import styles from './ListContainer.module.css';

export default function ListContainer({ children, handleCarouselControl, start, end, length }) {
  return (
    <div className={styles.listContainer}>
      <div className={styles.trackContainer}>
        <div className={styles.track}>{children}</div>
      </div>
      {start !== 0 && (
        <button
          type="button"
          onClick={() => handleCarouselControl('prev')}
          className={`${styles.btn} ${styles.prev}`}
        >
          <AiFillCaretLeft />
        </button>
      )}

      {(length - end > 0) && (
        <button
          type="button"
          onClick={() => handleCarouselControl('next')}
          className={`${styles.btn} ${styles.next}`}
        >
          <AiFillCaretRight />
        </button>
      )}
    </div>
  );
}

// ListContainer.propTypes = {
//   children: PropTypes.shape.isRequired,g
// };
