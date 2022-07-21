/* eslint-disable max-len */
/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AddReviewModal.module.css';
import data from "./characteristics-data.json";

function CharacteristicsTable({ characteristicType }) {
  const [characteristicDescription, setCharacteristicDescription] = useState(data);
  return (
    <div>
      <table>
        <thead>
          <tr>
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
          {characteristicDescription.map((description) => (
            <tr>
              <td>
                {description.one}
                <input
                  type='radio'
                  name={description.characteristic}
                  value='true'
                // checked={recommend === true}
                // onChange={this.handleRecommendOptionChange}
                />
              </td>
              <td>{description.two}</td>
              <input
                type='radio'
                name={description.characteristic}
                value='true'
              // checked={recommend === true}
              // onChange={this.handleRecommendOptionChange}
              />
              <td>{description.three}</td>
              <input
                type='radio'
                name={description.characteristic}
                value='true'
              // checked={recommend === true}
              // onChange={this.handleRecommendOptionChange}
              />
              <td>{description.four}</td>
              <input
                type='radio'
                name={description.characteristic}
                value='true'
              // checked={recommend === true}
              // onChange={this.handleRecommendOptionChange}
              />
              <td>{description.five}</td>
              <input
                type='radio'
                name={description.characteristic}
                value='true'
              // checked={recommend === true}
              // onChange={this.handleRecommendOptionChange}
              />
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default CharacteristicsTable;

CharacteristicsTable.propTypes = {
  characteristicType: PropTypes.string.isRequired,
};


// characteristics	object
// Object of keys representing characteristic_id and values representing the review value for that characteristic. { "14": 5, "15": 5 //...}

// Need to grab the meta data to create the characteristic table.
// Each radio button

// sizeId : set to the metaData.characteristics.Size.id

// Sizeid : rating # (1-5)

// Productid as a key and rating as a value.