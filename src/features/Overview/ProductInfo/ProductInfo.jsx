/* eslint-disable react/prop-types */
import React from 'react';
import { useProductInformationByIdQuery } from '../../../services/products.js';
import styles from './ProductInfo.module.css';

export default function ProductInfo({ currentViewItemId }) {
  const {
    data: product,
    error,
    isLoading,
  } = useProductInformationByIdQuery(currentViewItemId);

  if (error) {
    return <div>There is an error!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (product) {
    return (
      <div>
        <p className={styles.reviews}>Reviews</p>
        <p className={styles.category}>{(product.category).toUpperCase()}</p>
        <h2 className={styles.name}>{product.name}</h2>
      </div>
    );
  }
}
