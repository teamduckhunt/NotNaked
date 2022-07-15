/* eslint-disable react/self-closing-comp */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAddAnswerMutation, useAddQuestionMutation } from '../../../services/questions';
import Button from '../../UI/Button.jsx';
import Modal from '../../UI/Modal.jsx';

export default function AddQA({
  ID, handleModalToggle, questionBody = undefined, product,
}) {
  const [addAnswer] = useAddAnswerMutation();
  const [addQuestion] = useAddQuestionMutation();
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Modal>
      {questionBody !== undefined
      && <h3>Submit Your Answer</h3>}
      {questionBody !== undefined
      && (
      <h4>
        {product}
        &nbsp;
        :&nbsp;&nbsp;
        {questionBody}
      </h4>
      )}
      {questionBody === undefined
      && <h3>Ask Your Question</h3>}
      {questionBody === undefined
      && (
      <h4>
        About the product&nbsp;
        {product}
      </h4>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formInfo = {
            ID,
            body,
            name,
            email,
          };
          if (questionBody !== undefined) {
            addAnswer(formInfo);
          } else {
            addQuestion(formInfo);
          }
          handleModalToggle();
        }}
        type="submit"
      >
        <field>Username: </field>
        <input onChange={(e) => setName(e.target.value)} placeholder="Example: jack543!" required />
        <p><small>For privacy reasons, do not use your full name or email address</small></p>
        <br />
        <field>Email: </field>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Example: jack@email.com" required />
        <p><small>For authentication reasons, you will not be emailed</small></p>
        <br />
        {questionBody !== undefined
      && <field>Answer</field>}
        {questionBody === undefined
      && <field>Question</field>}
        <br />
        <textarea onChange={(e) => setBody(e.target.value)} rows="5" cols="60" placeholder="Type Here" required />
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

AddQA.propTypes = {
  ID: PropTypes.number.isRequired,
  handleModalToggle: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  questionBody: PropTypes.string,
  product: PropTypes.string.isRequired,
};
