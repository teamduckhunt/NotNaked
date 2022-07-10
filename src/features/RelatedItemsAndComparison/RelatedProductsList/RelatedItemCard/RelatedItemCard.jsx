/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
// /* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line */

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useProductStylesQuery, useProductInformationByIdQuery } from '../../../../services/products';
import Card from '../../../UI/Card.jsx';
import styles from './RelatedItemCard.module.css';

function TempModal({ onClick }) {
  const tempModalStyles = {
    backgroundColor: 'pink',
    margin: '0 auto',
    width: '250px',
  };

  return (
    <Card className={styles.modal} styles={tempModalStyles}>
      <h3>Comparison Modal Here based on condition</h3>
      <button type="button" onClick={() => onClick(false)}>X</button>
    </Card>
  );
}

export default function RelatedItemCard({ productId }) {
  const [openModal, setOpenModal] = useState(false);
  const {
    data: product,
    error: productInfoError,
    isLoading: isProductLoading,
  } = useProductInformationByIdQuery(productId);

  const image = 'https://picsum.photos/200';

  if (productInfoError) {
    return <>Oh no, there was an error</>;
  }

  if (isProductLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      {openModal && createPortal(<div className={styles.backdrop} onClick={() => setOpenModal(false)}/>, document.getElementById('backdrop'))}
      {openModal && createPortal(<TempModal onClick={setOpenModal} />, document.getElementById('modal'))}
      <Card className={styles.product_card} onClick={() => setOpenModal(true)}>
        <header className={styles.product_card_header}>
          <img className={styles.product_img} src={image} alt="random" />
          <div className={styles.product_star}> x </div>
        </header>
        <footer className={styles.product_card_body}>
          <p>{product.category}</p>
          <p>{product.name}</p>
          {/* TODO: default price needs to change with sales and also styles */}
          <p>${product.default_price}</p>
          <p>**** duck rating here</p>
        </footer>
      </Card>
    </>
  );
}

RelatedItemCard.propTypes = {
  productId: PropTypes.number.isRequired,
};

// const {
//   data: stylesData,
//   error: stylesError,
//   isLoading: isStylesLoading
// } = useProductStylesQuery(productId);
