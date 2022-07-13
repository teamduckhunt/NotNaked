/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Card from '../../UI/Card.jsx';
import Button from '../../UI/Button.jsx';
import styles from './ComparisonModal.module.css';

export default function ComparisonModal({ handleModalToggle}) {
  return (
    <>
      {createPortal(<div className={styles.backdrop} />, document.getElementById('backdrop'))}
      <Card className={styles.modal}>
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
      </Card>
    </>
  );
}

ComparisonModal.propTypes = {
  handleModalToggle: PropTypes.func.isRequired,
};
