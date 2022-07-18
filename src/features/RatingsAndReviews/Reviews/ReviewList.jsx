/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReviewCard from './ReviewCard/ReviewCard.jsx';
import { useGetAllReviewsByProductIdQuery } from '../../../services/reviews.js';
import Button from '../../UI/Button.jsx';
import AddReviewModal from '../AddReviewModal/AddReviewModal.jsx';
import { useProductInformationByIdQuery } from '../../../services/products.js';
import { useSelector } from 'react-redux';
import styles from './ReviewList.module.css';

export default function ReviewList({ productId, reviewCount }) {
  const curSortSelected = useSelector((state) => state.sortItems.sortSelection);
  const { data, error, isLoading } = useGetAllReviewsByProductIdQuery({ reviewCount, productId, curSortSelected });

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

    return (
      <div className={styles.reviewList}>
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

// more reviews button, should dissapear once all reviews are loaded.
// if there are less than 2 reviews, the more reviews button should not render
