/* eslint-disable import/extensions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReviewList from './Reviews/ReviewList.jsx';
import SortItems from './SortItems/SortItems.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown/ProductBreakdown.jsx';
import { useGetReviewMetadataQuery } from '../../services/reviews.js';

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
      <>
        <div>
          <ReviewList productId={currentViewItemId} reviewCount={reviewCount()} />
        </div>
        <SortItems productId={currentViewItemId} reviewCount={reviewCount()} />
        <RatingBreakdown productId={currentViewItemId} reviewCount={reviewCount()} />
        <ProductBreakdown productId={currentViewItemId} />
      </>
    );
  }
}

RatingsAndReviews.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
