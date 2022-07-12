import React from 'react';
import PropTypes from 'prop-types';
// import QuestionList from './QuestionsList/QuestionsList';

export default function QuestionsAndAnswers({ currentViewItemId }) {
  return (
    <p>
      {/* <QuestionList currentViewItemId={currentViewItemId}/> */}
      This work? {currentViewItemId}
    </p>
  );
}

QuestionsAndAnswers.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
