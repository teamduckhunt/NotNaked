/* eslint-disable react/self-closing-comp */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button.jsx';
import Modal from '../../UI/Modal.jsx';
import styles from './AddQA.module.css';

export default function Image({ image, handleModalToggle }) {
  return (
    <Modal className={styles.modal}>
      <img className={styles.image} src={image} alt="answer" />
      <Button onClick={() => handleModalToggle()} className={styles.imageClose}>
        Close
      </Button>
    </Modal>
  );
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
  handleModalToggle: PropTypes.func.isRequired,
};
