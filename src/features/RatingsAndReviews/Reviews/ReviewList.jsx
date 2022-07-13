/* eslint-disable import/extensions */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import ReviewCard from './ReviewCard/ReviewCard.jsx';
import { useGetAllReviewsByProductIdQuery } from '../../../services/reviews.js';

export default function ReviewList({ currentViewItemId }) {
  const { data, error, isLoading } = useGetAllReviewsByProductIdQuery(currentViewItemId);

  return (
    <div>
      {error ? (
        <>Oh no, there was an error!!</>
      ) : isLoading ? (
        <>Loading ...</>
      ) : data ? (
        <>
          <h3>Reviews List</h3>
          {data.results.map((review) => (
            <ReviewCard
              key={review.review_id}
              review={review}
              currentViewItemId={currentViewItemId}
            />
          ))}
        </>
      ) : null}
    </div>
  );
}

ReviewList.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};

// Dont need any slice files here, user will not do any sorting
// actions in these files. instead these files will be subscribed to the state.
