/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
// /* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import PropTypes from 'prop-types';
import { useProductStylesQuery, useProductInformationByIdQuery } from '../../../../services/products';
import Card from '../../../UI/Card.jsx';
import styles from './OutfitItemCard.module.css';

export default function OutfitItemCard({ productId, handleDeleteOutfit}) {
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
    <Card className={styles.product_card}>
      <div className={styles.product_card_header}>
        <img className={styles.product_img} src={image} alt="nothing" />
        <div className={styles.product_star} onClick={handleDeleteOutfit}> x </div>
      </div>
      <div className={styles.product_card_body}>
        <p>{product.category}</p>
        <p>{product.name}</p>
        {/* TODO: default price needs to change with sales and also styles */}
        <p>${product.default_price}</p>
        <p>**** duck rating here</p>
      </div>
    </Card>
  );
}

OutfitItemCard.propTypes = {
  productId: PropTypes.number.isRequired,
  handleDeleteOutfit: PropTypes.func.isRequired,
};

// const {
//   data: stylesData,
//   error: stylesError,
//   isLoading: isStylesLoading
// } = useProductStylesQuery(productId);
