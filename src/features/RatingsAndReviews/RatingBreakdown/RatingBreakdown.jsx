/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useGetReviewMetadataQuery, useGetAllReviewsByProductIdQuery } from '../../../services/reviews.js';
import Button from '../../UI/Button.jsx';
import getAverageRating from '../../../helpers/getAverageRating/getAverageRating.js';
import { setFilterByStar } from './ratingBreakdownSlice.js';

export default function ReviewList({ productId }) {
  const { data, error, isLoading } = useGetReviewMetadataQuery(productId);
  const { data: reviewData, isLoading: reviewLoading } = useGetAllReviewsByProductIdQuery(productId);
  const dispatch = useDispatch();

  const [starFilter, setStarFilter] = useState({
    fiveStar: false,
    fourStar: false,
    threeStar: false,
    twoStar: false,
    oneStar: false,
  });

  const handleStarFilter = (e) => {
    if (e.target.innerText === '5 Star') {
      starFilter.fiveStar === false ? setStarFilter({ ...starFilter, fiveStar: true }) : setStarFilter({ ...starFilter, fiveStar: false });
    }
    if (e.target.innerText === '4 Star') {
      starFilter.fourStar === false ? setStarFilter({ ...starFilter, fourStar: true })
        : setStarFilter({ ...starFilter, fourStar: false });
    }
    if (e.target.innerText === '3 Star') {
      starFilter.threeStar === false ? setStarFilter({ ...starFilter, threeStar: true })
        : setStarFilter({ ...starFilter, threeStar: false });
    }
    if (e.target.innerText === '2 Star') {
      starFilter.twoStar === false ? setStarFilter({ ...starFilter, twoStar: true }) : setStarFilter({ ...starFilter, twoStar: false });
    }
    if (e.target.innerText === '1 Star') {
      starFilter.oneStar === false ? setStarFilter({ ...starFilter, oneStar: true }) : setStarFilter({ ...starFilter, oneStar: false });
    }
  };

  // check if any star in starFilter is true.
  const resetButton = (Object.values(starFilter).includes(true));

  // The percentage of reviews that ‘recommend’ the product will be displayed below the breakdown.
  // take the total number of reviews.
  // tally how many reviews recommedn this product
  // return a result of recommended / total * 100

  if (error) {
    return <>Oh no, there was an error loading rating breakdown</>;
  }

  if (isLoading || reviewLoading) {
    return <>Loading...</>;
  }

  if (data || reviewData) {
    const avgRating = getAverageRating(data);
    const numOfReviews = reviewData.results.length;
    const recommendedPercentage = () => {
      const totalReviews = reviewData.results.length;
      const totalRecommended = (
        reviewData.results.map((review) => {
          if (review.recommend === true) {
            return review;
          }
          return undefined;
        })
      ).filter((item) => item !== undefined);
      return ((totalRecommended.length / totalReviews) * 100).toFixed();
    };

    return (
      <div>

        <div>
          {Math.round(avgRating * 10) / 10}
          <div>
            ⭐️
          </div>
          {numOfReviews}
          {' '}
          total reviews
        </div>
        <div>
          <Button
            onClick={(e) => {
              handleStarFilter(e);
              dispatch(setFilterByStar(5));
            }}
          >
            5 Star
          </Button>
          <Button
            onClick={(e) => {
              handleStarFilter(e);
              dispatch(setFilterByStar(4));
            }}
          >
            4 Star
          </Button>
          <Button
            onClick={(e) => {
              handleStarFilter(e);
              dispatch(setFilterByStar(3));
            }}
          >
            3 Star
          </Button>
          <Button
            onClick={(e) => {
              handleStarFilter(e);
              dispatch(setFilterByStar(2));
            }}
          >
            2 Star
          </Button>
          <Button
            onClick={(e) => {
              handleStarFilter(e);
              dispatch(setFilterByStar(1));
            }}
          >
            1 Star
          </Button>
        </div>
        <div>
          {resetButton
            && (
              <Button onClick={() => {
                dispatch(setFilterByStar('reset'));
              }}
              >
                Remove All Filters
              </Button>
            )}
        </div>
        <div>
          {recommendedPercentage()}
          {' '}
          % of customers recommend this product.
        </div>

      </div>
    );
  }
}

ReviewList.propTypes = {
  productId: PropTypes.number.isRequired,
};

// Strategy

// add a bar count feature to each star button.

// add div, w/ percentage of reviews that recommend product.
