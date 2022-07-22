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
import LoadingSpinner from '../../UI/LoadingSpinner.jsx';
import ErrorMessage from '../../UI/ErrorMessage.jsx';
import styles from './RatingBreakdown.module.css';

export default function RatingBreakdown({ productId, reviewCount }) {
  const curSortSelected = useSelector((state) => state.sortItems.sortSelection);
  const { data, error, isLoading } = useGetReviewMetadataQuery(productId);
  const { data: reviewData, isLoading: reviewLoading } = useGetAllReviewsByProductIdQuery({ reviewCount, productId, curSortSelected });
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
    if (e.target.innerText === '5 Stars') {
      !starFilter.fiveStar ? setActiveFilters([...activeFilters, e.target.innerText]) : removeActiveFilter(e.target.innerText);
      setStarFilter({ ...starFilter, fiveStar: !starFilter.fiveStar });
    }
    if (e.target.innerText === '4 Stars') {
      !starFilter.fourStar ? setActiveFilters([...activeFilters, e.target.innerText]) : removeActiveFilter(e.target.innerText);
      setStarFilter({ ...starFilter, fourStar: !starFilter.fourStar });
    }
    if (e.target.innerText === '3 Stars') {
      !starFilter.threeStar ? setActiveFilters([...activeFilters, e.target.innerText]) : removeActiveFilter(e.target.innerText);
      setStarFilter({ ...starFilter, threeStar: !starFilter.threeStar });
    }
    if (e.target.innerText === '2 Stars') {
      !starFilter.twoStar ? setActiveFilters([...activeFilters, e.target.innerText]) : removeActiveFilter(e.target.innerText);
      setStarFilter({ ...starFilter, twoStar: !starFilter.twoStar });
    }
    if (e.target.innerText === '1 Stars') {
      !starFilter.oneStar ? setActiveFilters([...activeFilters, e.target.innerText]) : removeActiveFilter(e.target.innerText);
      setStarFilter({ ...starFilter, oneStar: !starFilter.oneStar });
    }
  };

  // check if any star in starFilter is true.
  const resetButton = (Object.values(starFilter).includes(true));

  if (error) {
    return <div className={styles.no_product}><ErrorMessage /></div>;
  }

  if (isLoading || reviewLoading) {
    return <div className={styles.no_proudct}><LoadingSpinner /></div>;
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
        <div className={styles.rating_subText}>
          <div className={styles.rating_alignment}>
            <p className={styles.rating_text}>
              {Math.round(avgRating * 10) / 10}
            </p>
            <p className={styles.duck_feet}>
              <RatingToDuckFeet rating={avgRating} />
            </p>
          </div>
          {numOfReviews}
          {' '}
          total reviews
          <br />
          {recommendedPercentage()}
          {' '}
          % of customers recommend this product.
        </div>
        <div>
          <div className={styles.rating_bar_layout}>
            <Button
              className={styles.btn}
              onClick={(e) => {
                handleStarFilter(e);
                dispatch(setFilterByStar(5));
              }}
            >
              5 Stars
            </Button>
            <RatingBarFeature fillerPercentage={fiveStarReviewPercentage} />
            {`(${data.ratings[5]})`}
          </div>
          <div className={styles.rating_bar_layout}>
            <Button
              className={styles.btn}
              onClick={(e) => {
                handleStarFilter(e);
                dispatch(setFilterByStar(4));
              }}
            >
              4 Stars
            </Button>
            <RatingBarFeature fillerPercentage={fourStarReviewsPercentage} />
            {`(${data.ratings[4]})`}
          </div>
          <div className={styles.rating_bar_layout}>
            <Button
              className={styles.btn}
              onClick={(e) => {
                handleStarFilter(e);
                dispatch(setFilterByStar(3));
              }}
            >
              3 Stars
            </Button>
            <RatingBarFeature fillerPercentage={threeStarReviewsPercentage} />
            {`(${data.ratings[3]})`}
          </div>
          <div className={styles.rating_bar_layout}>
            <Button
              className={styles.btn}
              onClick={(e) => {
                handleStarFilter(e);
                dispatch(setFilterByStar(2));
              }}
            >
              2 Stars
            </Button>
            <RatingBarFeature fillerPercentage={twoStarReviewsPercentage} />
            {`(${data.ratings[2]})`}
          </div>
          <div className={styles.rating_bar_layout}>
            <Button
              className={styles.btn}
              onClick={(e) => {
                handleStarFilter(e);
                dispatch(setFilterByStar(1));
              }}
            >
              1 Stars
            </Button>
            <RatingBarFeature fillerPercentage={oneStarReviewsPercentage} />
            {`(${data.ratings[1]})`}
          </div>
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
                <div className={styles.reset_subText}>
                  {activeFilters.map((filter) => (
                    <div>
                      {`${filter}, `}
                    </div>
                  ))}
                </div>
              </>
            )}
        </div>
      </div>
    );
  }
}

RatingBreakdown.propTypes = {
  productId: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
};
