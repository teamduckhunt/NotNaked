/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useGetReviewMetadataQuery, useGetAllReviewsByProductIdQuery } from '../../../services/reviews.js';
import Button from '../../UI/Button.jsx';
import getAverageRating from '../../../helpers/getAverageRating/getAverageRating.js';
import { setFilterByStar } from './ratingBreakdownSlice.js';
import RatingBarFeature from './RatingBarFeature/RatingBarFeature.jsx';
import RatingToDuckFeet from '../../../helpers/RatingToDuckFeet.jsx';

export default function RatingBreakdown({ productId, reviewCount }) {
  const { data, error, isLoading } = useGetReviewMetadataQuery(productId);
  const { data: reviewData, isLoading: reviewLoading } = useGetAllReviewsByProductIdQuery({ productId, reviewCount });
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
    const fiveStarReviewPercentage = (data.ratings[5] / reviewCount) * 100;
    const fourStarReviewsPercentage = (data.ratings[4] / reviewCount) * 100;
    const threeStarReviewsPercentage = (data.ratings[3] / reviewCount) * 100;
    const twoStarReviewsPercentage = (data.ratings[2] / reviewCount) * 100;
    const oneStarReviewsPercentage = (data.ratings[1] / reviewCount) * 100;

    return (
      <div>

        <div>
          {Math.round(avgRating * 10) / 10}
          <div>
            <RatingToDuckFeet rating={avgRating} />
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
          <RatingBarFeature fillerPercentage={fiveStarReviewPercentage} />
          {`(${data.ratings[5]})`}
          <Button
            onClick={(e) => {
              handleStarFilter(e);
              dispatch(setFilterByStar(4));
            }}
          >
            4 Star
          </Button>
          <RatingBarFeature fillerPercentage={fourStarReviewsPercentage} />
          {`(${data.ratings[4]})`}
          <Button
            onClick={(e) => {
              handleStarFilter(e);
              dispatch(setFilterByStar(3));
            }}
          >
            3 Star
          </Button>
          <RatingBarFeature fillerPercentage={threeStarReviewsPercentage} />
          {`(${data.ratings[3]})`}
          <Button
            onClick={(e) => {
              handleStarFilter(e);
              dispatch(setFilterByStar(2));
            }}
          >
            2 Star
          </Button>
          <RatingBarFeature fillerPercentage={twoStarReviewsPercentage} />
          {`(${data.ratings[2]})`}
          <Button
            onClick={(e) => {
              handleStarFilter(e);
              dispatch(setFilterByStar(1));
            }}
          >
            1 Star
          </Button>
          <RatingBarFeature fillerPercentage={oneStarReviewsPercentage} />
          {`(${data.ratings[1]})`}
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

RatingBreakdown.propTypes = {
  productId: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
};

// Strategy Notes :

// add message for the filters that have been currently applied.
