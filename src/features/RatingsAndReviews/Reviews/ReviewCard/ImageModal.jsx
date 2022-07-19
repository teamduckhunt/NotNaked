import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../UI/Button.jsx';
import Modal from '../../../UI/Modal.jsx';
import styles from './ReviewCard.module.css';

export default function ImageModal({ handleModalToggle, image }) {
  return (
    <Modal className={styles.imageModal}>
      <img className={styles.image} src={image} alt="review" />
      <div className={styles.btn_modal}>
        <Button type="button" onClick={() => handleModalToggle()}>
          Close
        </Button>
      </div>
    </Modal>
  );
}

ImageModal.propTypes = {
  handleModalToggle: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};
