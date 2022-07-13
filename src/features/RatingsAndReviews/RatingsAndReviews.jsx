/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import ReviewList from './Reviews/ReviewList.jsx';
import SortItems from './SortItems/SortItems.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown/ProductBreakdown.jsx';

export default function RatingsAndReviews({ currentViewItemId }) {
  return (
    <>
      <div>
        <ReviewList currentViewItemId={currentViewItemId} />
      </div>
      {/* <SortItems />
      <RatingBreakdown />
      <ProductBreakdown /> */}
    </>
  );
}

RatingsAndReviews.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
