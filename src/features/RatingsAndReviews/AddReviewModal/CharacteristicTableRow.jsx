import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddReviewModal.module.css';

function CharacteristicTableRow({ characteristicData, handleCharacteristicChange, required }) {
  return (
    <tr className={`${styles.ct_tableRows} ${styles.required}`}>
      <td className={styles.ct_columns}>
        {characteristicData.leftDescription}
        <input
          type="radio"
          name={characteristicData.id}
          value="1"
          required={required}
          onChange={handleCharacteristicChange}
        />
      </td>
      <td className={styles.ct_columns}>
        <input
          type="radio"
          name={characteristicData.id}
          value="2"
          onChange={handleCharacteristicChange}
        />
      </td>
      <td className={styles.ct_columns}>
        {characteristicData.middleDescription}
        <input
          type="radio"
          name={characteristicData.id}
          value="3"
          onChange={handleCharacteristicChange}
        />
      </td>
      <td className={styles.ct_columns}>
        <input
          type="radio"
          name={characteristicData.id}
          value="4"
          onChange={handleCharacteristicChange}
        />
      </td>
      <td className={styles.ct_columns}>
        {characteristicData.rightDescription}
        <input
          type="radio"
          name={characteristicData.id}
          value="5"
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
  required: PropTypes.string.isRequired,
};
