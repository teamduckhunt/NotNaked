/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
// /* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line */

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {
  useAnswerListQuery, useAddAnswerMutation,
  useAddQuestionHelpfulMutation, useReportQuestionMutation,
} from '../../../../services/questions';
import AnswerCard from './AnswerCard.jsx';
import styles from './QuestionCard.module.css';

export default function QuestionCard({ q }) {
  const { data, error, isLoading } = useAnswerListQuery(q.question_id);
  const [addHelpful] = useAddQuestionHelpfulMutation();
  const [reportQuestion] = useReportQuestionMutation();

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
            Helpful?&nbsp;&nbsp;
            <u onClick={() => addHelpful(q.question_id)}>Yes</u>
            &nbsp;({q.question_helpfulness})
          </p>
          <p className={styles.add}>
            <u>Add Answer</u>
          </p>
        </div>
        <div id="answer">
          <p>
            <strong>A: </strong>
            {data.results.map((a) => <AnswerCard key={a.answer_id} a={a} />)}
          </p>
        </div>
      </>
    );
  }
}

QuestionCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  q: PropTypes.object.isRequired,
};
