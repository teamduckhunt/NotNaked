/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
// /* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuestionCard.module.css';

export default function AnswerCard({ a }) {
  return (
    <div id="answer">
      <p>
        <strong>A: </strong>
        {a.body}
      </p>
      <p>by {a.answerer_name}</p>
      <p>Helpful? Yes ({a.helpfulness})</p>
      <p>Report</p>
    </div>
  );
}

AnswerCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  a: PropTypes.object.isRequired,
};
