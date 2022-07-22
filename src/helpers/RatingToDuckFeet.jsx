/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import FullDuck from '../../assets/duckfeet-rating/full.svg';
import ThirdFull from '../../assets/duckfeet-rating/third.svg';
import HalfFull from '../../assets/duckfeet-rating/half.svg';
import QuarterFull from '../../assets/duckfeet-rating/quarter.svg';
import EmptyDuck from '../../assets/duckfeet-rating/empty.svg';
import styles from './RatingToDuckFeet.module.css';

export default function RatingToDuckFeet({ rating }) {
  const randomKey = (index = 1) => Math.floor(Math.random() * 1000 * (index + 1));

  const number = Math.trunc(rating);
  const floatNum = Math.round((rating - number) * 4);
  const rest = number !== 5 ? 5 - number - 1 : 0;

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

  if (floatNum >= 0 && number !== 5) {
    renderArr.push(<img key={randomKey()} className={styles.feet} src={float} alt="float duck" />);
  }

  if (rest > 0) {
    for (let i = 0; i < rest; i += 1) {
      renderArr.push(<img key={randomKey(i)} className={styles.feet} src={EmptyDuck} alt="empty duck" />);
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
