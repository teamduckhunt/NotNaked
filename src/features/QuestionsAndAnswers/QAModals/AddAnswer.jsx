/* eslint-disable react/self-closing-comp */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAddAnswerMutation } from '../../../services/questions';
import Button from '../../UI/Button.jsx';
import Modal from '../../UI/Modal.jsx';

export default function AddAnswer({ questionId, handleModalToggle }) {
  const [addAnswer] = useAddAnswerMutation();
  const [answerBody, setAnswerBody] = useState("");
  const [answerUser, setAnswerUser] = useState("");
  const [answerEmail, setAnswerEmail] = useState("");

  return (
    <Modal>
      <h3>
        Submit Your Answer
      </h3>
      <h5>
        Product Name : Question Body
      </h5>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addAnswer(questionId, {
            body: answerBody, name: answerUser, email: answerEmail, photos: [],
          })
            .then((result) => console.log(result));
          handleModalToggle();
        }}
        type="submit"
      >
        <input onChange={(e) => {setAnswerUser(e.target.value); console.log(answerUser);}} placeholder="Example: jack543!" required />
        <input onChange={(e) => {setAnswerEmail(e.target.value); console.log(answerEmail);}} placeholder="Example: jack@email.com" required />
        <br />
        <textarea onChange={(e) => {setAnswerBody(e.target.value); console.log(answerBody);}} rows="5" cols="60" placeholder="Answer..." required />
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
};
