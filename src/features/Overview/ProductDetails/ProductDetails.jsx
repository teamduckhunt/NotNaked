/* eslint-disable react/prop-types */
import React from 'react';
import { useProductInformationByIdQuery } from '../../../services/products.js';
import styles from './ProductDetails.module.css';
import pinkcheck from '../pics/pinkcheck.png';

export default function ProductDetails({ currentViewItemId }) {
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
      <div className={styles.details}>
        <div className={styles.description}>
          <b className={styles.slogan}>{product.slogan}</b>
          <p className={styles.innerDescription}>{product.description}</p>
        </div>
        <div>
          <style className={styles.line} />
        </div>
        <div className={styles.features}>
          {product.features.map((aFeature, index) => (
            <div key={index}>
              <img src={pinkcheck} className={styles.checkMark} alt="checkmark indicating current style selected" />
              {aFeature.feature}
              :
              {' '}
              {aFeature.value}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
