/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
// /* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line */

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {
  useAnswerListQuery, useAddAnswerMutation,
  useAddQuestionHelpfulMutation, useReportQuestionMutation,
} from '../../../../services/questions';
import { useProductInformationByIdQuery } from '../../../../services/products';
import AnswerCard from './AnswerCard.jsx';
import styles from './QuestionCard.module.css';
import Button from '../../../UI/Button.jsx';
import AddAnswer from '../../QAModals/AddQA.jsx';

export default function QuestionCard({ q, p }) {
  const { data, error, isLoading } = useAnswerListQuery(q.question_id);
  const { data: product } = useProductInformationByIdQuery(p);
  const [addHelpful] = useAddQuestionHelpfulMutation();
  const [reportQuestion] = useReportQuestionMutation();

  const [numberOfAnswers, setNumberOfAnswers] = useState(2);
  const [disableMoreAnswersButton, setDisableMoreAnswersButton] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  const handleModalToggle = () => {
    setToggleModal(!toggleModal);
  };

  if (error) {
    return <>Oh no, there was an error</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  if (data) {
    const answers = data.results;
    return (
      <>
        {toggleModal && (
          <AddAnswer
            handleModalToggle={handleModalToggle}
            questionId={q.question_id}
            questionBody={q.question_body}
            product={product.name}
          />
        )}
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
            <u onClick={() => handleModalToggle()}>Add Answer</u>
          </p>
        </div>
        <div id="answer">
          <p>
            {answers.length === 0
            && <strong>This question has no answers :(</strong>}
            {answers.length > 0
            && <strong>A: </strong>}
            {answers.slice(0, numberOfAnswers).map((a) => <AnswerCard key={a.answer_id} a={a} />)}
          </p>
          {numberOfAnswers < answers.length
        && (
          <Button
            onClick={() => {
              setNumberOfAnswers(numberOfAnswers + 2);
            }}
          >
            LOAD MORE ANSWERS
          </Button>
        )}
          {(numberOfAnswers > answers.length && answers.length >= 2)
        && (
          <Button
            onClick={() => {
              setNumberOfAnswers(2);
            }}
          >
            COLLAPSE ANSWERS
          </Button>
        )}
        </div>
      </>
    );
  }
}

QuestionCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  q: PropTypes.object.isRequired,
  p: PropTypes.number.isRequired,
};
