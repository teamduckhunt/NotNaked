import React from 'react';
import PropTypes from 'prop-types';
import FullDuck from '../../../../assets/duckfeet-rating/full.svg';
import EmptyDuck from '../../../../assets/duckfeet-rating/empty.svg';
import styles from './AddReviewModal.module.css';

export default function StarIcon({ filled, changeRating }) {
  return (
    <div className={styles.star_container}>
      <img src={EmptyDuck} className={styles.emptyStar} alt="star" onClick={changeRating} />

      {filled && (
        <img src={FullDuck} className={styles.filledStar} alt="star" onClick={changeRating} />
      )}
    </div>
  );
}

StarIcon.propTypes = {
  filled: PropTypes.bool.isRequired,
  changeRating: PropTypes.func.isRequired,
};
