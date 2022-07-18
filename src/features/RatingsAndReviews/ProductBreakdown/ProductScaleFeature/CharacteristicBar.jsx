import React from 'react';
import PropTypes from 'prop-types';
import Pointer from './Pointer.jsx';
import styles from '../ProductBreakdown.module.css';

export default function CharacterBar({ description, descLocation }) {
  return (
    <div>
      <div className={styles.characteristic_bar} />
      <p className={styles.description_text} style={{ 'justify-content': `${descLocation}` }}>
        {description}
      </p>
    </div>
  );
}

CharacterBar.propTypes = {
  // pointerPosition: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  descLocation: PropTypes.string.isRequired,
};
