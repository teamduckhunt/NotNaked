/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import FullDuck from '../../assets/duckFeet-rating/full.svg';
import ThirdFull from '../../assets/duckFeet-rating/third.svg';
import HalfFull from '../../assets/duckFeet-rating/half.svg';
import QuarterFull from '../../assets/duckFeet-rating/quarter.svg';
import EmptyDuck from '../../assets/duckFeet-rating/empty.svg';
import styles from './RatingToDuckFeet.module.css';

export default function RatingToDuckFeet({ rating }) {
  const randomKey = (index = 1) => Math.floor(Math.random() * 1000 * (index + 1));

  const number = Math.trunc(rating);
  const floatNum = Math.round((rating - number) * 4);
  const rest = 5 - Math.ceil(rating);

  const findDuck = () => {
    switch (floatNum) {
      case 0:
        return EmptyDuck;
      case 1:
        return QuarterFull;
      case 2:
        return HalfFull;
      case 3:
        return ThirdFull;
      case 4:
        return FullDuck;
      default:
        return null;
    }
  };

  const renderArr = [];

  if (number) {
    for (let i = 0; i < number; i += 1) {
      renderArr.push(<img key={randomKey(i)} className={styles.feet} src={FullDuck} alt="full duck" />);
    }
  }
  const float = findDuck();

  if (float) {
    renderArr.push(<img key={randomKey()} className={styles.feet} src={float} alt="full duck" />);
  }

  if (rating && number && rest !== 0 && rating - number !== 0) {
    for (let i = 0; i < rest; i += 1) {
      renderArr.push(<img key={randomKey(i)} className={styles.feet} src={EmptyDuck} alt="full duck" />);
    }
  }

  return (
    <div className={styles.rating_ctn}>
      {renderArr.map((ele) => ele)}
    </div>
  );
}

RatingToDuckFeet.propTypes = {
  rating: PropTypes.number.isRequired,
};
