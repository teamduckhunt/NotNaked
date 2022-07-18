import React from 'react';
import PropTypes from 'prop-types';
import { useGetReviewMetadataQuery } from '../../../services/reviews.js';
import ProductScaleFeature from './ProductScaleFeature/ProductScaleFeature.jsx';
import styles from './ProductBreakdown.module.css';

export default function ProductBreakdown({ productId }) {
  const { data, error, isLoading } = useGetReviewMetadataQuery(productId);
  console.log('meta data', data);

  if (error) {
    return <>Oh no, there was an error loading the product breakdown.</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  if (data) {
    const characteristics = Object.entries(data.characteristics);
    return (
      <div className={styles.pb_border}>
        {characteristics.map((type) => (
          <>
            {type[0]}
            <ProductScaleFeature key={type[1].id} pointerPosition={type[1].value} />
          </>
        ))}
        {/* Size
        <ProductScaleFeature />
        Width
        <ProductScaleFeature />
        Comfort
        <ProductScaleFeature />
        Quality
        <ProductScaleFeature />
        Length
        <ProductScaleFeature />
        Fit
        <ProductScaleFeature /> */}
      </div>
    );
  }
}

ProductBreakdown.propTypes = {
  productId: PropTypes.number.isRequired,
};
