/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import QuestionList from './QuestionsList/QuestionsList.jsx';
import styles from './QuestionsAndAnswers.module.css';

export default function QuestionsAndAnswers({ currentViewItemId }) {
  return (
    <div className={styles.qa} id="QA">
      <QuestionList currentViewItemId={currentViewItemId} />
    </div>
  );
}

QuestionsAndAnswers.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
