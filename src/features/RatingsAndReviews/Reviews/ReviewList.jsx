/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable import/extensions */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReviewCard from './ReviewCard/ReviewCard.jsx';
import { useGetAllReviewsByProductIdQuery } from '../../../services/reviews.js';
import Button from '../../UI/Button.jsx';
import { useSelector } from 'react-redux';

export default function ReviewList({ productId }) {
  const curSortSelected = useSelector((state) => state.sortItems.sortSelection);
  console.log(curSortSelected);
  console.log(productId);
  const { data, error, isLoading } = useGetAllReviewsByProductIdQuery({ productId, curSortSelected} );

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
    console.log('review data', data);

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


    return (
      <div>
        <div>
          <h3>Reviews List</h3>
          {checkForStarFilter.slice(0, numberOfReviews).map((review) => (
            <ReviewCard
              key={review.review_id}
              review={review}
              productId={productId}
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
  productId: PropTypes.number.isRequired,
};
