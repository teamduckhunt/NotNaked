import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useGetReviewMetadataQuery, useGetAllReviewsByProductIdQuery } from '../../../../services/reviews.js';
import getAverageRating from '../../../../helpers/getAverageRating/getAverageRating.js';
import Filler from './Filler.jsx';
import styles from '../RatingBreakdown.module.css';

export default function RatingBarFeature({ productId }) {
  const { data, error, isLoading } = useGetReviewMetadataQuery(productId);

  if (error) {
    return <>Oh no, there was an error loading rating breakdown</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  if (data) {
    const fiveStarReviews = data.ratings[5];
    const fourStarReviews = data.ratings[4];
    const threeStarReviews = data.ratings[3];
    const twoStarReviews = data.ratings[2];
    const oneStarReviews = data.ratings[1];
    return (
      <div className={styles.rating_bar}>
        <Filler />
      </div>
    );
  }
}

RatingBarFeature.propTypes = {
  productId: PropTypes.number.isRequired,
};
