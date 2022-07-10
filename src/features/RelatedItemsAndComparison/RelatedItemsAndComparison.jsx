// && should I be creating a state with this data?
/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React from 'react';

import RelatedProductList from './RelatedProductsList/RelatedProductList.jsx';
import OutfitList from './OutfitList/OutfitList.jsx';
// import styles from './RelatedItemsAndComparison.module.css';

export default function RelatedItemsAndComparison() {
  return (
    <div>
      <h2>I am RelatedItemsAndComparison</h2>
      <OutfitList />
      <RelatedProductList />
    </div>
  );
}
// TODO: Set up to get related produccts of a product
// && should I be creating a state with this data?
