import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button.jsx';
import Modal from '../../UI/Modal.jsx';
import { useAddAReviewMutation } from '../../../services/reviews.js';


export default function AddReviewModal({ handleModalToggle }) {
  return (
    <Modal>
      <form>
        <h1>W</h1>
        <Button type="submit">
          Submit
        </Button>
      </form>
      <Button type="button" onClick={() => handleModalToggle()}>
        X
      </Button>
    </Modal>
  );
}

AddReviewModal.propTypes = {
  handleModalToggle: PropTypes.func.isRequired,
};
