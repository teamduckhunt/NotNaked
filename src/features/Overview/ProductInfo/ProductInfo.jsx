/* eslint-disable react/prop-types */
import React from 'react';
import { useProductInformationByIdQuery } from '../../../services/products.js';

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
        <p>Reviews</p>
        <p>{product.category}</p>
        <h2>{product.name}</h2>
        <p>Price</p>
      </div>
    );
  }
}
