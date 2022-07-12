/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import QuestionCard from './QuestionCard/QuestionCard.jsx';
import { useAllQuestionsQuery } from '../../../services/questions';

export default function QuestionsList({ currentViewItemId }) {
  const { data, error, isLoading } = useAllQuestionsQuery(currentViewItemId);

  if (error) {
    return <>Oh no, there was an error</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  if (data) {
    return (
      <>
        <p>My QuestionList!!!</p>
        {/* <QuestionCard /> */}
      </>
    );
  }
}

QuestionsList.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
