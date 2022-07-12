/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
// /* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line */

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Link,

} from "react-router-dom";
import PropTypes from 'prop-types';
import {
  useProductStylesQuery,
  useProductInformationByIdQuery,
} from '../../../../services/products';
import Card from '../../../UI/Card.jsx';
import styles from './RelatedItemCard.module.css';
import ComparisonModal from '../../ComparisonModal/ComparisonModal.jsx';

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
      {openModal &&
        createPortal(
          <div
            className={styles.backdrop}
            onClick={() => setOpenModal(false)}
          />,
          document.getElementById('backdrop')
        )}
      {openModal &&
        createPortal(
          <ComparisonModal onClick={setOpenModal} />,
          document.getElementById('modal'),
        )}
      <Card className={styles.product_card}>
        <header className={styles.product_card_header}>
          <Link to={`/product/${productId}`}>
            <img className={styles.product_img} src={image} alt='random' />
          </Link>
          <div
            className={styles.product_action_button}
            onClick={() => setOpenModal(true)}
          >
            {' '}
            *{' '}
          </div>
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
