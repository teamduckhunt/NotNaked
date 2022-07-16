import React from 'react';
import styles from './SalePrice.module.css';

export default function SalePrice({ originalPrice, salePrice }) {
  if (originalPrice) {
    if (salePrice) {
      return (
        <div className={styles.priceContainer}>
          <p className={styles.strikeThrough}>
            $
            <s>{originalPrice}</s>
          </p>
          <p>
            $
            {salePrice}
          </p>
        </div>
      );
    }
    return (
      <div>
        <p>
          $
          {originalPrice}
        </p>
      </div>
    );
  }
}
