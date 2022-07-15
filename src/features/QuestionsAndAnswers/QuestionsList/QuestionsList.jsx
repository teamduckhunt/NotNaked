/* eslint-disable react/self-closing-comp */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QuestionCard from './QuestionCard/QuestionCard.jsx';
import { useAllQuestionsQuery } from '../../../services/questions';
import { useProductInformationByIdQuery } from '../../../services/products';
import styles from './QuestionsList.module.css';
import Button from '../../UI/Button.jsx';
import AddQA from '../QAModals/AddQA.jsx';

export default function QuestionsList({ currentViewItemId }) {
  const { data, error, isLoading } = useAllQuestionsQuery(currentViewItemId);
  const { data: product } = useProductInformationByIdQuery(currentViewItemId);

  const [numberOfQuestions, setNumberOfQuestions] = useState(2);
  const [disableMoreQuestionsButton, setDisableMoreQuestionsButton] = useState(false);

  const [toggleModal, setToggleModal] = useState(false);

  const handleModalToggle = () => {
    setToggleModal(!toggleModal);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const questionLength = () => {
    if (data && (numberOfQuestions >= data.results.length || data.results.length <= 2)) {
      setDisableMoreQuestionsButton(true);
    }
  };

  useEffect(() => {
    questionLength();
  }, [numberOfQuestions, questionLength]);

  if (error) {
    return <>Oh no, there was an error</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  if (data) {
    const questions = data.results;
    return (
      <div className={styles.list} id="list">
        {toggleModal && (
          <AddQA
            handleModalToggle={handleModalToggle}
            ID={currentViewItemId}
            product={product.name}
          />
        )}
        {questions.slice(0, numberOfQuestions)
          .map((q) => <QuestionCard key={q.question_id} q={q} p={currentViewItemId} />)}
        <br></br>
        {!disableMoreQuestionsButton
        && (
          <Button
            onClick={() => {
              setNumberOfQuestions(numberOfQuestions + 2);
            }}
          >
            MORE ANSWERED QUESTIONS
          </Button>
        )}
        <Button onClick={() => handleModalToggle()}>
          ADD A QUESTION&nbsp;
          <strong>+</strong>
        </Button>
      </div>
    );
  }
}

QuestionsList.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
