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

  // check if any item in starFilter is true, if so render the button.
  const resetButton = (Object.values(starFilter).includes(true));

  if (error) {
    return <>Oh no, there was an error loading rating breakdown</>;
  }

  if (isLoading || reviewLoading) {
    return <>Loading...</>;
  }

  if (data || reviewData) {
    // console.log('data', data);
    // console.log('reviewData', reviewData);
    const avgRating = getAverageRating(data);
    const numOfReviews = reviewData.results.length;
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

      </div>
    );
  }
}

ReviewList.propTypes = {
  productId: PropTypes.number.isRequired,
};

// Strategy

// product rating from helpers/getAverageRating DONE
// iterate over the results of current product, grab the ratings and push to a separate array.
// so maybe map that return an array, pass that array of ratings to getAverageRating. (return to one decimal point) DONE

// number of reviews based on product id DONE

// create div block, with 5 Star Buttons, need to add some toggle on : off event listener
// when toggled on, the review list should re-render to only the indicated star.

// add a bar count feature to each button.

// conditional if any star buttons are clicked on, then message at bottom should populate.
// Message should have button, to reset all toggled on buttons.

// add div, w/ percentage of reviews that recommend product.
