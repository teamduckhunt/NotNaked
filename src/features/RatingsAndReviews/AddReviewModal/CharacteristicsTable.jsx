/* eslint-disable max-len */
/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import characteristicData from "./characteristics-data.json";
// import useGetReviewMetadataQuery from '../../../services/reviews.js';
import styles from './AddReviewModal.module.css';

function CharacteristicsTable({ productId, tableId }) {
  // const { data, error, isLoading } = useGetReviewMetadataQuery(productId);
  const [characteristicDescription, setCharacteristicDescription] = useState(characteristicData);
  console.log(tableId);

  // if (error) {
  //   return <>Oh no, there was an error loading the characteristic table</>;
  // }

  // if (isLoading) {
  //   return <>Loading...</>;
  // }

  // if (data) {
  //   console.log(data);
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
            <tr key={description.id}>
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
              <td>
                <input
                  type='radio'
                  name={description.characteristic}
                  value='true'
                // checked={recommend === true}
                // onChange={this.handleRecommendOptionChange}
                />
              </td>
              <td>{description.three}</td>
              <td>
                <input
                  type='radio'
                  name={description.characteristic}
                  value='true'
                // checked={recommend === true}
                // onChange={this.handleRecommendOptionChange}
                />
              </td>
              <td>{description.four}</td>
              <td>
                <input
                  type='radio'
                  name={description.characteristic}
                  value='true'
                // checked={recommend === true}
                // onChange={this.handleRecommendOptionChange}
                />
              </td>
              <td>{description.five}</td>
              <td>
                <input
                  type='radio'
                  name={description.characteristic}
                  value='true'
                // checked={recommend === true}
                // onChange={this.handleRecommendOptionChange}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
  // }
}

export default CharacteristicsTable;

CharacteristicsTable.propTypes = {
  productId: PropTypes.number.isRequired,
  tableId: PropTypes.shape({ subProp: PropTypes.string }).isRequired,
};


// characteristics	object
// Object of keys representing characteristic_id and values representing the review value for that characteristic. { "14": 5, "15": 5 //...}

// Need to grab the meta data to create the characteristic table.
// Each radio button

// sizeId : set to the metaData.characteristics.Size.id

// Sizeid : rating # (1-5)

// Productid as a key and rating as a value.