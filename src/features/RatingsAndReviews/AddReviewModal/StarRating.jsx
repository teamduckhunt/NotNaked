/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-else-return */
import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import EmptyDuck from '../../../../assets/duckFeet-rating/empty.svg';
import FullDuck from '../../../../assets/duckFeet-rating/empty.svg';
import styles from './AddReviewModal.module.css';


function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className={styles.star_rating_container}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? `${styles.on}` : `${styles.off}`}
            // className={styles.on}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <img src={EmptyDuck} className={styles.star} alt="Duck Feet" />
            {/* <span className={styles.star}>{EmptyDuck}</span> */}
          </button>
        );
      })}
    </div>
  );
}

export default StarRating;


