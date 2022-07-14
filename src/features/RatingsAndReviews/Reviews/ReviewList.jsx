/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable import/extensions */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReviewCard from './ReviewCard/ReviewCard.jsx';
import { useGetAllReviewsByProductIdQuery } from '../../../services/reviews.js';
import Button from '../../UI/Button.jsx';
import AddReviewModal from '../AddReviewModal/AddReviewModal.jsx';
import { useProductInformationByIdQuery } from '../../../services/products.js';

export default function ReviewList({ currentViewItemId }) {
  const { data, error, isLoading } = useGetAllReviewsByProductIdQuery(currentViewItemId);
  const { data: productData, isLoading: productLoading } = useProductInformationByIdQuery(currentViewItemId);

  const [numberOfReviews, setNumberOfReviews] = useState(2);
  const [disableMoreReviewsButton, setDisableMoreReviewsButton] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  // check if there are no more reviews
  const reviewListLengthCheck = () => {
    if (numberOfReviews >= data.results.length) {
      setDisableMoreReviewsButton(true);
    }
  };

  // toggle modal popup
  const handleModalToggle = () => {
    setToggleModal(!toggleModal);
  };
  console.log('this data', data);

  return (
    <>
      <div>
        {error ? (
          <>Oh no, there was an error!!</>
        ) : isLoading || productLoading ? (
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
      {toggleModal && (
        <AddReviewModal
          handleModalToggle={handleModalToggle}
          productName={productData.name}
        />
      )}
      <Button onClick={() => {
        setToggleModal(!toggleModal);
      }}
      >
        Add a Review
      </Button>
    </>
  );
}

ReviewList.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};

// more reviews button, should dissapear once all reviews are loaded.
// if there are less than 2 reviews, the more reviews button should not render
