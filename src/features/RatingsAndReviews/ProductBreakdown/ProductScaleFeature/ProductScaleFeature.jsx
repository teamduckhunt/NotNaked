import React from 'react';
import PropTypes from 'prop-types';
import Pointer from './Pointer.jsx';
import styles from '../ProductBreakdown.module.css';

export default function ProductScaleFeature({ pointerPosition }) {
  return (
    <div className={styles.scale_bar}>
      <Pointer pointerPosition={pointerPosition} />
    </div>
  );
}

ProductScaleFeature.propTypes = {
  pointerPosition: PropTypes.number.isRequired,
};
