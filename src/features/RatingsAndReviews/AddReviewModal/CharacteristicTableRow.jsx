import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddReviewModal.module.css';

function CharacteristicTableRow({ characteristicData, handleCharacteristicChange }) {
  return (
    <tr className={styles.ct_tableRows}>
      <td className={styles.ct_columns}>
        {characteristicData.leftDescription}
        <input
          type="radio"
          name={characteristicData.id}
          value="1"
          // checked={recommend === true}
          onChange={handleCharacteristicChange}
        />
      </td>
      <td className={styles.ct_columns}>
        <input
          type="radio"
          name={characteristicData.id}
          value="2"
          // checked={recommend === true}
          onChange={handleCharacteristicChange}
        />
      </td>
      <td className={styles.ct_columns}>
        {characteristicData.middleDescription}
        <input
          type="radio"
          name={characteristicData.id}
          value="3"
          // checked={recommend === true}
          onChange={handleCharacteristicChange}
        />
      </td>
      <td className={styles.ct_columns}>
        <input
          type="radio"
          name={characteristicData.id}
          value="4"
          // checked={recommend === true}
          onChange={handleCharacteristicChange}
        />
      </td>
      <td className={styles.ct_columns}>
        {characteristicData.rightDescription}
        <input
          type="radio"
          name={characteristicData.id}
          value="5"
          // checked={recommend === true}
          onChange={handleCharacteristicChange}
        />
      </td>
    </tr>
  );
}

export default CharacteristicTableRow;

CharacteristicTableRow.propTypes = {
  characteristicData: PropTypes.shape({ subProp: PropTypes.string }).isRequired,
  handleCharacteristicChange: PropTypes.func.isRequired,
};
