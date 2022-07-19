/* eslint-disable import/extensions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReviewList from './Reviews/ReviewList.jsx';
import SortItems from './SortItems/SortItems.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown/ProductBreakdown.jsx';
import { useGetReviewMetadataQuery } from '../../services/reviews.js';
import styles from './RatingsAndReviews.module.css';

export default function RatingsAndReviews({ currentViewItemId }) {
  const { data, error, isLoading } = useGetReviewMetadataQuery(currentViewItemId);

  if (error) {
    return <>Oh no, there was an error loading rating breakdown</>;
  }

  if (isLoading) {
    return <>Loading...</>;
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
      <div className={styles.rr_container}>
        <h5 className={styles.rr_header}>
          RATINGS & REVIEWS
        </h5>
        <div className={styles.rr_main}>
          <br />
          <div className={styles.rr_breakdowns}>
            <RatingBreakdown productId={currentViewItemId} reviewCount={reviewCount()} />
            <ProductBreakdown productId={currentViewItemId} />
          </div>
          <div className={styles.rr_sort}>
            <SortItems productId={currentViewItemId} reviewCount={reviewCount()} />
          {/* <div className={styles.rr_reviewList}> */}
            <ReviewList productId={currentViewItemId} reviewCount={reviewCount()} />
          {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}

RatingsAndReviews.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
