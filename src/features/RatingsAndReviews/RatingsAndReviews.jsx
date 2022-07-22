/* eslint-disable import/extensions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReviewList from './Reviews/ReviewList.jsx';
import SortItems from './SortItems/SortItems.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown/ProductBreakdown.jsx';
import { useGetReviewMetadataQuery } from '../../services/reviews.js';
import LoadingSpinner from '../UI/LoadingSpinner.jsx';
import ErrorMessage from '../UI/ErrorMessage.jsx';
import styles from './RatingsAndReviews.module.css';

export default function RatingsAndReviews({ currentViewItemId, reviewSection }) {
  const { data, error, isLoading } = useGetReviewMetadataQuery(currentViewItemId);

  if (error) {
    return <div className={styles.no_product}><ErrorMessage /></div>;
  }

  if (isLoading) {
    return <div className={styles.no_proudct}><LoadingSpinner /></div>;
  }

  if (data) {
    const reviewCount = () => {
      const starRating = data.ratings;
      let total = 0;
      Object.values(starRating).forEach((count) => {
        total += Number(count);
      });
      return total;
    };
    return (
      <div className={styles.rr_container} ref={reviewSection}>
        <h5 className={styles.rr_header}>
          RATINGS & REVIEWS
        </h5>
        <div className={styles.rr_main}>
          <br />
          <div className={styles.rr_breakdowns}>
            <RatingBreakdown productId={currentViewItemId} reviewCount={reviewCount()} />
            <ProductBreakdown productId={currentViewItemId} />
          </div>
          <div className={styles.rr_sort_reviews}>
            <SortItems productId={currentViewItemId} reviewCount={reviewCount()} />
            <ReviewList productId={currentViewItemId} reviewCount={reviewCount()} />
          </div>
        </div>
      </div>
    );
  }
}

RatingsAndReviews.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
