import React from 'react';
import styles from './SalePrice.module.css';

export default function SalePrice({ originalPrice, salePrice }) {
  if (originalPrice) {
    if (salePrice) {
      return (
        <div className={styles.priceContainer}>
          <div className={styles.strikeThrough}>
            $
            <s>{originalPrice}</s>
          </div>
          <div>
            $
            {salePrice}
          </div>
        </div>
      );
    }
    return (
      <div>
        <div>
          $
          {originalPrice}
        </div>
      </div>
    );
  }
}
