/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../UI/Button.jsx';
import { useAddHelpfulCountMutation, useReportReviewMutation } from '../../../../services/reviews.js';
import RatingToDuckFeet from '../../../../helpers/RatingToDuckFeet.jsx';
import ImageModal from './ImageModal.jsx';
import styles from './ReviewCard.module.css';

export default function ReviewCard({ review }) {
  const [showBody, setShowBody] = useState(false);
  const [disableYesButton, setDisableYesButton] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  const [incrementHelpfulCount] = useAddHelpfulCountMutation();
  const [reportReview] = useReportReviewMutation();

  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  const determineBodyLength = () => {
    if (review.body.length <= 250) {
      return (
        <p>{review.body}</p>
      );
    }
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
        <p>
          {' '}
          {toShow}
          {' '}
        </p>
        <Button onClick={() => { setShowBody(true); }}>Show More...</Button>
      </div>
    );
  };

  const handleModalToggle = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <>
      <div>
        <RatingToDuckFeet rating={review.rating} />
      </div>
      <div>
        {`${review.reviewer_name}, ${new Date(review.date).toLocaleDateString([], dateOptions)}`}
      </div>
      <div>
        <p className={styles.boldText}>{review.summary}</p>
        <div>
          {determineBodyLength()}
        </div>
      </div>
      <div>
        {review.photos.map((photo) => (
          <div key={photo.id} role="button" tabIndex={0} onClick={handleModalToggle}>
            {toggleModal && (
            <ImageModal handleModalToggle={handleModalToggle} image={photo.url} />
            )}
            <img src={photo.url} key={photo.id} alt={review.reviwer_name} height={100} />
          </div>
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
        <Button
          onClick={() => {
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

ReviewCard.propTypes = {
  review: PropTypes.shape({ subProp: PropTypes.string }).isRequired,
};
