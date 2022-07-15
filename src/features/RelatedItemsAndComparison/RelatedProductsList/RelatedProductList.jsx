/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import RelatedProductItem from './RelatedProductItem.jsx';
import ListContainer from '../helpers/ListContainer/ListContainer.jsx';
import { useRelatedProductsIdQuery } from '../../../services/products';
import styles from './RelatedProductList.module.css'

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
      <div className={styles.relatedContainer}>
        <h3>My Related Products</h3>
        <ListContainer>
          {data.map((productId) => (
            <RelatedProductItem
              key={productId}
              productId={productId}
              currentViewItemId={currentViewItemId}
            />
          ))}
        </ListContainer>
      </div>
    );
  }
}

RelatedProductList.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
