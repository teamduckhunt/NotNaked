/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import RelatedProductItem from './RelatedProductItem.jsx';
import ListContainer from '../helpers/ListContainer/ListContainer.jsx';
import { useRelatedProductsIdQuery } from '../../../services/products';

export default function RelatedProductList({ currentViewItemId }) {
  const { data, error, isLoading } = useRelatedProductsIdQuery(currentViewItemId);

  if (error) {
    return <>Oh no, there was an error</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  if (data) {
    return (
      <>
        <p>My Related Products</p>
        <ListContainer>
          {data.map((productId) => <RelatedProductItem key={productId} productId={productId} />)}
        </ListContainer>
      </>
    );
  }
}

RelatedProductList.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
