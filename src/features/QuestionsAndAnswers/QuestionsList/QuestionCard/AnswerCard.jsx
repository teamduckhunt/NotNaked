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
import PropTypes from 'prop-types';
import styles from './AnswerCard.module.css';
import {
  useAddAnswerHelpfulMutation, useReportAnswerMutation,
} from '../../../../services/questions';
import Image from '../../QAModals/Image.jsx';

export default function AnswerCard({ a }) {
  const [addHelpful] = useAddAnswerHelpfulMutation();
  const [reportAnswer] = useReportAnswerMutation();

  const [disableYes, setDisableYes] = useState(false);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(a.date).toLocaleDateString([], dateOptions);
  const [toggleModal, setToggleModal] = useState(false);
  const [image, setImage] = useState('');

  const handleModalToggle = (photo) => {
    setToggleModal(!toggleModal);
    setImage(photo);
  };

  return (
    <div>
      {toggleModal && (
        <Image
          handleModalToggle={handleModalToggle}
          image={image}
        />
      )}
      <br />
      <p className={styles.body}>
        {a.body}
      </p>
      <br />
      {a.photos.length > 0
        // eslint-disable-next-line max-len
        && a.photos.map(p => <img key={p.id} onClick={() => handleModalToggle(p.url)} className={styles.photo} src={p.url} alt={a.answerer_name} />)}
      <br />
      <div className={styles.info} id="info">
        <p>
          by {a.answerer_name.toLowerCase() === 'seller' && <strong>{a.answerer_name}</strong>}
          {a.answerer_name.toLowerCase() !== 'seller' && `${a.answerer_name}`},
          &nbsp;&nbsp;{date}
        </p>
        <p className={styles.details}>
          Helpful?&nbsp;
          <button
            className={styles.yes}
            onClick={() => {
              addHelpful(a.answer_id);
              setDisableYes(true);
            }}
            type="button"
            disabled={disableYes}
          >
            <u>Yes</u> ({a.helpfulness})
          </button>
        </p>
        <p className={styles.details}>
          <u onClick={() => reportAnswer(a.answer_id)}>Report</u>
        </p>
      </div>
    </div>
  );
}

AnswerCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  a: PropTypes.object.isRequired,
};
