import React from 'react';
import FullDuck from '../../assets/duckFeet-rating/full.svg';
import ThirdFull from '../../assets/duckFeet-rating/third.svg';
import HalfFull from '../../assets/duckFeet-rating/half.svg';
import QuarterFull from '../../assets/duckFeet-rating/quarter.svg';
import EmptyDuck from '../../assets/duckFeet-rating/empty.svg';
import styles from './RatingToDuckFeet.module.css';

export default function RatingToDuckFeet({ rating }) {
  console.log(rating);
  const FULL = <img className={styles.feet} src={FullDuck} alt="full duck" />;
  const THIRD = <img className={styles.feet} src={ThirdFull} alt="full duck" />;
  const HALF = <img className={styles.feet} src={HalfFull} alt="full duck" />;
  const QUARTER = <img className={styles.feet} src={QuarterFull} alt="full duck" />;
  const EMPTY = <img className={styles.feet} src={EmptyDuck} alt="full duck" />;

  return (
    <div className={styles.rating_ctn}>
      {FULL}
      {THIRD}
      {HALF}
      {QUARTER}
      {EMPTY}
    </div>
  );
}
