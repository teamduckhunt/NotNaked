/* eslint-disable react/prop-types */
import React from 'react';
import { useProductInformationByIdQuery } from '../../../services/products.js';

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
      <div>
        <b>{product.slogan}</b>
        <p>{product.description}</p>
        {/* <p>{product.features}</p> */}
      </div>
    );
  }
}
