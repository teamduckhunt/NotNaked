/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable arrow-parens */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
// /* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line */

import React, { useState } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import PropTypes from 'prop-types';
import styles from './AnswerCard.module.css';
import {
  useAddAnswerHelpfulMutation, useReportAnswerMutation,
} from '../../../../services/questions';
import ImageModal from '../../QAModals/Image.jsx';

export default function AnswerCard({ answer }) {
  const [addHelpful] = useAddAnswerHelpfulMutation();
  const [reportAnswer] = useReportAnswerMutation();

  const [disableYes, setDisableYes] = useState(false);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(answer.date).toLocaleDateString([], dateOptions);
  const [toggleModal, setToggleModal] = useState(false);
  const [image, setImage] = useState('');

  const handleModalToggle = (photo) => {
    setToggleModal(!toggleModal);
    setImage(photo);
  };

  return (
    <div>
      {toggleModal && (
        <ImageModal
          handleModalToggle={handleModalToggle}
          image={image}
        />
      )}
      <br />
      <p className={styles.body}>
        {answer.body}
      </p>
      <br />
      {answer.photos.length > 0
        // eslint-disable-next-line max-len
        && answer.photos.map(photo => <Image key={photo.id} onClick={() => handleModalToggle(photo.url)} className={styles.photo} src={photo.url} alt={answer.answerer_name} />)}
      <br />
      <div className={styles.info} id="info">
        <p>
          by {answer.answerer_name.toLowerCase() === 'seller' && <strong>{answer.answerer_name}</strong>}
          {answer.answerer_name.toLowerCase() !== 'seller' && `${answer.answerer_name}`},
          &nbsp;&nbsp;{date}
        </p>
        <p className={styles.details}>
          Helpful?&nbsp;
          <button
            className={styles.yes}
            onClick={() => {
              addHelpful(answer.answer_id);
              setDisableYes(true);
            }}
            type="button"
            disabled={disableYes}
          >
            <u>Yes</u> ({answer.helpfulness})
          </button>
        </p>
        <p className={styles.details}>
          <u onClick={() => reportAnswer(answer.answer_id)}>Report</u>
        </p>
      </div>
    </div>
  );
}

AnswerCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  answer: PropTypes.object.isRequired,
};
