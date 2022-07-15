import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useGetReviewMetadataQuery, useGetAllReviewsByProductIdQuery } from '../../../../services/reviews.js';
import getAverageRating from '../../../../helpers/getAverageRating/getAverageRating.js';
import styles from '../RatingBreakdown.module.css';


export default function Filler(props) {
  return <div className={styles.filler} />
}

