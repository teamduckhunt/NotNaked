/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable import/extensions */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReviewCard from './ReviewCard/ReviewCard.jsx';
import { useGetAllReviewsByProductIdQuery } from '../../../services/reviews.js';
import Button from '../../UI/Button.jsx';
import { useSelector } from 'react-redux';

export default function ReviewList({ currentViewItemId }) {
  const { data, error, isLoading } = useGetAllReviewsByProductIdQuery(currentViewItemId);

  const [numberOfReviews, setNumberOfReviews] = useState(2);
  const [disableMoreReviewsButton, setDisableMoreReviewsButton] = useState(false);
  const curStarSelected = useSelector((state) => state.ratingBreakdown.filterByStar);

  if (error) {
    return <>Oh no, there was an error!</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  if (data) {

    // check if there are no more reviews
    const reviewListLengthCheck = () => {
      if (numberOfReviews >= data.results.length) {
        setDisableMoreReviewsButton(true);
      }
    };

    const filteredReviewSet = data?.results.map((review) => {
      if (curStarSelected.indexOf(review.rating) !== -1) {
        return review;
      }
    });

    const checkForStarFilter = (curStarSelected.length === 0) ? data.results : filteredReviewSet.filter(item => item !== undefined);

    // console.log('check', checkForStarFilter);

    return (
      <div>
        <div>
          <h3>Reviews List</h3>
          {checkForStarFilter.slice(0, numberOfReviews).map((review) => (
            <ReviewCard
              key={review.review_id}
              review={review}
              currentViewItemId={currentViewItemId}
            />
          ))}
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
}

ReviewList.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
