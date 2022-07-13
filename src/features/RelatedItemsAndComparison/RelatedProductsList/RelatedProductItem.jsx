/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
// /* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line */

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useProductStylesQuery, useProductInformationByIdQuery } from '../../../services/products';
import ListItemCard from '../helpers/ListItemCard/ListItemCard.jsx';
import ComparisonModal from '../ComparisonModal/ComparisonModal.jsx';
import styles from './RelatedProductItem.module.css';

export default function RelatedProductItem({ productId }) {
  const [openModal, setOpenModal] = useState(false);
  const { data, error, isLoading } = useProductInformationByIdQuery(productId);

  const image = 'https://picsum.photos/200';

  const handleOnClick = () => {
    setOpenModal(true);
  };

  if (error) {
    return <>Oh no, there was an error</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      {openModal
      && createPortal(<div className={styles.backdrop} onClick={() => setOpenModal(false)} />, document.getElementById('backdrop'))}
      {openModal && createPortal(<ComparisonModal onClick={setOpenModal} />, document.getElementById('modal'))}
      <ListItemCard
        product={data}
        productId={productId}
        productImage={image}
        actionButtonIcon="⭐️"
        handleOnClick={handleOnClick}
      />
    </>
  );
}

RelatedProductItem.propTypes = {
  productId: PropTypes.number.isRequired,
};
