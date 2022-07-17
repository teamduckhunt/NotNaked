/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useGetReviewMetadataQuery, useGetAllReviewsByProductIdQuery } from '../../../services/reviews.js';
import Button from '../../UI/Button.jsx';
import getAverageRating from '../../../helpers/getAverageRating/getAverageRating.js';
import { setFilterByStar } from './ratingBreakdownSlice.js';
import RatingBarFeature from './RatingBarFeature/RatingBarFeature.jsx';
import RatingToDuckFeet from '../../../helpers/RatingToDuckFeet.jsx';
import styles from './RatingBreakdown.module.css';

export default function RatingBreakdown({ productId, reviewCount }) {
  const curSortSelected = useSelector((state) => state.sortItems.sortSelection);
  const { data, error, isLoading } = useGetReviewMetadataQuery(productId);
  const { data: reviewData, isLoading: reviewLoading } = useGetAllReviewsByProductIdQuery({ productId, curSortSelected, reviewCount });
  const dispatch = useDispatch();

  const initialState = {
    fiveStar: false,
    fourStar: false,
    threeStar: false,
    twoStar: false,
    oneStar: false,
  };

  const [starFilter, setStarFilter] = useState(initialState);

  const initialFilterState = [];

  const [activeFilters, setActiveFilters] = useState(initialFilterState);

  const removeActiveFilter = (rating) => {
    const activeFiltersCopy = activeFilters.slice();
    const filterLoc = activeFiltersCopy.indexOf(rating);
    activeFiltersCopy.splice(filterLoc, 1);
    setActiveFilters(activeFiltersCopy);
  };

  const handleStarFilter = (e) => {
    if (e.target.innerText === '5 Star') {
      !starFilter.fiveStar ? setActiveFilters([...activeFilters, '5 Star']) : removeActiveFilter(e.target.innerText);
      setStarFilter({ ...starFilter, fiveStar: !starFilter.fiveStar });
    }
    if (e.target.innerText === '4 Star') {
      !starFilter.fourStar ? setActiveFilters([...activeFilters, e.target.innerText]) : removeActiveFilter(e.target.innerText);
      setStarFilter({ ...starFilter, fourStar: !starFilter.fourStar });
    }
    if (e.target.innerText === '3 Star') {
      !starFilter.threeStar ? setActiveFilters([...activeFilters, e.target.innerText]) : removeActiveFilter(e.target.innerText);
      setStarFilter({ ...starFilter, threeStar: !starFilter.threeStar });
    }
    if (e.target.innerText === '2 Star') {
      !starFilter.twoStar ? setActiveFilters([...activeFilters, e.target.innerText]) : removeActiveFilter(e.target.innerText);
      setStarFilter({ ...starFilter, twoStar: !starFilter.twoStar });
    }
    if (e.target.innerText === '1 Star') {
      !starFilter.oneStar ? setActiveFilters([...activeFilters, e.target.innerText]) : removeActiveFilter(e.target.innerText);
      setStarFilter({ ...starFilter, oneStar: !starFilter.oneStar });
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
      <div className={styles.rating_border}>
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
              <>
                <Button onClick={() => {
                  dispatch(setFilterByStar('reset'));
                  setStarFilter(initialState);
                  setActiveFilters(initialFilterState);
                }}
                >
                  Remove All Filters
                </Button>
                {activeFilters.map((filter) => <div>{filter}</div>)}
              </>
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
