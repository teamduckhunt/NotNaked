/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
// /* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line */

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useAnswerListQuery } from '../../../../services/questions';
import AnswerCard from './AnswerCard.jsx';
import styles from './QuestionCard.module.css';

export default function QuestionCard({ q }) {
  const { data, error, isLoading } = useAnswerListQuery(q.question_id);

  if (error) {
    return <>Oh no, there was an error</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  if (data) {
    return (
      <>
        <div className={styles.question} id="question">
          <p>
            <strong>
              Q: {q.question_body}
            </strong>
          </p>
          <p className={styles.helpful}>
            Helpful?&nbsp; <u>Yes</u> ({q.question_helpfulness})
          </p>
          <p className={styles.add}>
            <u>Add Answer</u>
          </p>
        </div>
        {data.results.map((a) => <AnswerCard key={a.answer_id} a={a} />)}
      </>
    );
  }
}

QuestionCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  q: PropTypes.object.isRequired,
};
