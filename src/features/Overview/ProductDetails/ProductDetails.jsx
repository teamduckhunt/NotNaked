/* eslint-disable react/prop-types */
import React from 'react';
// import { GrCheckmark } from 'react-icons/ai';
import { useProductInformationByIdQuery } from '../../../services/products.js';
import styles from './ProductDetails.module.css';

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
    console.log('features: ', product.features);
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
          {product.features.map((aFeature) => (
            <div>
              ✔️
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
