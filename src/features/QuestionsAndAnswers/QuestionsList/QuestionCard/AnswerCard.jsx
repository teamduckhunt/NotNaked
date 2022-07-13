/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
// /* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './AnswerCard.module.css';

export default function AnswerCard({ a }) {
  return (
    <>
      <div id="answer">
        <p>
          <strong>A: </strong>
          {a.body}
        </p>
      </div>
      <div className={styles.info} id="info">
        <p>
          by {a.answerer_name}
        </p>
        <p className={styles.details}>
          Helpful?&nbsp; <u>Yes</u> ({a.helpfulness})
        </p>
        <p className={styles.details}>
          <u>Report</u>
        </p>
      </div>
    </>
  );
}

AnswerCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  a: PropTypes.object.isRequired,
};
