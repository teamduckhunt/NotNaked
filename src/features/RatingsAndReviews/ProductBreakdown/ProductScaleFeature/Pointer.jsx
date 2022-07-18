import React from 'react';
import PropTypes from 'prop-types';
import RatingToDuckFeet from '../../../../helpers/RatingToDuckFeet.jsx';
import styles from '../ProductBreakdown.module.css';

export default function Pointer({ pointerPosition }) {
  return <div className={styles.pointer} style={{ width: `${pointerPosition}%` }} />;
}

Pointer.propTypes = {
  pointerPosition: PropTypes.number.isRequired,
};
