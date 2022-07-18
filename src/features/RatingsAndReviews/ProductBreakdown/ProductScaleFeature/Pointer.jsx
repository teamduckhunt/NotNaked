import React from 'react';
import PropTypes from 'prop-types';
import downArrow from '../../../../../assets/downArrow.png';
import styles from '../ProductBreakdown.module.css';

export default function Pointer({ pointerLocation }) {
  return <img className={styles.characteristic_bar_arrow} style={{ left: `${pointerLocation}%` }} src={downArrow} alt="characteristic arrow" />;
}

Pointer.propTypes = {
  pointerLocation: PropTypes.number.isRequired,
};
