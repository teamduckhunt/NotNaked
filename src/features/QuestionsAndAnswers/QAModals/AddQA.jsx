/* eslint-disable react/self-closing-comp */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAddAnswerMutation } from '../../../services/questions';
import Button from '../../UI/Button.jsx';
import Modal from '../../UI/Modal.jsx';

export default function AddAnswer({
  questionId, handleModalToggle, questionBody, product,
}) {
  const [addAnswer] = useAddAnswerMutation();
  const [answerBody, setAnswerBody] = useState('');
  const [answerUser, setAnswerUser] = useState('');
  const [answerEmail, setAnswerEmail] = useState('');

  return (
    <Modal>
      <h3>
        Submit Your Answer
      </h3>
      <h4>
        {product}
        &nbsp;
        :&nbsp;&nbsp;
        {questionBody}
      </h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const answerInfo = {
            questionId,
            body: answerBody,
            name: answerUser,
            email: answerEmail,
          };
          addAnswer(answerInfo);
          handleModalToggle();
        }}
        type="submit"
      >
        <input onChange={(e) => setAnswerUser(e.target.value)} placeholder="Example: jack543!" required />
        <input onChange={(e) => setAnswerEmail(e.target.value)} placeholder="Example: jack@email.com" required />
        <br />
        <textarea onChange={(e) => setAnswerBody(e.target.value)} rows="5" cols="60" placeholder="Answer..." required />
        <br />
        <Button>
          Submit
        </Button>
      </form>
      <Button type="button" onClick={() => handleModalToggle()}>
        X
      </Button>
    </Modal>
  );
}

AddAnswer.propTypes = {
  questionId: PropTypes.number.isRequired,
  handleModalToggle: PropTypes.func.isRequired,
  questionBody: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
};
