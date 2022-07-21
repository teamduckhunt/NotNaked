/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReviewCard from './ReviewCard/ReviewCard.jsx';
import { useGetAllReviewsByProductIdQuery, useGetReviewMetadataQuery, useAddAReviewMutation } from '../../../services/reviews.js';
import Button from '../../UI/Button.jsx';
import AddReviewModal from '../AddReviewModal/AddReviewModal.jsx';
import { useProductInformationByIdQuery } from '../../../services/products.js';
import { useSelector } from 'react-redux';
import styles from './ReviewList.module.css';

export default function ReviewList({ productId, reviewCount }) {
  const curSortSelected = useSelector((state) => state.sortItems.sortSelection);
  const { data, error, isLoading } = useGetAllReviewsByProductIdQuery({ reviewCount, productId, curSortSelected });
  const {data: productData, isLoading: productLoading} = useProductInformationByIdQuery(productId);
  const { data: metaData, isLoading: metaLoading } = useGetReviewMetadataQuery(productId);

  const [numberOfReviews, setNumberOfReviews] = useState(2);
  const [showMoreReviewsButton, setShowMoreReviewsButton] = useState(true);
  const curStarSelected = useSelector((state) => state.ratingBreakdown.filterByStar);
  const [toggleModal, setToggleModal] = useState(false);
  const [addAReview] = useAddAReviewMutation();

  const handleModalToggle = () => {
    setToggleModal(!toggleModal);
  };

  if (error) {
    return <>Oh no, there was an error!</>;
  }

  if (isLoading || productLoading || metaLoading) {
    return <>Loading...</>;
  }

  if (data || productData || metaData) {

    // check if there are no more reviews
    const reviewListLengthCheck = () => {
      if (numberOfReviews >= data.results.length) {
        setShowMoreReviewsButton(false);
      }
    };

    const filteredReviewSet = data?.results.map((review) => {
      if (curStarSelected.indexOf(review.rating) !== -1) {
        return review;
      }
    });

    const checkForStarFilter = (curStarSelected.length === 0) ? data.results : filteredReviewSet.filter(item => item !== undefined);


    return (
      <div className={styles.reviewList_border}>
        <div className={styles.reviewList}>
          {checkForStarFilter.slice(0, numberOfReviews).map((review) => (
            <ReviewCard
              key={review.review_id}
              review={review}
              productId={productId}
            />
          ))}
        </div>
        {showMoreReviewsButton &&
          <Button onClick={() => {
            setNumberOfReviews(numberOfReviews + 2);
            reviewListLengthCheck();
          }}
          className={styles.reviewList_btn}
          >
            More Reviews
          </Button>
        }
        <Button className={styles.reviewList_btn} onClick={handleModalToggle}>
          Add a Review
        </Button>
        {toggleModal && (
          <AddReviewModal
          handleModalToggle={handleModalToggle}
          productName={productData.name}
          productId={productId}
          characteristicId={metaData.characteristics}
          addAReview={addAReview} />
        )}
      </div>
    );
  }
}

ReviewList.propTypes = {
  productId: PropTypes.number.isRequired,
};
