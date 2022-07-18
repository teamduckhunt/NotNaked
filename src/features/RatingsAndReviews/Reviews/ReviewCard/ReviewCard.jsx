/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../../UI/Button.jsx';
import { useAddHelpfulCountMutation, useReportReviewMutation } from '../../../../services/reviews.js';

export default function ReviewCard({ review }) {
  // const dispatch = useDispatch();

  const [showBody, setShowBody] = useState(false);
  const [disableYesButton, setDisableYesButton] = useState(false);

  const [incrementHelpfulCount] = useAddHelpfulCountMutation();
  const [reportReview] = useReportReviewMutation();

  const image = 'https://picsum.photos/200';

  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  const { bodyContent } = review.body.length;
  const determineBodyLength = () => {
    if (showBody) {
      return (
        <div>
          <p>{review.body}</p>
          <Button onClick={() => { setShowBody(false); }}>Show Less...</Button>
        </div>
      );
    }
    const toShow = `${review.body.substring(0, 250)}...`;
    return (
      <div>
        <p> {toShow} </p>
        <Button onClick={() => { setShowBody(true); }}>Show More...</Button>
      </div>
    );
  };

  return (
    <>
      {/* ***** Duck rating here */}
      <p>{review.rating}</p>
      <div>
        {`${review.reviewer_name}, ${new Date(review.date).toLocaleDateString([], dateOptions)}`}
      </div>
      <div>
        <p>{review.summary}</p>
        <div>
          {determineBodyLength()}
        </div>
      </div>
      <div>
        {review.photos.map((photo) => (
          <img src={photo.url} key={photo.id} alt={review.reviwer_name} height={100} />
        ))}
      </div>

      {/* conditional check for if prop is recommended */}
      {review.recommend && <div> ✅ I Recommend this Product</div>}
      {review.response !== null && (
        <div>
          Response:
          <p>{review.response}</p>
        </div>
      )}
      <div>
        Helpful?
        <Button onClick={() => {
          incrementHelpfulCount(review.review_id);
          setDisableYesButton(true);
        }}
          disabled={disableYesButton}
        >
          Yes
        </Button>
        {`(${review.helpfulness})`}
        <Button onClick={() => reportReview(review.review_id)}>Report</Button>
      </div>
    </>
  );
}

// ReviewCard.propTypes = {
//   review: PropTypes.shape.isRequired,
// };

// NOTES :

// May need to use useState for the thumbnail images, will need a modal popup

// add star rating visual

// add conditional to check if email address is assocated with verified purchase.
// add 'verified purchase' infront of reviewer name.
