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

import React from 'react';
import PropTypes from 'prop-types';
import styles from './AnswerCard.module.css';
import {
  useAddAnswerHelpfulMutation, useReportAnswerMutation,
} from '../../../../services/questions';

export default function AnswerCard({ a }) {
  const [addHelpful] = useAddAnswerHelpfulMutation();
  const [reportAnswer] = useReportAnswerMutation();

  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(a.date).toLocaleDateString([], dateOptions);

  return (
    <div>
      <br />
      <p className={styles.body}>
        {a.body}
      </p>
      <br />
      {a.photos.length > 0
        && a.photos.map(photo => <img className={styles.body} src={photo} alt={a.answerer_name} />)}
      <br />
      <div className={styles.info} id="info">
        <p>
          by {a.answerer_name.toLowerCase() === 'seller' && <strong>{a.answerer_name}</strong>}
          {a.answerer_name.toLowerCase() !== 'seller' && `${a.answerer_name}`},
          &nbsp;&nbsp;{date}
        </p>
        <p className={styles.details}>
          Helpful?&nbsp;&nbsp;
          <u onClick={() => addHelpful(a.answer_id)}>Yes</u> ({a.helpfulness})
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
