/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button.jsx';
import Modal from '../../UI/Modal.jsx';

export default function ComparisonModal({ handleModalToggle }) {
  return (
    <Modal>
        <span>COMPARING</span>
        <div>
          <span>Product #1</span>
          <span>Product #2</span>
        </div>
        <div>
          <div>Product #1</div>
          <div>Characteristics</div>
          <div>Product #2</div>
        </div>
        <Button type="button" onClick={() => handleModalToggle()}>
          X
        </Button>
    </Modal>
  );
}

ComparisonModal.propTypes = {
  handleModalToggle: PropTypes.func.isRequired,
};
