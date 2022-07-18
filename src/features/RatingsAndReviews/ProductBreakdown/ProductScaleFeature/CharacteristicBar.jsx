import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ProductBreakdown.module.css';

export default function CharacterBar({ description, descLocation }) {
  return (
    <div>
      <div className={styles.characteristic_bar} />
      <p className={styles.description_text} style={{ justifyContent: `${descLocation}` }}>
        {description}
      </p>
    </div>
  );
}

CharacterBar.propTypes = {
  description: PropTypes.string,
  descLocation: PropTypes.string,
};
