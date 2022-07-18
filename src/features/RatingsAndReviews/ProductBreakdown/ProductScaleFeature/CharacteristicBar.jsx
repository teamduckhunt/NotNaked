import React from 'react';
import PropTypes from 'prop-types';
import Pointer from './Pointer.jsx';
import styles from '../ProductBreakdown.module.css';

export default function CharacterBar() {
  return (
    <div className={styles.characteristic_bar} />
  );
}

CharacterBar.propTypes = {
  // pointerPosition: PropTypes.number.isRequired,
  pointerLocation: PropTypes.number.isRequired,
};
