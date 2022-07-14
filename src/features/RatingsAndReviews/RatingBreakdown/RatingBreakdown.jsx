/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useGetReviewMetadataQuery, useGetAllReviewsByProductIdQuery } from '../../../services/reviews.js';
import Button from '../../UI/Button.jsx';
import getAverageRating from '../../../helpers/getAverageRating/getAverageRating.js';

export default function ReviewList({ productId }) {
  const { data, error, isLoading } = useGetReviewMetadataQuery(productId);
  const { data: reviewData, isLoading: reviewLoading } = useGetAllReviewsByProductIdQuery(productId);

  const [starFilter, setStarFilter] = useState({
    fiveStar: false,
    fourStar: false,
    threeStar: false,
    twoStar: false,
    oneStar: false,
  });

  const handleStarFilter = (e) => {
    console.log('event', e.target.innerText);
    if (e.target.innerText === '5 Star') {
      setStarFilter({ starFilter, fiveStar: true });
    }
    if (e.target.innerText === '4 Star') {
      setStarFilter({ starFilter, fourStar: true });
    }
    if (e.target.innerText === '3 Star') {
      setStarFilter({ starFilter, threeStar: true });
    }
    if (e.target.innerText === '2 Star') {
      setStarFilter({ starFilter, twoStar: true });
    }
    if (e.target.innerText === '1 Star') {
      setStarFilter({ starFilter, oneStar: true });
    }
  };

  if (error) {
    return <>Oh no, there was an error loading rating breakdown</>;
  }

  if (isLoading || reviewLoading) {
    return <>Loading...</>;
  }

  if (data || reviewData) {
    console.log('data', data);
    console.log('reviewData', reviewData);
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
        </div>
        <div>
          <Button onClick={(e) => { handleStarFilter(e); }}>
            5 Star
          </Button>
          <Button onClick={(e) => { handleStarFilter(e); }}>
            4 Star
          </Button>
          <Button onClick={(e) => { handleStarFilter(e); }}>
            3 Star
          </Button>
          <Button onClick={(e) => { handleStarFilter(e); }}>
            2 Star
          </Button>
          <Button onClick={(e) => { handleStarFilter(e); }}>
            1 Star
          </Button>
        </div>

      </div>
    );
  }
}

ReviewList.propTypes = {
  productId: PropTypes.number.isRequired,
};

// Strategy

// product rating from helpers/getAverageRating
// iterate over the results of current product, grab the ratings and push to a separate array.
// so maybe map that return an array, pass that array of ratings to getAverageRating. (return to one decimal point)

// number of reviews based on product id

// create div block, with 5 Star Buttons, need to add some toggle on : off event listener
// when toggled on, the review list should re-render to only the indicated star.

  // add a bar count feature to each button.

// conditional if any star buttons are clicked on, then message at bottom should populate.
  // Message should have button, to reset all toggled on buttons.

// add div, w/ percentage of reviews that recommend product.
