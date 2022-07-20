/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../UI/Button.jsx';
import { useAddHelpfulCountMutation, useReportReviewMutation } from '../../../../services/reviews.js';
import RatingToDuckFeet from '../../../../helpers/RatingToDuckFeet.jsx';
import ImageModal from './ImageModal.jsx';
import checkMark from '../../../../../assets/checkMark.png';
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
  // console.log('reviewrating', review.rating);

  const handleModalToggle = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <div className={styles.reviewCard}>
      <div className={styles.rc_container}>
        <div className={styles.rc_duckRating}>
          <RatingToDuckFeet rating={Number(review.rating)} />
        </div>
        <div className={styles.rc_name_date}>
          {`${review.reviewer_name}, ${new Date(review.date).toLocaleDateString([], dateOptions)}`}
        </div>
      </div>
      <div>
        <p className={styles.rc_text}>{review.summary}</p>
        <div className={styles.rc_body}>
          {determineBodyLength()}
        </div>
      </div>
      <div className={styles.rc_photo_container}>
        {review.photos.length > 0 && review.photos.map((photo) => (
          <div key={photo.id} className={styles.rc_photo} role="button" tabIndex={0} onClick={handleModalToggle}>
            {toggleModal && (
              <ImageModal handleModalToggle={handleModalToggle} image={photo.url} />
            )}
            <img src={photo.url} key={photo.id} className={styles.img} alt={review.reviwer_name} />
          </div>
        ))}
      </div>

      {/* conditional check for if prop is recommended */}
      {review.recommend && (
        <div className={styles.rc_recommend}>
          <img className={styles.checkMark} src={checkMark} alt="check mark" />
          I Recommend this Product
        </div>
      )}
      {review.response !== null && (
        <div className={styles.rc_response}>
          Response:
          <p className={styles.rc_response_body}>{review.response}</p>
        </div>
      )}
      <div className={styles.rc_helpfulness}>
        Helpful?
        <Button
          onClick={() => {
            incrementHelpfulCount(review.review_id);
            setDisableYesButton(true);
          }}
          className={styles.rc_yes_btn}
          disabled={disableYesButton}
        >
          Yes
        </Button>
        {`(${review.helpfulness})`}
        <div className={styles.rc_report_block}>
          <Button
            onClick={() => reportReview(review.review_id)}
            className={styles.rc_report_btn}
          >
            Report
          </Button>
        </div>
      </div>
    </div>
  );
}

ReviewCard.propTypes = {
  review: PropTypes.shape({ subProp: PropTypes.string }).isRequired,
};
