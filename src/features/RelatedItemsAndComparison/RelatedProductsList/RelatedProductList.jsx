/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import ItemsCard from '../ItemsCard/ItemCard.jsx';

export default function RelatedProductList({ products }) {
  const { data: relatedProductList, error: productError, isLoading: isProductLoading } = products;
  if (productError) {
    return <>Oh no, there was an error</>;
  }

  return isProductLoading ? <>Loading...</> :
    relatedProductList.map((product) => <ItemsCard product={product} />);
}

RelatedProductList.propTypes = {
  products: PropTypes.arrayOf.isRequired,
};
