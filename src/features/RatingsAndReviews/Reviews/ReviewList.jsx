/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable import/extensions */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReviewCard from './ReviewCard/ReviewCard.jsx';
import { useGetAllReviewsByProductIdQuery } from '../../../services/reviews.js';
import Button from '../../UI/Button.jsx';

export default function ReviewList({ currentViewItemId }) {
  const { data, error, isLoading } = useGetAllReviewsByProductIdQuery(currentViewItemId);

  const [numberOfReviews, setNumberOfReviews] = useState(2);
  const [disableMoreReviewsButton, setDisableMoreReviewsButton] = useState(false);

  // check if there are no more reviews
  const reviewListLengthCheck = () => {
    if (numberOfReviews >= data.results.length) {
      setDisableMoreReviewsButton(true);
    }
  };

  return (
    <div>
      <div>
        {error ? (
          <>Oh no, there was an error!!</>
        ) : isLoading ? (
          <>Loading ...</>
        ) : data ? (
          <>
            <h3>Reviews List</h3>
            {data.results.slice(0, numberOfReviews).map((review) => (
              <ReviewCard
                key={review.review_id}
                review={review}
                currentViewItemId={currentViewItemId}
              />
            ))}
          </>
        ) : null}
      </div>
      <Button onClick={() => {
        setNumberOfReviews(numberOfReviews + 2);
        reviewListLengthCheck();
      }}
        disabled={disableMoreReviewsButton}
      >
        More Reviews
      </Button>
      <Button>
        Add a Review
      </Button>
    </div>
  );
}

ReviewList.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
