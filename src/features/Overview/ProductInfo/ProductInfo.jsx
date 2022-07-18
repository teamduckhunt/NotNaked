/* eslint-disable react/prop-types */
import React from 'react';
import { useProductInformationByIdQuery } from '../../../services/products.js';
import styles from './ProductInfo.module.css';
import RatingToDuckFeet from '../../../helpers/RatingToDuckFeet.jsx';
import { useGetReviewMetadataQuery } from '../../../services/reviews';
import getAverageRating from '../../../helpers/getAverageRating/getAverageRating';

export default function ProductInfo({ currentViewItemId }) {
  const { data: metaData } = useGetReviewMetadataQuery(currentViewItemId);
  const {
    data: product,
    error,
    isLoading,
  } = useProductInformationByIdQuery(currentViewItemId);

  if (error) {
    return <div>There is an error!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (product) {
    console.log('metadata ', metaData);
    console.log(currentViewItemId);
    const averageRating = metaData ? getAverageRating(metaData) : '';
    return (
      <div>
        <div>
          <RatingToDuckFeet className={styles.reviews} rating={averageRating} />
        </div>
        <p className={styles.category}>{(product.category).toUpperCase()}</p>
        <h2 className={styles.name}>{product.name}</h2>
      </div>
    );
  }
}
