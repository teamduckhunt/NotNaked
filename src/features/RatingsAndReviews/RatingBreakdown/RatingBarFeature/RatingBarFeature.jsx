import React from 'react';
import PropTypes from 'prop-types';
import Filler from './Filler';
import styles from '../RatingBreakdown.module.css';

export default function RatingBarFeature({ fillerPercentage }) {
  return (
    <div className={styles.rating_bar}>
      <Filler fillerPercentage={fillerPercentage} />
    </div>
  );
}

RatingBarFeature.propTypes = {
  fillerPercentage: PropTypes.number.isRequired,
};

// need total review count to average out with each star rating.
