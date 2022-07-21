/* eslint-disable max-len */
/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import characteristicData from "./characteristics-data.json";
import styles from './AddReviewModal.module.css';

function CharacteristicsTable({ tableId, handleCharacteristicChange }) {
  // const [characteristicDescription, setCharacteristicDescription] = useState(characteristicData);
  console.log(tableId);

  return (
    <div>
      <table>
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
          {characteristicData.map((description) => (
            <tr key={description.id} className={styles.ct_tableRows}>
              <td className={styles.ct_columns}>
                {description.one}
                <input
                  type='radio'
                  name={description.characteristic}
                  value='1'
                  // checked={recommend === true}
                  onChange={handleCharacteristicChange}
                />
              </td>
              <td className={styles.ct_columns}>
                {description.two}
                <input
                  type='radio'
                  name={description.characteristic}
                  value='2'
                  // checked={recommend === true}
                  onChange={handleCharacteristicChange}
                />
              </td>
              <td className={styles.ct_columns}>
                {description.three}
                <input
                  type='radio'
                  name={description.characteristic}
                  value='3'
                  // checked={recommend === true}
                  onChange={handleCharacteristicChange}
                />
              </td>
              <td className={styles.ct_columns}>
                {description.four}
                <input
                  type='radio'
                  name={description.characteristic}
                  value='4'
                  // checked={recommend === true}
                  onChange={handleCharacteristicChange}
                />
              </td>
              <td className={styles.ct_columns}>
                {description.five}
                <input
                  type='radio'
                  name={description.characteristic}
                  value='5'
                  // checked={recommend === true}
                  onChange={handleCharacteristicChange}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default CharacteristicsTable;

CharacteristicsTable.propTypes = {
  tableId: PropTypes.shape({ subProp: PropTypes.string }).isRequired,
  handleCharacteristicChange: PropTypes.func.isRequired,
};

// Note :
// Need to add the tableId to each radiobutton.
// then pass a key value pair of id : rating, back to characteristics state.

// characteristics object
// Object of keys representing characteristic_id and values representing the review value for that characteristic. { "14": 5, "15": 5 //...}

// Need to grab the meta data to create the characteristic table.
// Each radio button

// sizeId : set to the metaData.characteristics.Size.id

// Sizeid : rating # (1-5)

// Productid as a key and rating as a value.


// name={characteristic_id}
// onClick={handleCLick}
// value is the number ?
