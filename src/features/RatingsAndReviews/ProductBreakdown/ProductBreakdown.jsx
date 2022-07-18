import React from 'react';
import PropTypes from 'prop-types';
import { useGetReviewMetadataQuery } from '../../../services/reviews.js';
import ProductScaleFeature from './ProductScaleFeature/ProductScaleFeature.jsx';
import styles from './ProductBreakdown.module.css';

export default function ProductBreakdown({ productId }) {
  const { data, error, isLoading } = useGetReviewMetadataQuery(productId);

  if (error) {
    return <>Oh no, there was an error loading the product breakdown.</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  if (data) {
    const newObject = Object.keys(data.characteristics).map((type) => {
      let leftDescription = '';
      let rightDescription = '';

      switch (type) {
        case 'Fit':
          leftDescription = 'Runs tight';
          rightDescription = 'Runs long';
          break;
        case 'Width':
          leftDescription = 'Too narrow';
          rightDescription = 'Too wide';
          break;
        case 'Comfort':
          leftDescription = 'Uncomfortable';
          rightDescription = 'Perfect';
          break;
        case 'Size':
          leftDescription = 'Too Small';
          rightDescription = 'Too Large';
          break;
        case 'Quality':
          leftDescription = 'Poor';
          rightDescription = 'Perfect';
          break;
        case 'Length':
          leftDescription = 'Runs short';
          rightDescription = 'Runs long';
          break;
        default:
          break;
      }

      return ({
        name: type,
        id: data.characteristics[type].id,
        percent: ((data.characteristics[type].value / 5) * 100).toFixed(),
        leftDescription,
        rightDescription,
      });
    });
    return (
      <div className={styles.pb_border}>
        {newObject.map((value) => (
          <ProductScaleFeature characteristic={value} key={value.id} />
        ))}
      </div>
    );
  }
}

ProductBreakdown.propTypes = {
  productId: PropTypes.number.isRequired,
};