import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EmptyDuck from '../../../../assets/duckfeet-rating/empty.svg';
import FullDuck from '../../../../assets/duckfeet-rating/empty.svg';
import StarIcon from './StarIcon.jsx'
import styles from './AddReviewModal.module.css';

function StarRating({ onChange }) {
  const [rating, setRating] = useState(0);
  const [ratingDesc, setRatingDesc] = useState("");

  const changeRatingText = (ratingSelection) => {
    if (ratingSelection === 5) {
      setRatingDesc('Great');
    }
    if (ratingSelection === 4) {
      setRatingDesc('Good');
    }
    if (ratingSelection === 3) {
      setRatingDesc('Average');
    }
    if (ratingSelection === 2) {
      setRatingDesc('Fair');
    }
    if (ratingSelection === 1) {
      setRatingDesc('Poor');
    }
  }

  const changeRating = (ratingSelection) => {
    setRating(ratingSelection);
    changeRatingText(ratingSelection)
    onChange?.(ratingSelection);
  };

  return (
    <div className={styles.star_rating_container}>
      {[1, 2, 3, 4, 5].map((value, index) => {
        return (
            <StarIcon
              key={value}
              filled={value <= rating}
              changeRating={() => changeRating(value)}
            />
        );
      })}
      {ratingDesc !== undefined && <div className={styles.ratingDesc}>{ratingDesc}</div>}
    </div>
  );
}

export default StarRating;
