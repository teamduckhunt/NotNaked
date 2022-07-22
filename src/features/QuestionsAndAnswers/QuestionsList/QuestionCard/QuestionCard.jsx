/* eslint-disable max-len */
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
import AddQA from '../../QAModals/AddQA.jsx';

export default function QuestionCard({ question, productID }) {
  const { data, error, isLoading } = useAnswerListQuery(question.question_id);
  const { data: product } = useProductInformationByIdQuery(productID);
  const [addHelpful] = useAddQuestionHelpfulMutation();
  const [reportQuestion] = useReportQuestionMutation();

  const [numberOfAnswers, setNumberOfAnswers] = useState(2);
  const [disableMoreAnswersButton, setDisableMoreAnswersButton] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [disableYes, setDisableYes] = useState(false);

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
          <AddQA
            handleModalToggle={handleModalToggle}
            ID={question.question_id}
            questionBody={question.question_body}
            product={product.name}
          />
        )}
        <br />
        <div className={styles.question} id="question">
          <p>
            Q: {question.question_body}
          </p>
          <p className={styles.helpful}>
            Helpful?&nbsp;
            <button
              className={styles.yes}
              onClick={() => {
                addHelpful(question.question_id);
                setDisableYes(true);
              }}
              disabled={disableYes}
              type="button"
            >
              <u>
                Yes
              </u> ({question.question_helpfulness})
            </button>
          </p>
          <p className={styles.add}>
            <u onClick={() => handleModalToggle()}>Add Answer</u>
          </p>
        </div>
        <br />
        <div className={styles.answerHeader} id="answer">
          {answers.length === 0
          && <u>This question has no answers :(</u>}
          {answers.length > 0
          && <u>Answers</u>}
          {answers.slice(0, numberOfAnswers).map((answer) => <AnswerCard className={styles.answer} key={answer.answer_id} answer={answer} />)}
          <br />
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
          {(numberOfAnswers >= answers.length && answers.length > 2)
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
  question: PropTypes.object.isRequired,
  productID: PropTypes.number.isRequired,
};
