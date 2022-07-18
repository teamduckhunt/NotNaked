import React from 'react';
import PropTypes from 'prop-types';
import styles from '../RatingBreakdown.module.css';

export default function Filler({ fillerPercentage }) {
  return <div className={styles.filler} style={{ width: `${fillerPercentage}%` }} />;
}

Filler.propTypes = {
  fillerPercentage: PropTypes.number.isRequired,
};
