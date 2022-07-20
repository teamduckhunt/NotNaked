/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { useProductInformationByIdQuery } from '../../../services/products.js';
import styles from './ProductInfo.module.css';
import RatingToDuckFeet from '../../../helpers/RatingToDuckFeet.jsx';
import { useGetReviewMetadataQuery } from '../../../services/reviews';
import getAverageRating from '../../../helpers/getAverageRating/getAverageRating';

export default function ProductInfo({ currentViewItemId, reviewSection, scrollToElement }) {
  // const reviewSection = useRef(null);
  const { data: metaData } = useGetReviewMetadataQuery(currentViewItemId);
  const {
    data: product,
    error,
    isLoading,
  } = useProductInformationByIdQuery(currentViewItemId);
  // const window = document.defaultView;

  if (error) {
    return <div>There is an error!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (product) {
    const averageRating = metaData ? getAverageRating(metaData) : 0;
    return (
      <div>
        <div>
          <RatingToDuckFeet className={styles.reviews} rating={averageRating} />
          <button className={styles.scrollToReviewsButton} type="button" onClick={() => { scrollToElement(); }}>Read all reviews</button>
        </div>
        <p className={styles.category}>{(product.category).toUpperCase()}</p>
        <h2 className={styles.name}>{product.name}</h2>
      </div>
    );
  }
}