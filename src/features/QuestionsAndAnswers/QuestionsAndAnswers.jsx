/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import QuestionList from './QuestionsList/QuestionsList.jsx';

export default function QuestionsAndAnswers({ currentViewItemId }) {
  return (
    <div id="QA">
      <QuestionList currentViewItemId={currentViewItemId} />
    </div>
  );
}

QuestionsAndAnswers.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
