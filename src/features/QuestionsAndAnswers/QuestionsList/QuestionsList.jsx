/* eslint-disable react/self-closing-comp */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import QuestionCard from './QuestionCard/QuestionCard.jsx';
import { useAllQuestionsQuery } from '../../../services/questions';
import { useProductInformationByIdQuery } from '../../../services/products';
import styles from './QuestionsList.module.css';
import Button from '../../UI/Button.jsx';
import AddQA from '../QAModals/AddQA.jsx';
import LoadingSpinner from '../../UI/LoadingSpinner.jsx';
import ErrorMessage from '../../UI/ErrorMessage.jsx';

export default function QuestionsList({ currentViewItemId }) {
  const { data, error, isLoading } = useAllQuestionsQuery(currentViewItemId);
  const { data: product } = useProductInformationByIdQuery(currentViewItemId);

  let select = useSelector((state) => state.questionsAndAnswers.search).toLowerCase();

  if (select.length < 3) {
    select = '';
  }

  const [numberOfQuestions, setNumberOfQuestions] = useState(2);
  const [disableMoreQuestionsButton, setDisableMoreQuestionsButton] = useState(false);

  const [toggleModal, setToggleModal] = useState(false);

  const handleModalToggle = () => {
    setToggleModal(!toggleModal);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const questionLength = () => {
    const temp = data?.results.filter((item) => item.question_body.includes(select)).length;
    if (numberOfQuestions >= temp || temp <= 2) {
      setDisableMoreQuestionsButton(true);
    } else {
      setDisableMoreQuestionsButton(false);
    }
  };

  useEffect(() => {
    questionLength();
  }, [numberOfQuestions, questionLength]);

  if (error) {
    return <div className={styles.no_product}><ErrorMessage /></div>
  }

  if (isLoading) {
    return <div className={styles.no_product}><LoadingSpinner /></div>
  }

  if (data) {
    const questions = data.results.filter((item) => item.question_body.includes(select));
    return (
      <>
        <div className={styles.list} id="list">
          {toggleModal && (
            <AddQA
              handleModalToggle={handleModalToggle}
              ID={currentViewItemId}
              product={product.name}
              />
              )}
          {questions.length === 0 &&
            <>
              <br />
              <strong>NO QUESTIONS FOUND :(</strong>
              <br />
            </>
          }
          {questions.slice(0, numberOfQuestions)
            .map((question) => <QuestionCard key={question.question_id} question={question} productID={currentViewItemId} />)}
          <br></br>
        </div>
        {!disableMoreQuestionsButton
        && (
          <Button
            className={styles.moreButton}
            onClick={() => {
              setNumberOfQuestions(numberOfQuestions + 2);
            }}
          >
            MORE ANSWERED QUESTIONS
          </Button>
        )}
        <Button
          className={styles.addButton}
          onClick={() => handleModalToggle()}
        >
          ADD A QUESTION&nbsp;
          <strong>+</strong>
        </Button>
      </>
    );
  }
}

QuestionsList.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
