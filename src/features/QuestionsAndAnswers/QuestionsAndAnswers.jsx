/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import QuestionList from './QuestionsList/QuestionsList.jsx';

export default function QuestionsAndAnswers({ currentViewItemId }) {
  return (
    <p>
      <QuestionList currentViewItemId={currentViewItemId} />
    </p>
  );
}

QuestionsAndAnswers.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
