/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import QuestionCard from './QuestionCard/QuestionCard.jsx';
import { useAllQuestionsQuery } from '../../../services/questions';
import styles from './QuestionsList.module.css';

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
      <div className={styles.list} id="list">
        {data.results.map((q) => <QuestionCard key={q.question_id} q={q} />)}
      </div>
    );
  }
}

QuestionsList.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
