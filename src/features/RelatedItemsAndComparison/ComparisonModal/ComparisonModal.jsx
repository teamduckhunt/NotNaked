/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../UI/Card.jsx';
import Button from '../../UI/Button.jsx';
import styles from './ComparisonModal.module.css';

export default function ComparisonModal({ onClick }) {
  return (
    <>
      <div className={styles.backdrop} onClick={() => setOpenModal(false)} />, document.getElementById('backdrop')}/>
      <Card className={styles.modal}>
        <h3>Comparison Modal Here based on condition</h3>
        <Button type="button" onClick={() => onClick(false)}>
          X
        </Button>
      </Card>
    </>
  );
}

ComparisonModal.propTypes = {
  onClick: PropTypes.func.isRequired,
};
