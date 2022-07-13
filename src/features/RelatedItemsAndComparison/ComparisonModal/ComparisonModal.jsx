/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../UI/Card.jsx';
import styles from './ComparisonModal.module.css';

export default function ComparisonModal({ onClick }) {
  const tempModalStyles = {
    backgroundColor: 'pink',
    margin: '0 auto',
    width: '250px',
  };

  return (
    <Card className={styles.modal} styles={tempModalStyles}>
      <h3>Comparison Modal Here based on condition</h3>
      <button type="button" onClick={() => onClick(false)}>
        X
      </button>
    </Card>
  );
}

ComparisonModal.propTypes = {
  onClick: PropTypes.func.isRequired,
};
