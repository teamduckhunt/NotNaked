import React from 'react';
import PropTypes from 'prop-types';
import Pointer from './Pointer.jsx';
import CharacterBar from './CharacteristicBar.jsx';
import styles from '../ProductBreakdown.module.css';

export default function ProductScaleFeature({ characteristic }) {
  console.log(characteristic);
  return (
    <div>
      {characteristic.name}
      <div className={styles.characteristic_bar_spacing}>
        <CharacterBar />
        <CharacterBar />
        <CharacterBar />
      </div>
      <Pointer pointerLocation={characteristic.percent} />
    </div>
  );
}

ProductScaleFeature.propTypes = {
  // pointerPosition: PropTypes.number.isRequired,
  characteristic: PropTypes.shape.isRequired,
};


// css grid and 3 different grids, for individual bars.
// each bar is its own div.
// <CharacterBar>
//   separate component for each bar to render.