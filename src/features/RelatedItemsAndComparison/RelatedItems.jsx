/* eslint-disable import/extensions */
import React from 'react';
import { useProductsByPageNCountQuery } from '../../services/products';
import RelatedProductList from './RelatedProductsList/RelatedProductList.jsx';
import styles from './RelatedItems.module.css';

export default function RelatedItemsAndComparison() {
  return (
    <div>
      <h1>I am RelatedItemsAndComparison</h1>
      <div>
        <h2>Getting all products via RTK Query</h2>
        <ul className={styles.product_list}>
          <RelatedProductList products={useProductsByPageNCountQuery(1, 10)} />
        </ul>
      </div>
    </div>
  );
}
// TODO: Set up to get related produccts of a product
// && should I be creating a state with this data?
