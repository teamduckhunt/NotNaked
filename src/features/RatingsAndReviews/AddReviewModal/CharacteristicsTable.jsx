/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
/* eslint-disable jsx-quotes */
import React from 'react';
import PropTypes from 'prop-types';
import CharacteristicTableRow from './CharacteristicTableRow.jsx';
import styles from './AddReviewModal.module.css';

function CharacteristicsTable({ characteristicId, handleCharacteristicChange, required }) {
  const newObject = Object.keys(characteristicId).map((type) => {
    let leftDescription = '';
    let middleDescription = '';
    let rightDescription = '';

    switch (type) {
      case 'Fit':
        leftDescription = 'Runs tight';
        middleDescription = 'Perfect';
        rightDescription = 'Runs long';
        break;
      case 'Width':
        leftDescription = 'Too narrow';
        middleDescription = 'Perfect';
        rightDescription = 'Too wide';
        break;
      case 'Comfort':
        leftDescription = 'Uncomfortable';
        middleDescription = 'Ok';
        rightDescription = 'Perfect';
        break;
      case 'Size':
        leftDescription = 'Too Small';
        middleDescription = 'Perfect';
        rightDescription = 'Too Large';
        break;
      case 'Quality':
        leftDescription = 'Poor';
        middleDescription = 'What I expected';
        rightDescription = 'Perfect';
        break;
      case 'Length':
        leftDescription = 'Runs short';
        middleDescription = 'Perfect';
        rightDescription = 'Runs long';
        break;
      default:
        break;
    }

    return ({
      name: type,
      id: characteristicId[type].id,
      leftDescription,
      middleDescription,
      rightDescription,
    });
  });

  return (
    <div>
      <table className={styles.ct_table}>
        <thead>
          <tr className={styles.ct_tableHead}>
            <th>
              1
            </th>
            <th>
              2
            </th>
            <th>
              3
            </th>
            <th>
              4
            </th>
            <th>
              5
            </th>
          </tr>
        </thead>
        <tbody>
          {newObject.map((characteristicData) => (
            <CharacteristicTableRow
              characteristicData={characteristicData}
              key={characteristicData.id}
              handleCharacteristicChange={handleCharacteristicChange}
              required={required}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CharacteristicsTable;

CharacteristicsTable.propTypes = {
  characteristicId: PropTypes.shape({ subProp: PropTypes.string }).isRequired,
  handleCharacteristicChange: PropTypes.func.isRequired,
  required: PropTypes.string.isRequired,
};
