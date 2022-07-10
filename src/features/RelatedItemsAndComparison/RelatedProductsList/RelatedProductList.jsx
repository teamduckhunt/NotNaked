/* eslint-disable import/extensions */
import React from 'react';
import ItemsCard from '../ItemsCard/ItemCard.jsx';

export default function RelatedProductList({ productList }) {
  return productList.map((product) => <ItemsCard product={product} />);
}
